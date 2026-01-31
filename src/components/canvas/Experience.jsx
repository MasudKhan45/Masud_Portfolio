import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import { Suspense } from 'react'
import Scene from './Scene'
import UI from '../dom/UI'

const Experience = () => {
    return (
        <>
            <Canvas
                shadows
                camera={{ position: [0, 2, 5], fov: 50 }}
                style={{ width: '100vw', height: '100vh' }}
                gl={{ antialias: true }}
            >
                <color attach="background" args={['#111']} />
                <Suspense fallback={null}>
                    <ScrollControls pages={10} damping={0.2} distance={1}>
                        <Scene />
                    </ScrollControls>
                </Suspense>
            </Canvas>
            <UI />
        </>
    )
}

export default Experience
