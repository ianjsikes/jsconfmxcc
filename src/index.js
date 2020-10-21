import ReactDOM from 'react-dom'
import React from 'react'
import { Canvas } from 'react-three-fiber'
import './styles.css'

const App = () => {
  return (
    <Canvas
      colorManagement
      shadowMap
      camera={{ position: [-5, 10, 10], fov: 60 }}
    >
      <mesh>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </Canvas>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
