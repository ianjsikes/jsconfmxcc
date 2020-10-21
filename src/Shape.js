import React from 'react'
import { useFrame } from 'react-three-fiber'
import { easeInOutCubic } from './utils'

export const Shape = ({ position = [0, 0, 0] }) => {
  const meshRef = React.useRef()
  const factor = React.useMemo(() => 0.5 * Math.random(), [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    let t = Math.sin(time * factor)
    t = easeInOutCubic((1 + t) / 2)

    meshRef.current.position.y = position[1] + t * 4
  })

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <sphereBufferGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="green" />
    </mesh>
  )
}
