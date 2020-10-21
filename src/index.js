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
    ></Canvas>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
