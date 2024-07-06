import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import  { Suspense } from 'react'
import Lights from './Light'
import Iphone from './Iphone'
import * as THREE from "three"

const ModelView = (index: number, groupRef: string,gsapType: string, controlRef: string, setLargeRotation: string, size: number, item: string) => {
  return (
    <View className={`w-full h-full ${index === 2} ? 'right-[-100%]: ''`}>
        <ambientLight intensity={0.3}/>

        <PerspectiveCamera makeDefault position={[0,0,4]} />

        <Lights />
         <OrbitControls 
         makeDefault
         ref={controlRef}
         enableZoom = {false}
         enablePan = {false}
         rotateSpeed={0.4}
         target={new THREE.Vector3(0 , 0, 0)}
         onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
         />


         <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0 , 0 ,0]}>
          <Suspense fallback = {<Html><div>Loading</div></Html>}>
            <Iphone 
             scale = {index === 1 ? [15,15,15] : [17,17,17]}
              item={item}
              size={size}
              /> 
          </Suspense>
        </group>
    </View>
  )
}

export default ModelView