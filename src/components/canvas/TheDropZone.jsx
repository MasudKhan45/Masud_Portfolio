import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const TheDropZone = ({ startZ, length = 20 }) => {
    const cloudsRef = useRef()

    useFrame((state) => {
        if (cloudsRef.current) {
            // Animate clouds drifting
            cloudsRef.current.rotation.y = state.clock.elapsedTime * 0.05
        }
    })

    // Create cloud particles
    const clouds = Array.from({ length: 30 }).map((_, i) => ({
        position: [
            (Math.random() - 0.5) * 20,
            Math.random() * 10 - 5,
            startZ - (Math.random() * length)
        ],
        scale: 0.5 + Math.random() * 2
    }))

    return (
        <group>
            {/* Void - very dark */}
            <mesh position={[0, 0, startZ - length / 2]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[50, length]} />
                <meshStandardMaterial color="#000000" />
            </mesh>

            {/* Clouds/Fog particles */}
            <group ref={cloudsRef}>
                {clouds.map((cloud, i) => (
                    <mesh key={i} position={cloud.position}>
                        <sphereGeometry args={[cloud.scale, 8, 8]} />
                        <meshStandardMaterial
                            color="#222233"
                            transparent
                            opacity={0.3}
                            roughness={1}
                        />
                    </mesh>
                ))}
            </group>

            {/* Ambient light for dramatic effect */}
            <pointLight
                position={[0, 10, startZ - length / 2]}
                color="#0088ff"
                intensity={3}
                distance={30}
            />
        </group>
    )
}

export default TheDropZone
