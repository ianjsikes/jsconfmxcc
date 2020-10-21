import ReactDOM from 'react-dom'
import React from 'react'
import { Canvas } from 'react-three-fiber'
import { softShadows } from '@react-three/drei'
import './styles.css'
import { Lights } from './Lights'

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
      <mesh castShadow receiveShadow>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </Canvas>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
