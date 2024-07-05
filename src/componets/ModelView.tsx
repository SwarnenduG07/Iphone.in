import { PerspectiveCamera, View } from '@react-three/drei'
import React from 'react'

const ModelView = (index: number, groupRef: string,gsapType: string, controlRef: string, setLargeRotation: string, size: number, item: string) => {
  return (
    <View className={`border-2 border-red-500 w-full h-full ${index === 2} ? 'right-[-100%]: ''`}>
        <ambientLight intensity={0.3}/>

        <PerspectiveCamera makeDefault position={[0,0,4]} />
    </View>
  )
}

export default ModelView