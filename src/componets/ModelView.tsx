import { PerspectiveCamera, View } from '@react-three/drei'
import  { Suspense } from 'react'
import Lights from './Light'
import Iphone from './Iphone'

const ModelView = (index: number, groupRef: string,gsapType: string, controlRef: string, setLargeRotation: string, size: number, item: string) => {
  return (
    <View className={`border-2 border-red-500 w-full h-full ${index === 2} ? 'right-[-100%]: ''`}>
        <ambientLight intensity={0.3}/>

        <PerspectiveCamera makeDefault position={[0,0,4]} />

        <Lights />

        <Suspense fallback = {<div>Loading</div>}>
          <Iphone />
        </Suspense>
    </View>
  )
}

export default ModelView