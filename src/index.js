import ReactDOM from 'react-dom'
import React from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls, softShadows } from '@react-three/drei'
import './styles.css'
import { Lights } from './Lights'
import { ShapeCluster } from './ShapeCluster'

softShadows()

const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} receiveShadow>
      <planeBufferGeometry args={[100, 100]} />
      <shadowMaterial transparent opacity={0.4} />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas
      colorManagement
      shadowMap
      camera={{ position: [-5, 10, 10], fov: 60 }}
    >
      <fog attach="fog" args={['cyan', 0, 40]} />
      <Lights />
      <Floor />
      <ShapeCluster />
      <OrbitControls />
    </Canvas>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
