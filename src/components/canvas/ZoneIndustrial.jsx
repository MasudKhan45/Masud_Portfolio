import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { resumeData } from '../../data/resumeData'
import { Text, Html } from '@react-three/drei'

const ZoneIndustrial = ({ startZ, length }) => {
    const { experience } = resumeData.sections
    const scroll = useScroll()
    const [activeExp, setActiveExp] = useState(null)

    // Create factory blocks
    const blocks = Array.from({ length: 8 }).map((_, i) => ({
        position: [
            (Math.random() - 0.5) * 10,
            0,
            startZ - (i * (length / 8))
        ],
        size: [2 + Math.random() * 3, 3 + Math.random() * 6, 2 + Math.random() * 3],
        side: Math.random() > 0.5 ? 1 : -1
    }))

    useFrame(() => {
        // Determine which experience is closest based on scroll position
        const currentZ = -scroll.offset * 110 // Match your pathLength

        let closest = null
        let minDist = Infinity

        experience.forEach((exp, i) => {
            const zPos = startZ - (i * (length / experience.length)) - 3
            const dist = Math.abs(currentZ - zPos)
            if (dist < minDist && dist < 8) { // Show when within 8 units
                minDist = dist
                closest = exp.id
            }
        })

        setActiveExp(closest)
    })

    return (
        <group>
            {/* Floor - Industrial metal */}
            <mesh position={[0, -0.1, startZ - length / 2]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[25, length]} />
                <meshStandardMaterial
                    color="#1a1a1a"
                    roughness={0.9}
                    metalness={0.3}
                />
            </mesh>

            {/* Grid markings */}
            <gridHelper
                position={[0, 0, startZ - length / 2]}
                args={[25, 30, '#ff6600', '#331100']}
            />

            {/* Factory Buildings */}
            {blocks.map((block, i) => (
                <group key={i} position={[block.side * 7, 0, block.position[2]]}>
                    <mesh position={[0, block.size[1] / 2, 0]} castShadow receiveShadow>
                        <boxGeometry args={block.size} />
                        <meshStandardMaterial
                            color="#2a2520"
                            roughness={0.9}
                            metalness={0.1}
                        />
                    </mesh>

                    <mesh position={[block.side * -0.1, block.size[1] / 2, 0]}>
                        <boxGeometry args={[0.2, block.size[1] * 0.7, block.size[2] * 0.8]} />
                        <meshStandardMaterial
                            color="#ff6600"
                            emissive="#ff6600"
                            emissiveIntensity={0.8}
                        />
                    </mesh>

                    {i % 2 === 0 && (
                        <mesh position={[0, block.size[1] + 0.5, 0]}>
                            <cylinderGeometry args={[0.3, 0.3, 1, 8]} />
                            <meshStandardMaterial color="#666" metalness={0.8} roughness={0.2} />
                        </mesh>
                    )}
                </group>
            ))}

            {/* Experience Billboards - Clean and Simple */}
            {experience.map((exp, i) => {
                const zPos = startZ - (i * (length / experience.length)) - 3
                const side = i % 2 === 0 ? -6 : 6
                const isActive = activeExp === exp.id

                return (
                    <group key={exp.id} position={[side, 2.5, zPos]}>
                        {/* Billboard backing */}
                        <mesh>
                            <boxGeometry args={[3.5, 2, 0.12]} />
                            <meshStandardMaterial
                                color={isActive ? "#ffaa00" : "#ff6600"}
                                emissive={isActive ? "#ffaa00" : "#ff6600"}
                                emissiveIntensity={isActive ? 1.2 : 0.7}
                                toneMapped={false}
                            />
                        </mesh>

                        {/* Company Name */}
                        <Text
                            position={[0, 0.5, 0.15]}
                            fontSize={0.35}
                            color="white"
                            anchorX="center"
                            anchorY="middle"
                            maxWidth={3}
                            fontWeight="bold"
                        >
                            {exp.company}
                        </Text>

                        {/* Role */}
                        <Text
                            position={[0, 0, 0.15]}
                            fontSize={0.22}
                            color="#ffcc99"
                            anchorX="center"
                            anchorY="middle"
                            maxWidth={3}
                        >
                            {exp.role}
                        </Text>

                        {/* Period */}
                        <Text
                            position={[0, -0.45, 0.15]}
                            fontSize={0.16}
                            color="#ccc"
                            anchorX="center"
                            anchorY="middle"
                            maxWidth={3}
                        >
                            {exp.period}
                        </Text>

                        {/* Detail Card - Only show when close */}
                        {isActive && (
                            <group position={[0, -3, 0]}>
                                <Html center>
                                    <div style={{
                                        width: '320px',
                                        background: 'rgba(20, 10, 5, 0.95)',
                                        border: '2px solid #ff6600',
                                        borderRadius: '8px',
                                        padding: '15px',
                                        color: 'white',
                                        fontFamily: 'monospace',
                                        boxShadow: '0 0 20px rgba(255, 102, 0, 0.4)',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5'
                                    }}>
                                        <div style={{ color: '#ffaa66', marginBottom: '8px', fontWeight: 'bold' }}>
                                            Details:
                                        </div>
                                        <div style={{ color: '#ddd' }}>
                                            {exp.desc}
                                        </div>
                                    </div>
                                </Html>
                            </group>
                        )}
                    </group>
                )
            })}

            {/* Ambient light pillars */}
            <pointLight position={[0, 5, startZ]} color="#ff6600" intensity={2} distance={20} />
            <pointLight position={[0, 5, startZ - length / 2]} color="#ff6600" intensity={2} distance={20} />
            <pointLight position={[0, 5, startZ - length]} color="#ff6600" intensity={2} distance={20} />
        </group>
    )
}

export default ZoneIndustrial
