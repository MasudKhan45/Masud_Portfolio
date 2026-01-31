import { Text } from '@react-three/drei'
import { resumeData } from '../../data/resumeData'

const ZoneSkills = ({ startZ, length }) => {
    const { skills } = resumeData.sections

    return (
        <group>
            {/* Floor */}
            <mesh position={[0, -0.1, startZ - length / 2]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[25, length]} />
                <meshStandardMaterial
                    color="#0a0a1a"
                    roughness={0.8}
                    metalness={0.4}
                />
            </mesh>

            {/* Grid */}
            <gridHelper
                position={[0, 0, startZ - length / 2]}
                args={[25, 30, '#00ffff', '#001a1a']}
            />

            {/* Section Title */}
            <group position={[0, 4, startZ - 3]}>
                <Text
                    fontSize={1.2}
                    color="#00ffff"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.05}
                    outlineColor="#000"
                >
                    SKILLS & EXPERTISE
                </Text>
                <mesh position={[0, -0.8, 0]}>
                    <boxGeometry args={[10, 0.05, 0.05]} />
                    <meshBasicMaterial color="#00ffff" />
                </mesh>
            </group>

            {/* Skills Display - 2 Column Layout */}
            {skills.map((skill, i) => {
                // Create a 2-column layout
                const col = i % 2 // 0 or 1 (left or right)
                const row = Math.floor(i / 2)

                const xPos = col === 0 ? -3.5 : 3.5 // Left or right
                const zPos = startZ - 8 - (row * 5) // 5 units spacing between rows

                return (
                    <group key={i} position={[xPos, 2, zPos]}>
                        {/* Skill Badge Background */}
                        <mesh>
                            <boxGeometry args={[5.5, 1, 0.12]} />
                            <meshStandardMaterial
                                color="#1a1a3a"
                                emissive="#00ffff"
                                emissiveIntensity={0.4}
                                toneMapped={false}
                            />
                        </mesh>

                        {/* Glowing Border */}
                        <mesh position={[0, 0, 0.07]}>
                            <boxGeometry args={[5.7, 1.15, 0.05]} />
                            <meshBasicMaterial
                                color="#00ffff"
                                transparent
                                opacity={0.4}
                            />
                        </mesh>

                        {/* Skill Name */}
                        <Text
                            position={[0, 0, 0.15]}
                            fontSize={0.35}
                            color="white"
                            anchorX="center"
                            anchorY="middle"
                            maxWidth={5}
                            fontWeight="bold"
                        >
                            {skill.name}
                        </Text>

                        {/* Glow effect */}
                        <pointLight
                            position={[0, 0, 0.5]}
                            color="#00ffff"
                            intensity={0.6}
                            distance={4}
                        />
                    </group>
                )
            })}
        </group>
    )
}

export default ZoneSkills
