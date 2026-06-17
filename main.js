gsap.registerPlugin(ScrollTrigger)

/* Three.js Background (UNCHANGED) */

const canvas=document.querySelector("#bg-canvas")
const scene=new THREE.Scene()
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
const renderer=new THREE.WebGLRenderer({canvas,alpha:true})
renderer.setSize(window.innerWidth,window.innerHeight)

const geometry=new THREE.BufferGeometry()
const count=2000
const positions=new Float32Array(count*3)

for(let i=0;i<count*3;i++){
positions[i]=(Math.random()-0.5)*10
}

geometry.setAttribute("position",new THREE.BufferAttribute(positions,3))

const material=new THREE.PointsMaterial({
size:0.005,
color:0xe3a617
})

const mesh=new THREE.Points(geometry,material)
scene.add(mesh)
camera.position.z=3

function animate(){
requestAnimationFrame(animate)
mesh.rotation.y+=0.001
renderer.render(scene,camera)
}
animate()

/* Cursor (UNCHANGED) */

const dot=document.querySelector(".cursor-dot")
const outline=document.querySelector(".cursor-outline")

window.addEventListener("mousemove",(e)=>{
gsap.to(dot,{x:e.clientX,y:e.clientY,duration:0.1})
gsap.to(outline,{x:e.clientX,y:e.clientY,duration:0.3})
})

/* Dark Mode */

const toggle=document.getElementById("theme-toggle")

toggle.onclick=()=>{
document.body.classList.toggle("light-mode")
}

/* Animations */

gsap.from(".hero h1",{y:60,opacity:0,duration:1})
gsap.from(".hero p",{y:40,opacity:0,delay:0.3,duration:1})

gsap.from(".service-box",{
opacity:0,
y:50,
duration:1,
stagger:0.2,
scrollTrigger:{
trigger:".services",
start:"top 80%"
}
})
