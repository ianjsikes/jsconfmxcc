import React from 'react'
import { useSpring, config } from 'react-spring/three'
import { useFrame } from 'react-three-fiber'
import { easeInOutCubic } from './utils'

export const Shape = ({ position = [0, 0, 0] }) => {
  const [active, setActive] = React.useState(false)
  const meshRef = React.useRef()
  const factor = React.useMemo(() => 0.5 * Math.random(), [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    let t = Math.sin(time * factor)
    t = easeInOutCubic((1 + t) / 2)

    meshRef.current.position.y = position[1] + t * 4
    meshRef.current.scale.y = 1 + t * 3
  })

  const { color } = useSpring({
    color: active ? 'hotpink' : 'lightblue',
    config: config.wobbly,
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={() => setActive(!active)}
      castShadow
      receiveShadow
    >
      <sphereBufferGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0} metalness={0.1} />
    </mesh>
  )
}
