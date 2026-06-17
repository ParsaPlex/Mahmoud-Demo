const canvas=document.querySelector('#bg-canvas')

const scene=new THREE.Scene()

const camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer=new THREE.WebGLRenderer({
canvas,
alpha:true
})

renderer.setSize(window.innerWidth,window.innerHeight)

const particlesGeometry=new THREE.BufferGeometry()

const particlesCount=2000

const posArray=new Float32Array(particlesCount*3)

for(let i=0;i<particlesCount*3;i++){
posArray[i]=(Math.random()-0.5)*10
}

particlesGeometry.setAttribute(
'position',
new THREE.BufferAttribute(posArray,3)
)

const material=new THREE.PointsMaterial({
size:0.005,
color:0xe3a617
})

const particlesMesh=new THREE.Points(
particlesGeometry,
material
)

scene.add(particlesMesh)

camera.position.z=3

function animate(){

requestAnimationFrame(animate)

particlesMesh.rotation.y+=0.001

renderer.render(scene,camera)

}

animate()

const dot=document.querySelector('.cursor-dot')
const outline=document.querySelector('.cursor-outline')

window.addEventListener('mousemove',e=>{

gsap.to(dot,{
x:e.clientX,
y:e.clientY,
duration:0.1
})

gsap.to(outline,{
x:e.clientX,
y:e.clientY,
duration:0.3
})

})

const themeBtn=document.getElementById("theme-toggle")

themeBtn.addEventListener("click",()=>{
document.body.classList.toggle("light-mode")
})

gsap.registerPlugin(ScrollTrigger)

gsap.from(".reveal-text",{
y:80,
opacity:0,
duration:1.2
})

gsap.from(".service-card",{
scrollTrigger:{
trigger:".services",
start:"top 80%"
},
y:60,
opacity:0,
duration:0.8,
stagger:0.2
})
