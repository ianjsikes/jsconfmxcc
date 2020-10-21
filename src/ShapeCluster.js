import React from 'react'
import { Shape } from './Shape'
import { randomRange } from './utils'

export const ShapeCluster = ({ number = 10 }) => {
  const positions = React.useMemo(() => {
    return [...Array(number)].map(() => [
      randomRange(-3, 3),
      randomRange(-1, 3),
      randomRange(-3, 3),
    ])
  }, [])

  return (
    <group>
      {positions.map((position, i) => (
        <Shape key={i} position={position} />
      ))}
    </group>
  )
}
