import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Starfield = ({ count = 2000 }) => {
    const points = useRef()

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            const i3 = i * 3

            // Random positions in a large sphere around the scene
            positions[i3] = (Math.random() - 0.5) * 100
            positions[i3 + 1] = (Math.random() - 0.5) * 100
            positions[i3 + 2] = (Math.random() - 0.5) * 200 - 50 // Extend far behind
        }

        return positions
    }, [count])

    useFrame((state) => {
        if (points.current) {
            // Gentle rotation
            points.current.rotation.y = state.clock.elapsedTime * 0.01
        }
    })

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                color="#ffffff"
                sizeAttenuation
                transparent
                opacity={0.8}
                depthWrite={false}
            />
        </points>
    )
}

export default Starfield
