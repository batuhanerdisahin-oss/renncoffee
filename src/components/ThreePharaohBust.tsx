"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreePharaohBust() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      36,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 4.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Warm Ambient & Dramatic Ancient Spotlights
    const ambientLight = new THREE.AmbientLight(0xfff5e6, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffdfa8, 2.8);
    sunLight.position.set(3, 4, 3);
    scene.add(sunLight);

    const rimLight = new THREE.PointLight(0xc59a6f, 3.2, 10);
    rimLight.position.set(-3, 1, -2);
    scene.add(rimLight);

    const goldFill = new THREE.PointLight(0xffb74d, 1.8, 8);
    goldFill.position.set(0, -2, 2);
    scene.add(goldFill);

    // Group that will rotate on scroll
    const artifactGroup = new THREE.Group();
    scene.add(artifactGroup);

    // Texture Loader for User's Uploaded Golden Pharaoh Bust
    const textureLoader = new THREE.TextureLoader();
    const pharaohTex = textureLoader.load("/brand/pharaoh-clean.png");
    pharaohTex.colorSpace = THREE.SRGBColorSpace;

    // Materials:
    // 1. Front: The Pharaoh image with golden warm sheen
    const frontMat = new THREE.MeshStandardMaterial({
      map: pharaohTex,
      roughness: 0.35,
      metalness: 0.45,
      transparent: true,
    });

    // 2. Gold metallic sides and back (Ancient Royal Stele)
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xc99c56,
      roughness: 0.28,
      metalness: 0.85,
      transparent: true,
    });

    // Rounded Royal Stele / Tablet Geometry (aspect ratio matches 420x540 ~ 1 : 1.28)
    const tabletWidth = 1.95;
    const tabletHeight = 2.5;
    const tabletDepth = 0.08;

    // Multi-material box: [right, left, top, bottom, front, back]
    const materials = [
      goldMat, // +x
      goldMat, // -x
      goldMat, // +y
      goldMat, // -y
      frontMat, // +z (front with user's Pharaoh bust)
      goldMat, // -z (back royal gold plate)
    ];

    const steleGeo = new THREE.BoxGeometry(tabletWidth, tabletHeight, tabletDepth, 4, 4, 1);
    const steleMesh = new THREE.Mesh(steleGeo, materials);
    artifactGroup.add(steleMesh);

    // Subtle Golden Bevel Frame around the stele
    const frameGeo = new THREE.BoxGeometry(tabletWidth + 0.08, tabletHeight + 0.08, tabletDepth * 0.7);
    const frameMesh = new THREE.Mesh(frameGeo, goldMat);
    frameMesh.position.z = -0.02;
    artifactGroup.add(frameMesh);

    // Golden ambient particles drifting around the relic
    const particleCount = 35;
    const particleGeo = new THREE.BufferGeometry();
    const posArr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 1.3 + Math.random() * 1.6;
      const angle = Math.random() * Math.PI * 2;
      posArr[i * 3] = Math.cos(angle) * radius;
      posArr[i * 3 + 1] = -1.2 + Math.random() * 2.8;
      posArr[i * 3 + 2] = Math.sin(angle) * radius;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(posArr, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.065,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    artifactGroup.add(particles);

    // Scroll tracking (NO React re-renders for 120fps smooth performance)
    let scrollY = window.scrollY;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Subtle mouse tilt interaction
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
        mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.4;
        mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.3;
      }
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    let reqId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Scroll calculation: fade out after 1000px of scrolling
      const maxScroll = 1000;
      const scrollFactor = Math.min(scrollY / maxScroll, 1);

      // Continuous slow majestic rotation + dynamic scroll-driven spin
      const baseRotation = elapsed * 0.35;
      const scrollRotation = scrollFactor * Math.PI * 3.2; // rotates as user scrolls down
      artifactGroup.rotation.y = baseRotation + scrollRotation + mouseX;
      artifactGroup.rotation.x = Math.sin(elapsed * 0.7) * 0.06 - mouseY;
      artifactGroup.rotation.z = Math.cos(elapsed * 0.5) * 0.03;

      // Gentle floating levitation
      artifactGroup.position.y = Math.sin(elapsed * 1.1) * 0.08 - scrollFactor * 0.6;

      // Scale down and fade out on scroll
      const scale = Math.max(1 - scrollFactor * 1.15, 0.001);
      artifactGroup.scale.set(scale, scale, scale);

      // Opacity fade out
      const opacity = Math.max(1 - scrollFactor * 1.3, 0);
      frontMat.opacity = opacity;
      goldMat.opacity = opacity;
      particleMat.opacity = opacity * 0.6;

      if (opacity <= 0.01) {
        artifactGroup.visible = false;
      } else {
        artifactGroup.visible = true;
      }

      // Rotate drifting golden stardust
      particles.rotation.y = -elapsed * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      steleGeo.dispose();
      frameGeo.dispose();
      particleGeo.dispose();
      frontMat.dispose();
      goldMat.dispose();
      particleMat.dispose();
      pharaohTex.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full pointer-events-none select-none relative"
      aria-hidden="true"
    />
  );
}
