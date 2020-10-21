import React from 'react'

export const Shape = ({ position = [0, 0, 0] }) => {
  return (
    <mesh position={position} castShadow receiveShadow>
      <sphereBufferGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="green" />
    </mesh>
  )
}
