import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import {
  INITIAL_SETTINGS,
  INITIAL_BRANCHES,
  INITIAL_CATEGORIES,
  INITIAL_PRODUCTS,
  Product,
  Category,
  Branch,
  SiteSettings,
} from "../data/initialData";

export interface FranchiseApplication {
  id?: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  concept?: string;
  targetLocation: string;
  budget: string;
  experience: string;
  message: string;
  status: "pending" | "reviewed" | "contacted" | "archived";
  createdAt?: any;
}

export interface ContactMessage {
  id?: string;
  fullName: string;
  phone?: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: any;
}

// 1. Site Settings
export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const docRef = doc(db, "settings", "main");
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data() as SiteSettings;
    }
  } catch (err) {
    console.warn("Firestore settings read failed, checking localStorage / defaults", err);
  }

  if (typeof window !== "undefined") {
    const local = localStorage.getItem("renn_settings");
    if (local) {
      try {
        return JSON.parse(local);
      } catch (e) {}
    }
  }
  return INITIAL_SETTINGS;
}

export async function updateSiteSettings(settings: SiteSettings): Promise<void> {
  if (typeof window !== "undefined") {
    localStorage.setItem("renn_settings", JSON.stringify(settings));
  }
  try {
    const docRef = doc(db, "settings", "main");
    await setDoc(docRef, settings, { merge: true });
  } catch (err) {
    console.warn("Firestore settings update failed, saved to local cache", err);
  }
}

// 2. Products
export async function getProducts(): Promise<Product[]> {
  try {
    const colRef = collection(db, "products");
    const snap = await getDocs(colRef);
    if (!snap.empty) {
      const items: Product[] = [];
      snap.forEach((d) => items.push({ id: d.id, ...d.data() } as Product));
      return items;
    }
  } catch (err) {
    console.warn("Firestore products read failed, using initial catalog", err);
  }

  if (typeof window !== "undefined") {
    const local = localStorage.getItem("renn_products");
    if (local) {
      try {
        return JSON.parse(local);
      } catch (e) {}
    }
  }
  return INITIAL_PRODUCTS;
}

export async function updateProduct(product: Product): Promise<void> {
  if (typeof window !== "undefined") {
    const local = localStorage.getItem("renn_products");
    let list: Product[] = local ? JSON.parse(local) : [...INITIAL_PRODUCTS];
    list = list.map((p) => (p.id === product.id ? product : p));
    localStorage.setItem("renn_products", JSON.stringify(list));
  }
  try {
    const docRef = doc(db, "products", product.id);
    await setDoc(docRef, product, { merge: true });
  } catch (err) {
    console.warn("Firestore product update failed", err);
  }
}

export async function addProduct(product: Omit<Product, "id">): Promise<Product> {
  const newId = "prod_" + Date.now();
  const fullProduct: Product = { ...product, id: newId };
  if (typeof window !== "undefined") {
    const local = localStorage.getItem("renn_products");
    let list: Product[] = local ? JSON.parse(local) : [...INITIAL_PRODUCTS];
    list.unshift(fullProduct);
    localStorage.setItem("renn_products", JSON.stringify(list));
  }
  try {
    const docRef = doc(db, "products", newId);
    await setDoc(docRef, fullProduct);
  } catch (err) {
    console.warn("Firestore product add failed", err);
  }
  return fullProduct;
}

// 3. Branches
export async function getBranches(): Promise<Branch[]> {
  try {
    const colRef = collection(db, "branches");
    const snap = await getDocs(colRef);
    if (!snap.empty) {
      const items: Branch[] = [];
      snap.forEach((d) => items.push({ id: d.id, ...d.data() } as Branch));
      return items;
    }
  } catch (err) {
    console.warn("Firestore branches read failed", err);
  }
  if (typeof window !== "undefined") {
    const local = localStorage.getItem("renn_branches");
    if (local) {
      try {
        return JSON.parse(local);
      } catch (e) {}
    }
  }
  return INITIAL_BRANCHES;
}

export async function updateBranch(branch: Branch): Promise<void> {
  if (typeof window !== "undefined") {
    const local = localStorage.getItem("renn_branches");
    let list: Branch[] = local ? JSON.parse(local) : [...INITIAL_BRANCHES];
    list = list.map((b) => (b.id === branch.id ? branch : b));
    localStorage.setItem("renn_branches", JSON.stringify(list));
  }
  try {
    const docRef = doc(db, "branches", branch.id);
    await setDoc(docRef, branch, { merge: true });
  } catch (err) {
    console.warn("Firestore branch update failed", err);
  }
}

// 4. Franchise Applications
export async function submitFranchiseApplication(
  appData: Omit<FranchiseApplication, "id" | "status" | "createdAt">
): Promise<{ success: boolean; id?: string }> {
  const newApp: FranchiseApplication = {
    ...appData,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  // Local storage backup
  if (typeof window !== "undefined") {
    const local = localStorage.getItem("renn_franchise_apps");
    const list: FranchiseApplication[] = local ? JSON.parse(local) : [];
    list.unshift({ ...newApp, id: "local_" + Date.now() });
    localStorage.setItem("renn_franchise_apps", JSON.stringify(list));
  }

  try {
    const docRef = await addDoc(collection(db, "franchise_applications"), {
      ...newApp,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (err) {
    console.warn("Firestore franchise add fallback to local", err);
    return { success: true, id: "local_" + Date.now() };
  }
}

export async function getFranchiseApplications(): Promise<FranchiseApplication[]> {
  try {
    const q = query(
      collection(db, "franchise_applications"),
      orderBy("createdAt", "desc")
    );
    const snap = await getDocs(q);
    if (!snap.empty) {
      const items: FranchiseApplication[] = [];
      snap.forEach((d) => items.push({ id: d.id, ...d.data() } as FranchiseApplication));
      return items;
    }
  } catch (err) {
    console.warn("Firestore applications read fallback", err);
  }

  if (typeof window !== "undefined") {
    const local = localStorage.getItem("renn_franchise_apps");
    if (local) {
      try {
        return JSON.parse(local);
      } catch (e) {}
    }
  }

  // Sample data for admin presentation if empty
  return [
    {
      id: "demo_1",
      fullName: "Ahmet Yılmaz",
      phone: "+90 532 111 22 33",
      email: "ahmet.yilmaz@example.com",
      city: "Ankara",
      targetLocation: "Çankaya / Tunalı Hilmi Cad.",
      budget: "2.5M - 3.5M ₺",
      experience: "5 yıl kafe ve restoran işletmeciliği tecrübesi",
      message: "Renn Coffee'nin bohem ve antik konseptini Ankara'nın en işlek caddesinde hayata geçirmek istiyoruz.",
      status: "reviewed",
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    },
    {
      id: "demo_2",
      fullName: "Selin Demir",
      phone: "+90 555 444 77 88",
      email: "selin.demir@example.com",
      city: "İstanbul",
      targetLocation: "Kadıköy Moda",
      budget: "3.5M - 5M ₺",
      experience: "Gastronomi mezunuyum, 3. nesil kahve barı projemiz var.",
      message: "Moda sahil hattında uygun köşe dükkan portföyümüz mevcut.",
      status: "pending",
      createdAt: new Date(Date.now() - 3600000 * 8).toISOString(),
    },
  ];
}

// 5. Contact Messages
export async function submitContactMessage(
  msgData: Omit<ContactMessage, "id" | "createdAt">
): Promise<{ success: boolean; id?: string }> {
  const newMsg: ContactMessage = {
    ...msgData,
    createdAt: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    const local = localStorage.getItem("renn_contact_messages");
    const list: ContactMessage[] = local ? JSON.parse(local) : [];
    list.unshift({ ...newMsg, id: "msg_" + Date.now() });
    localStorage.setItem("renn_contact_messages", JSON.stringify(list));
  }

  try {
    const docRef = await addDoc(collection(db, "contact_messages"), {
      ...newMsg,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (err) {
    console.warn("Firestore contact message fallback to local", err);
    return { success: true, id: "msg_" + Date.now() };
  }
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  try {
    const q = query(collection(db, "contact_messages"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    if (!snap.empty) {
      const items: ContactMessage[] = [];
      snap.forEach((d) => items.push({ id: d.id, ...d.data() } as ContactMessage));
      return items;
    }
  } catch (err) {
    console.warn("Firestore contact messages fallback", err);
  }

  if (typeof window !== "undefined") {
    const local = localStorage.getItem("renn_contact_messages");
    if (local) {
      try {
        return JSON.parse(local);
      } catch (e) {}
    }
  }

  return [
    {
      id: "demo_m1",
      fullName: "Burak Kaya",
      email: "burak.kaya@example.com",
      phone: "+90 530 999 88 77",
      subject: "Özel Etkinlik & Toplantı Rezervasyonu",
      message: "Hafta sonu 15 kişilik özel bir kahve tadım workshop etkinliği düzenlemek istiyoruz. Şube alanını kapatabiliyor muyuz?",
      createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    },
  ];
}
