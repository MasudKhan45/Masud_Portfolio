import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Lighting = () => {
    const spotRef = useRef()

    useFrame((state) => {
        // Subtle light animation
        if (spotRef.current) {
            spotRef.current.intensity = 5 + Math.sin(state.clock.elapsedTime * 2) * 0.5
        }
    })

    return (
        <>
            {/* Main Ambient */}
            <ambientLight intensity={0.4} color="#ffffff" />

            {/* Key Light with shadows */}
            <directionalLight
                position={[10, 10, 5]}
                intensity={0.6}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />

            {/* Rim Light for character separation */}
            <directionalLight
                position={[-5, 5, -5]}
                intensity={0.3}
                color="#0088ff"
            />

            {/* Animated spot for drama */}
            <spotLight
                ref={spotRef}
                position={[0, 10, 0]}
                angle={0.5}
                penumbra={0.5}
                intensity={5}
                color="#00ffff"
                castShadow={false}
            />

            {/* Hemisphere for sky/ground gradient */}
            <hemisphereLight
                args={['#0088ff', '#ff6600', 0.3]}
            />
        </>
    )
}

export default Lighting
