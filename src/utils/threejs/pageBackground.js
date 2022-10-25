import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from "gsap"
import { BACKGROUND_LEFT_ROTATION, BACKGROUND_RIGHT_ROTATION, BACKGROUND_CENTER_BOTTOM_ROTATION } from "./constants"

const bgCurrentRotation = {...BACKGROUND_LEFT_ROTATION}

// TODO: Need to clean this
// - try to improve how it looks on mobile

// const planeColor = 0x3668a5
const planeColorArray = [54/255, 104/255, 165/255]
const planeAccentColorArray = [138 / 255, 234 / 255, 146 / 255]

const mouse = {
  x: undefined,
  y: undefined
}
let plane, renderer, scene, camera, raycaster

const captureNormalizedMousePosition = e => {
  mouse.x = (e.clientX / innerWidth) * 2 - 1
  mouse.y = -((e.clientY / innerHeight) * 2 - 1)
}

let width, height
export const renderBackground = (canvas) => {
  setUpScene(canvas)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableZoom = false

  const bringPlaneToLife = (time) => {
    const { array, originalPositions, randomValues } = plane.geometry.attributes.position
    for (let i = 2; i < array.length; i+=3) {

      if (time) {
        array[i] = originalPositions[i] + Math.cos(time +
          randomValues[parseInt(i / 3)]
        ) * Math.sign(randomValues[parseInt(i / 3)])
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
    controls.update()

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

const setUpScene = (canvas) => {
  width = canvas.width
  height = canvas.height
  renderer = new THREE.WebGLRenderer({antialias: true, canvas})
  renderer.setSize(width, height)
  renderer.setClearColor(0xffffff, 0)

  raycaster = new THREE.Raycaster()

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000)
  camera.position.z = 35
  scene.add(camera)

  const planeGeometry = new THREE.PlaneGeometry(60, 60, 20, 20)
  const planeMaterial = new THREE.MeshPhongMaterial({
    flatShading: true,
    vertexColors: true
  })
  plane = new THREE.Mesh(planeGeometry, planeMaterial)
  scene.add(plane)
  plane.rotation.set(bgCurrentRotation.x, bgCurrentRotation.y, bgCurrentRotation.z)
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

  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(0, 0, 10)
  scene.add(light)
}

const rotateBackground = (to) => {
  gsap.to(bgCurrentRotation, {
    ...to,
    duration: 1,
    onUpdate: () => {
      plane.rotation.set(bgCurrentRotation.x, bgCurrentRotation.y, bgCurrentRotation.z)
    }
  })
}

export const rotateBackgroundTo = (rotation) => {
  switch (rotation) {
    case "left":
      rotateBackground(BACKGROUND_LEFT_ROTATION)
      break
    case "right":
      rotateBackground(BACKGROUND_RIGHT_ROTATION)
      break
    case "center-bottom":
      rotateBackground(BACKGROUND_CENTER_BOTTOM_ROTATION)
      break
    default:
      console.log(`Background rotation ${rotation} not defined`)
      break
  }
}

window.r = rotateBackgroundTo