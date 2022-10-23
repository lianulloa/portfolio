import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

let width, height
export const renderBackground = (canvas) => {
  width = canvas.width
  height = canvas.height
  const renderer = new THREE.WebGLRenderer({antialias: true, canvas})
  renderer.setSize(width, height)
  renderer.setClearColor(0xffffff, 0)

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(75, canvas.width/canvas.height, 0.1, 1000)
  camera.position.z = 35
  scene.add(camera)

  // const cubeGeometry = new THREE.BoxGeometry(10, 10, 10)
  // const cubeMaterial = new THREE.MeshBasicMaterial({ color: "white"})
  const planeGeometry = new THREE.PlaneGeometry(60, 60, 20, 20)
  const planeMaterial = new THREE.MeshPhongMaterial({
    color: 0x3668a5,
    flatShading: true,
    // vertexColors: true
  })
  const plane = new THREE.Mesh(planeGeometry, planeMaterial)
  scene.add(plane)
  plane.rotation.set(-1.0, 0.8, 0.0)
  plane.position.x = 5

  // console.log(plane)

  // const controls = new OrbitControls(camera, renderer.domElement)
  // controls.enableZoom = false

  // const light = new THREE.PointLight(0xffffff)
  // light.position.set(-10, 15, 50)
  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(0, 0, 10)
  scene.add(light)

  const bringPlaneToLife = () => {
    const { array } = plane.geometry.attributes.position
    for (let i = 2; i < array.length; i+=3) {
      // const positionZ = array[i];
      array[i] += Math.random() * 2
    }
  }

  bringPlaneToLife()

  const render = () => {
    // requestAnimationFrame(render)
    renderer.render(scene, camera)
    // controls.update()
  }

  render()
}

