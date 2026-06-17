// 1. Three.js Background (Interactive Network)
const canvas = document.querySelector('#bg-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 2000;
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const material = new THREE.PointsMaterial({ size: 0.005, color: 0xe3a617 });
const particlesMesh = new THREE.Points(particlesGeometry, material);
scene.add(particlesMesh);

camera.position.z = 3;

// Mouse movement effect on particles
let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function animate() {
    requestAnimationFrame(animate);
    particlesMesh.rotation.y += 0.001;
    if (mouseX > 0) {
        particlesMesh.rotation.x += (mouseY * 0.00005);
        particlesMesh.rotation.y += (mouseX * 0.00005);
    }
    renderer.render(scene, camera);
}
animate();

// 2. Custom Cursor Logic
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
    gsap.to(outline, { x: e.clientX, y: e.clientY, duration: 0.3 });
});

// 3. GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Reveal Text Animation
gsap.from(".reveal-text", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    stagger: 0.2
});

gsap.from(".fade-up", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.2
});

// Service Cards Scroll Animation
gsap.from(".service-card", {
    scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%"
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
});
