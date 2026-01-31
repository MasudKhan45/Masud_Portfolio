import { useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, Text, Html } from '@react-three/drei'
import { resumeData } from '../../data/resumeData'
import { neonMaterial, glassMaterial } from '../../utils/materials'

const ZoneNeon = ({ startZ, length }) => {
    const { projects } = resumeData.sections
    const spacing = length / projects.length
    const scroll = useScroll()
    const [activeProject, setActiveProject] = useState(null)

    useFrame(() => {
        // Determine which project is closest
        const currentZ = -scroll.offset * 110 // Match pathLength

        let closest = null
        let minDist = Infinity

        projects.forEach((project, i) => {
            const zPos = startZ - (i * spacing) - 5
            const dist = Math.abs(currentZ - zPos)
            if (dist < minDist && dist < 10) { // Show when within 10 units
                minDist = dist
                closest = project.id
            }
        })

        setActiveProject(closest)
    })

    return (
        <group>
            {/* Floor - Glassy */}
            <mesh position={[0, -0.1, startZ - length / 2]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[20, length]} />
                <meshStandardMaterial {...glassMaterial()} />
            </mesh>

            {/* Grid Lines */}
            <gridHelper
                position={[0, 0, startZ - length / 2]}
                args={[20, length, '#00ffff', '#003333']}
            />

            {/* Projects */}
            {projects.map((project, i) => {
                const zPos = startZ - (i * spacing) - 5
                const isLeft = i % 2 === 0
                const isActive = activeProject === project.id

                return (
                    <group key={project.id} position={[isLeft ? -4 : 4, 1, zPos]}>
                        {/* Pedestal */}
                        <mesh position={[0, -0.5, 0]}>
                            <cylinderGeometry args={[0.8, 0.8, 1, 32]} />
                            <meshStandardMaterial
                                {...neonMaterial('#00ffff', isActive ? 1.5 : 1)}
                                wireframe
                            />
                        </mesh>

                        {/* Hologram */}
                        <mesh position={[0, 1, 0]} rotation-y={Math.PI / 4}>
                            <octahedronGeometry args={[0.6]} />
                            <meshStandardMaterial
                                {...neonMaterial('#ff00ff', isActive ? 2 : 1.5)}
                                wireframe
                            />
                        </mesh>

                        {/* Inner glow */}
                        <mesh position={[0, 1, 0]}>
                            <sphereGeometry args={[0.4]} />
                            <meshStandardMaterial
                                color="#ff00ff"
                                emissive="#ff00ff"
                                emissiveIntensity={isActive ? 2.5 : 2}
                                transparent
                                opacity={0.3}
                                toneMapped={false}
                            />
                        </mesh>

                        {/* Title */}
                        <Text
                            position={[isLeft ? 1.5 : -1.5, 2.5, 0]}
                            fontSize={0.4}
                            color={isActive ? "#ffffff" : "#00ffff"}
                            anchorX={isLeft ? "left" : "right"}
                            anchorY="middle"
                            outlineWidth={0.02}
                            outlineColor="#000"
                        >
                            {project.title}
                        </Text>

                        {/* Detail Card - Only when active */}
                        {isActive && (
                            <group position={[isLeft ? 3 : -3, -1, 0]}>
                                <Html center>
                                    <div style={{
                                        width: '340px',
                                        background: 'rgba(5, 5, 15, 0.98)',
                                        border: '2px solid #ff00ff',
                                        borderRadius: '10px',
                                        padding: '18px',
                                        color: 'white',
                                        fontFamily: 'monospace',
                                        boxShadow: '0 0 25px rgba(255, 0, 255, 0.4)',
                                    }}>
                                        <h3 style={{
                                            margin: '0 0 10px 0',
                                            color: '#ff00ff',
                                            fontSize: '1.1rem',
                                            letterSpacing: '1px'
                                        }}>
                                            {project.title}
                                        </h3>
                                        <div style={{
                                            fontSize: '0.85rem',
                                            color: '#00ffff',
                                            marginBottom: '10px',
                                            fontWeight: 'bold'
                                        }}>
                                            {project.tech}
                                        </div>
                                        <p style={{
                                            fontSize: '0.9rem',
                                            lineHeight: '1.5',
                                            color: '#ddd',
                                            margin: '0'
                                        }}>
                                            {project.desc}
                                        </p>
                                    </div>
                                </Html>
                            </group>
                        )}
                    </group>
                )
            })}
        </group>
    )
}

export default ZoneNeon
