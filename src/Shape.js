import React from 'react'

export const Shape = () => {
  return (
    <mesh castShadow receiveShadow>
      <sphereBufferGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="green" />
    </mesh>
  )
}
