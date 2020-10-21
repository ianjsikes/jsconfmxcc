import React from 'react'
import { useFrame } from 'react-three-fiber'

export const Shape = ({ position = [0, 0, 0] }) => {
  const meshRef = React.useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const t = Math.sin(time)
    meshRef.current.position.y = t
  })

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <sphereBufferGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="green" />
    </mesh>
  )
}
