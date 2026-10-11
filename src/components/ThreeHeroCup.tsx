"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeHeroCupProps {
  scrollProgress: number; // 0 to 1
  mousePos: { x: number; y: number };
}

export default function ThreeHeroCup({ scrollProgress, mousePos }: ThreeHeroCupProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.2, 5.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xf7ede2, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff1dc, 2.4);
    keyLight.position.set(4, 6, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0001;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xc59a6f, 1.2);
    fillLight.position.set(-5, 2, -2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffe0b2, 1.8, 15);
    rimLight.position.set(0, 3, -4);
    scene.add(rimLight);

    // 3. Materials
    // Earthy ceramic glaze texture procedural
    const ceramicMat = new THREE.MeshStandardMaterial({
      color: 0xdec8b0,
      roughness: 0.28,
      metalness: 0.08,
      bumpScale: 0.02,
    });

    const saucerMat = new THREE.MeshStandardMaterial({
      color: 0xc8a98b,
      roughness: 0.35,
      metalness: 0.05,
    });

    const coffeeMat = new THREE.MeshStandardMaterial({
      color: 0x22130c,
      roughness: 0.15,
      metalness: 0.02,
    });

    const cremaMat = new THREE.MeshStandardMaterial({
      color: 0x936037,
      roughness: 0.45,
      metalness: 0.01,
    });

    const goldBandMat = new THREE.MeshStandardMaterial({
      color: 0xc59a6f,
      roughness: 0.2,
      metalness: 0.75,
    });

    // 4. Cup Group
    const cupGroup = new THREE.Group();
    scene.add(cupGroup);

    // Lathe profile for luxury handcrafted ceramic cup
    const points: THREE.Vector2[] = [];
    points.push(new THREE.Vector2(0, 0));
    points.push(new THREE.Vector2(0.9, 0));
    points.push(new THREE.Vector2(1.0, 0.15));
    points.push(new THREE.Vector2(1.3, 0.9));
    points.push(new THREE.Vector2(1.42, 1.6));
    points.push(new THREE.Vector2(1.48, 1.9));
    // Inner wall
    points.push(new THREE.Vector2(1.36, 1.9));
    points.push(new THREE.Vector2(1.3, 1.6));
    points.push(new THREE.Vector2(1.18, 0.9));
    points.push(new THREE.Vector2(0.85, 0.25));
    points.push(new THREE.Vector2(0, 0.25));

    const cupGeom = new THREE.LatheGeometry(points, 48);
    const cupMesh = new THREE.Mesh(cupGeom, ceramicMat);
    cupMesh.castShadow = true;
    cupMesh.receiveShadow = true;
    cupGroup.add(cupMesh);

    // Decorative Gold Rim Band
    const bandGeom = new THREE.TorusGeometry(1.42, 0.035, 16, 64);
    const bandMesh = new THREE.Mesh(bandGeom, goldBandMat);
    bandMesh.rotation.x = Math.PI / 2;
    bandMesh.position.y = 1.68;
    cupGroup.add(bandMesh);

    // Handle (Torus segment)
    const handleGeom = new THREE.TorusGeometry(0.55, 0.12, 16, 32, Math.PI * 1.1);
    const handleMesh = new THREE.Mesh(handleGeom, ceramicMat);
    handleMesh.position.set(1.45, 1.05, 0);
    handleMesh.rotation.z = -Math.PI / 1.8;
    handleMesh.castShadow = true;
    cupGroup.add(handleMesh);

    // Saucer / Tabak
    const saucerPoints: THREE.Vector2[] = [];
    saucerPoints.push(new THREE.Vector2(0, 0));
    saucerPoints.push(new THREE.Vector2(1.4, 0));
    saucerPoints.push(new THREE.Vector2(2.1, 0.22));
    saucerPoints.push(new THREE.Vector2(2.2, 0.35));
    saucerPoints.push(new THREE.Vector2(2.12, 0.35));
    saucerPoints.push(new THREE.Vector2(1.3, 0.12));
    saucerPoints.push(new THREE.Vector2(0, 0.1));

    const saucerGeom = new THREE.LatheGeometry(saucerPoints, 48);
    const saucerMesh = new THREE.Mesh(saucerGeom, saucerMat);
    saucerMesh.position.y = -0.12;
    saucerMesh.receiveShadow = true;
    saucerMesh.castShadow = true;
    cupGroup.add(saucerMesh);

    // Liquid espresso surface
    const coffeeGeom = new THREE.CylinderGeometry(1.32, 1.25, 0.08, 48);
    const coffeeMesh = new THREE.Mesh(coffeeGeom, coffeeMat);
    coffeeMesh.position.y = 1.56;
    cupGroup.add(coffeeMesh);

    // Crema swirl ring
    const cremaGeom = new THREE.RingGeometry(0.3, 1.28, 36);
    const cremaMesh = new THREE.Mesh(cremaGeom, cremaMat);
    cremaMesh.rotation.x = -Math.PI / 2;
    cremaMesh.position.y = 1.605;
    cupGroup.add(cremaMesh);

    // Soft Shadow Plane under Saucer
    const shadowGeo = new THREE.PlaneGeometry(8, 8);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.18 });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -0.15;
    shadowMesh.receiveShadow = true;
    scene.add(shadowMesh);

    // Steam particles (delicate rising embers/steam)
    const steamCount = 35;
    const steamGeo = new THREE.BufferGeometry();
    const steamPos = new Float32Array(steamCount * 3);
    const steamSpeeds = new Float32Array(steamCount);

    for (let i = 0; i < steamCount; i++) {
      steamPos[i * 3] = (Math.random() - 0.5) * 0.9;
      steamPos[i * 3 + 1] = 1.7 + Math.random() * 1.5;
      steamPos[i * 3 + 2] = (Math.random() - 0.5) * 0.9;
      steamSpeeds[i] = 0.004 + Math.random() * 0.006;
    }
    steamGeo.setAttribute("position", new THREE.BufferAttribute(steamPos, 3));

    const steamMat = new THREE.PointsMaterial({
      color: 0xf5ebe0,
      size: 0.12,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const steamPoints = new THREE.Points(steamGeo, steamMat);
    cupGroup.add(steamPoints);

    // Subtle floating coffee beans around the saucer in stage 2
    const beanGeo = new THREE.DodecahedronGeometry(0.12, 1);
    const beanMat = new THREE.MeshStandardMaterial({
      color: 0x3d2010,
      roughness: 0.4,
    });
    const beansGroup = new THREE.Group();
    for (let b = 0; b < 6; b++) {
      const beanMesh = new THREE.Mesh(beanGeo, beanMat);
      const angle = (b / 6) * Math.PI * 2;
      const radius = 1.7 + (b % 2) * 0.3;
      beanMesh.position.set(Math.cos(angle) * radius, -0.05, Math.sin(angle) * radius);
      beanMesh.rotation.set(Math.random(), Math.random(), Math.random());
      beansGroup.add(beanMesh);
    }
    cupGroup.add(beansGroup);

    // Center the group slightly
    cupGroup.position.set(0, -0.6, 0);

    // Target animation values for lerping
    let targetRotY = 0;
    let targetPosX = 0;
    let targetPosY = -0.6;
    let targetPosZ = 0;
    let targetScale = 1;
    let targetCamY = 1.2;
    let targetCamZ = 5.2;

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let reqId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Steam animation
      const posAttr = steamGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < steamCount; i++) {
        let y = posAttr.getY(i) + steamSpeeds[i];
        if (y > 3.6) {
          y = 1.65;
          posAttr.setX(i, (Math.random() - 0.5) * 0.8);
          posAttr.setZ(i, (Math.random() - 0.5) * 0.8);
        } else {
          posAttr.setX(i, posAttr.getX(i) + Math.sin(elapsedTime * 1.5 + i) * 0.002);
        }
        posAttr.setY(i, y);
      }
      posAttr.needsUpdate = true;

      // Subtle breathing motion
      const idleFloat = Math.sin(elapsedTime * 1.2) * 0.05;

      // Mouse influence
      const mouseTiltX = (mousePos.y - 0.5) * 0.3;
      const mouseTiltY = (mousePos.x - 0.5) * 0.5;

      // Scroll transformations:
      // Stage 1 (0 to 0.33): Centered, rotating, camera zooming in
      // Stage 2 (0.33 to 0.70): Gliding right, showing artisanal storytelling on left
      // Stage 3 (0.70 to 1.0): Fading/scaling smoothly into real venue editorial
      const p = scrollProgress;

      if (p <= 0.35) {
        // Hero to Quote
        const t = p / 0.35;
        targetRotY = t * Math.PI * 1.5;
        targetPosX = 0;
        targetPosY = -0.6 + t * 0.2;
        targetCamZ = 5.2 - t * 1.2;
        targetScale = 1 + t * 0.15;
      } else if (p <= 0.75) {
        // Gliding to the right for Chapter 2
        const t = (p - 0.35) / 0.4;
        targetRotY = Math.PI * 1.5 + t * Math.PI * 1.2;
        // On mobile stay more centered, desktop move right
        const isMobile = window.innerWidth < 768;
        targetPosX = isMobile ? 0 : 1.75;
        targetPosY = -0.4;
        targetCamZ = 4.0;
        targetScale = isMobile ? 0.95 : 1.15;
      } else {
        // Transition to venue scene
        const t = (p - 0.75) / 0.25;
        targetRotY = Math.PI * 2.7 + t * 0.8;
        targetPosX = 1.75 * (1 - t * 0.5);
        targetPosY = -0.4 - t * 0.6;
        targetScale = 1.15 * (1 - t * 0.35);
        targetCamZ = 4.0 + t * 1.5;
      }

      // Smooth interpolation (lerp)
      cupGroup.rotation.y += (targetRotY + mouseTiltY - cupGroup.rotation.y) * 0.07;
      cupGroup.rotation.x += (mouseTiltX + 0.12 - cupGroup.rotation.x) * 0.07;
      cupGroup.position.x += (targetPosX - cupGroup.position.x) * 0.07;
      cupGroup.position.y += (targetPosY + idleFloat - cupGroup.position.y) * 0.07;

      const currentScale = cupGroup.scale.x;
      const newScale = currentScale + (targetScale - currentScale) * 0.07;
      cupGroup.scale.set(newScale, newScale, newScale);

      camera.position.z += (targetCamZ - camera.position.z) * 0.07;
      camera.position.y += (targetCamY - camera.position.y) * 0.07;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      cupGeom.dispose();
      saucerGeom.dispose();
      coffeeGeom.dispose();
      cremaGeom.dispose();
      steamGeo.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [scrollProgress, mousePos]);

  return <div ref={containerRef} className="w-full h-full pointer-events-none" />;
}
