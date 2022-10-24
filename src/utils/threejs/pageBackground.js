import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from "gsap"

// const planeColor = 0x3668a5
const planeColorArray = [54/255, 104/255, 165/255]
const planeAccentColorArray = [138 / 255, 234 / 255, 146 / 255]

const mouse = {
  x: undefined,
  y: undefined
}

const captureNormalizedMousePosition = e => {
  mouse.x = (e.clientX / innerWidth) * 2 - 1
  mouse.y = -((e.clientY / innerHeight) * 2 - 1)
}

let width, height
export const renderBackground = (canvas) => {
  width = canvas.width
  height = canvas.height
  const renderer = new THREE.WebGLRenderer({antialias: true, canvas})
  renderer.setSize(width, height)
  renderer.setClearColor(0xffffff, 0)

  const raycaster = new THREE.Raycaster()

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(75, canvas.width/canvas.height, 0.1, 1000)
  camera.position.z = 35
  scene.add(camera)

  const planeGeometry = new THREE.PlaneGeometry(60, 60, 20, 20)
  const planeMaterial = new THREE.MeshPhongMaterial({
    flatShading: true,
    vertexColors: true
  })
  const plane = new THREE.Mesh(planeGeometry, planeMaterial)
  scene.add(plane)
  plane.rotation.set(-1.0, 0.8, 0.0)
  plane.position.x = 5

  const planeItemCount = plane.geometry.attributes.position.count
  plane.geometry.attributes.position.randomValues = Array.from({length: planeItemCount}, () => Math.random() - 0.5)
  const colors = Array(planeItemCount).fill(planeColorArray)
  plane.geometry.setAttribute("color", new THREE.BufferAttribute(
    new Float32Array(
      [].concat(...colors)
    ),
    3
  ))

  // const controls = new OrbitControls(camera, renderer.domElement)
  // controls.enableZoom = false

  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(0, 0, 10)
  scene.add(light)

  const bringPlaneToLife = (time) => {
    const { array, originalPositions, randomValues } = plane.geometry.attributes.position
    for (let i = 2; i < array.length; i+=3) {

      if (time) {
        array[i] = originalPositions[i] + Math.cos(time +
          randomValues[parseInt(i / 3)]
        ) * Math.sign(randomValues[parseInt(i / 3)])
        // array[i - 1] = originalPositions[i - 1] + Math.cos(time +
        //   randomValues[parseInt(i / 3)]
        // ) * Math.sign(randomValues[parseInt(i / 3)]) * 0.5
      } else {
        array[i] += Math.random() * 2
      }
    }

    if (time) {
      plane.geometry.attributes.position.needsUpdate = true
    } else {
      plane.geometry.attributes.position.originalPositions = [...array]
    }

  }
  bringPlaneToLife()

  let frame = 0
  const render = () => {
    requestAnimationFrame(render)
    renderer.render(scene, camera)
    raycaster.setFromCamera(mouse, camera)
    frame += 0.008
    // controls.update()

    bringPlaneToLife(frame)

    const intersects = raycaster.intersectObject(plane)
    if (intersects.length > 0) {
      lightIntersection(intersects[0])
    }
  }

  const lightIntersection = (intersect) => {
    const {face} = intersect

    const hoverColor = {
      r: planeAccentColorArray[0],
      g: planeAccentColorArray[1],
      b: planeAccentColorArray[2]
    }

    gsap.to(hoverColor, {
      r: planeColorArray[0],
      g: planeColorArray[1],
      b: planeColorArray[2],
      duration: 1.5,
      onUpdate: () => {
        for (const key of ["a", "b", "c"]) {
          intersect.object.geometry.attributes.color.setX(face[key], hoverColor.r)
          intersect.object.geometry.attributes.color.setY(face[key], hoverColor.g)
          intersect.object.geometry.attributes.color.setZ(face[key], hoverColor.b)
        }
        intersect.object.geometry.attributes.color.needsUpdate = true
      }
    })
  }
  
  render()
  addEventListener("mousemove", captureNormalizedMousePosition)
}

export const cleanUp = () => {
  removeEventListener("mousemove", captureNormalizedMousePosition)
}

