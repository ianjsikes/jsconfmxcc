import React from 'react'
import { useFrame } from 'react-three-fiber'
import { Shape } from './Shape'
import { randomRange } from './utils'

export const ShapeCluster = ({ number = 10 }) => {
  const groupRef = React.useRef()

  const positions = React.useMemo(() => {
    return [...Array(number)].map(() => [
      randomRange(-3, 3),
      randomRange(-1, 3),
      randomRange(-3, 3),
    ])
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    let t = Math.sin(time * 0.5)

    groupRef.current.rotation.y = t * Math.PI
  })

  return (
    <group ref={groupRef}>
      {positions.map((position, i) => (
        <Shape key={i} position={position} />
      ))}
    </group>
  )
}
