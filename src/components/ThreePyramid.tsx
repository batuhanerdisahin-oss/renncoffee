"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreePyramid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.4, 5.0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xfff6ec, 1.2);
    scene.add(ambient);

    const sunLight = new THREE.DirectionalLight(0xffebcd, 2.8);
    sunLight.position.set(4, 5, 3);
    scene.add(sunLight);

    const rimLight = new THREE.PointLight(0xc59a6f, 2.0, 12);
    rimLight.position.set(-3, 1, -2);
    scene.add(rimLight);

    // Pyramid Group
    const pyramidGroup = new THREE.Group();
    scene.add(pyramidGroup);

    // 1. Main Sandstone Base
    // 4-sided cone is a pyramid
    const baseGeo = new THREE.CylinderGeometry(0.35, 1.75, 1.8, 4, 1);
    baseGeo.rotateY(Math.PI / 4);

    const sandMat = new THREE.MeshStandardMaterial({
      color: 0xd2b79b,
      roughness: 0.55,
      metalness: 0.08,
      flatShading: true,
    });
    const baseMesh = new THREE.Mesh(baseGeo, sandMat);
    baseMesh.position.y = -0.15;
    pyramidGroup.add(baseMesh);

    // 2. Gold Capstone (Benben Stone / Electrum tip)
    const capGeo = new THREE.CylinderGeometry(0, 0.42, 0.65, 4, 1);
    capGeo.rotateY(Math.PI / 4);

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xe6ba78,
      roughness: 0.18,
      metalness: 0.85,
      flatShading: true,
    });
    const capMesh = new THREE.Mesh(capGeo, goldMat);
    capMesh.position.y = 1.05;
    pyramidGroup.add(capMesh);

    // 3. Subtle Hieroglyphic Gold Accent Ring around base
    const ringGeo = new THREE.TorusGeometry(1.6, 0.02, 12, 4);
    ringGeo.rotateX(Math.PI / 2);
    ringGeo.rotateZ(Math.PI / 4);
    const ringMesh = new THREE.Mesh(ringGeo, goldMat);
    ringMesh.position.y = -1.0;
    pyramidGroup.add(ringMesh);

    // 4. Subtle Golden Dust / Sand Particles around pyramid
    const particleCount = 28;
    const particleGeo = new THREE.BufferGeometry();
    const posArr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 1.2 + Math.random() * 1.5;
      const angle = Math.random() * Math.PI * 2;
      posArr[i * 3] = Math.cos(angle) * radius;
      posArr[i * 3 + 1] = -1.0 + Math.random() * 2.5;
      posArr[i * 3 + 2] = Math.sin(angle) * radius;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(posArr, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xc59a6f,
      size: 0.06,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    pyramidGroup.add(particles);

    // Performance-focused scroll tracking via native scroll (NO React state re-renders)
    let scrollY = window.scrollY;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

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
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Scroll calculation: fade out after 1400px of scrolling
      const maxScroll = 1200;
      const scrollFactor = Math.min(scrollY / maxScroll, 1);

      // Continuous slow rotation + scroll-driven rotation
      const baseRotation = elapsed * 0.4;
      const scrollRotation = scrollFactor * Math.PI * 3.5;
      pyramidGroup.rotation.y = baseRotation + scrollRotation;
      pyramidGroup.rotation.x = 0.15 + Math.sin(elapsed * 0.8) * 0.04;
      pyramidGroup.rotation.z = Math.cos(elapsed * 0.6) * 0.02;

      // Gentle floating
      pyramidGroup.position.y = Math.sin(elapsed * 1.2) * 0.08 - scrollFactor * 0.5;

      // Smooth fade out & scale down as user scrolls down
      const scale = Math.max(1 - scrollFactor * 1.2, 0.001);
      pyramidGroup.scale.set(scale, scale, scale);

      // Opacity fade out
      const opacity = Math.max(1 - scrollFactor * 1.3, 0);
      sandMat.opacity = opacity;
      sandMat.transparent = opacity < 1;
      goldMat.opacity = opacity;
      goldMat.transparent = opacity < 1;
      particleMat.opacity = opacity * 0.5;

      if (opacity <= 0.01) {
        pyramidGroup.visible = false;
      } else {
        pyramidGroup.visible = true;
      }

      // Rotate particles slowly
      particles.rotation.y = -elapsed * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      baseGeo.dispose();
      capGeo.dispose();
      ringGeo.dispose();
      particleGeo.dispose();
      sandMat.dispose();
      goldMat.dispose();
      particleMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full pointer-events-none select-none"
      aria-hidden="true"
    />
  );
}
