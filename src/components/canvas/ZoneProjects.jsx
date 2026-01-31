import { Text, Html } from '@react-three/drei'
import { resumeData } from '../../data/resumeData'
import { neonMaterial } from '../../utils/materials'

const ZoneProjects = ({ startZ, length }) => {
    const { projects } = resumeData.sections

    return (
        <group>
            {/* Floor */}
            <mesh position={[0, -0.1, startZ - length / 2]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[20, length]} />
                <meshStandardMaterial
                    color="#050515"
                    roughness={0.7}
                    metalness={0.5}
                />
            </mesh>

            {/* Grid */}
            <gridHelper
                position={[0, 0, startZ - length / 2]}
                args={[20, 20, '#ff00ff', '#330033']}
            />

            {/* Section Title */}
            <group position={[0, 4, startZ - 3]}>
                <Text
                    fontSize={1.2}
                    color="#ff00ff"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.05}
                    outlineColor="#000"
                >
                    PROJECTS
                </Text>
                <mesh position={[0, -0.8, 0]}>
                    <boxGeometry args={[8, 0.05, 0.05]} />
                    <meshBasicMaterial color="#ff00ff" />
                </mesh>
            </group>

            {/* Project Cards */}
            {projects.map((project, i) => {
                const zPos = startZ - 8 - (i * 7)
                const side = i % 2 === 0 ? -5 : 5

                return (
                    <group key={project.id} position={[side, 2.5, zPos]}>
                        {/* Hologram Monument */}
                        <mesh position={[0, 1.5, 0]} rotation-y={Math.PI / 4}>
                            <octahedronGeometry args={[0.7]} />
                            <meshStandardMaterial
                                {...neonMaterial('#ff00ff', 1.5)}
                                wireframe
                            />
                        </mesh>

                        {/* Inner glow */}
                        <mesh position={[0, 1.5, 0]}>
                            <sphereGeometry args={[0.5]} />
                            <meshStandardMaterial
                                color="#ff00ff"
                                emissive="#ff00ff"
                                emissiveIntensity={2}
                                transparent
                                opacity={0.3}
                                toneMapped={false}
                            />
                        </mesh>

                        {/* Project Title */}
                        <Text
                            position={[0, 0.3, 0]}
                            fontSize={0.45}
                            color="#ff00ff"
                            anchorX="center"
                            anchorY="middle"
                            maxWidth={4.5}
                            fontWeight="bold"
                            outlineWidth={0.02}
                            outlineColor="#000"
                        >
                            {project.title}
                        </Text>

                        {/* Tech Stack */}
                        <Text
                            position={[0, -0.3, 0]}
                            fontSize={0.25}
                            color="#00ffff"
                            anchorX="center"
                            anchorY="middle"
                            maxWidth={4.5}
                        >
                            {project.tech}
                        </Text>

                        {/* Description Card - Properly Centered */}
                        <Html
                            position={[0, -1.3, 0]}
                            center
                            distanceFactor={2}
                            transform
                            wrapperClass="project-description"
                        >
                            <div style={{
                                width: '280px',
                                background: 'rgba(10, 0, 10, 0.95)',
                                border: '2px solid #ff00ff',
                                borderRadius: '10px',
                                padding: '12px',
                                color: 'white',
                                fontFamily: 'monospace',
                                fontSize: '0.85rem',
                                lineHeight: '1.4',
                                boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
                                textAlign: 'center',
                                userSelect: 'none',
                                margin: '0 auto'
                            }}>
                                {project.desc}
                            </div>
                        </Html>

                        {/* Point light */}
                        <pointLight
                            position={[0, 1.5, 0]}
                            color="#ff00ff"
                            intensity={1.5}
                            distance={5}
                        />
                    </group>
                )
            })}
        </group>
    )
}

export default ZoneProjects
