import { Text, Html } from '@react-three/drei'
import { resumeData } from '../../data/resumeData'

const ZoneExperience = ({ startZ, length }) => {
    const { experience } = resumeData.sections

    return (
        <group>
            {/* Floor */}
            <mesh position={[0, -0.1, startZ - length / 2]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[20, length]} />
                <meshStandardMaterial
                    color="#1a0f05"
                    roughness={0.9}
                    metalness={0.2}
                />
            </mesh>

            {/* Grid */}
            <gridHelper
                position={[0, 0, startZ - length / 2]}
                args={[20, 20, '#ff6600', '#331100']}
            />

            {/* Section Title */}
            <group position={[0, 4, startZ - 3]}>
                <Text
                    fontSize={1.2}
                    color="#ff6600"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.05}
                    outlineColor="#000"
                >
                    EXPERIENCE
                </Text>
                <mesh position={[0, -0.8, 0]}>
                    <boxGeometry args={[8, 0.05, 0.05]} />
                    <meshBasicMaterial color="#ff6600" />
                </mesh>
            </group>

            {/* Experience Cards */}
            {experience.map((exp, i) => {
                const zPos = startZ - 8 - (i * 7)
                const side = i % 2 === 0 ? -5 : 5

                return (
                    <group key={exp.id} position={[side, 2.5, zPos]}>
                        {/* Card Background */}
                        <mesh>
                            <boxGeometry args={[5, 3, 0.15]} />
                            <meshStandardMaterial
                                color="#ff6600"
                                emissive="#ff6600"
                                emissiveIntensity={0.6}
                                toneMapped={false}
                            />
                        </mesh>

                        {/* Company Name */}
                        <Text
                            position={[0, 1, 0.15]}
                            fontSize={0.4}
                            color="white"
                            anchorX="center"
                            anchorY="middle"
                            maxWidth={4.5}
                            fontWeight="bold"
                            outlineWidth={0.02}
                            outlineColor="#000"
                        >
                            {exp.company}
                        </Text>

                        {/* Role */}
                        <Text
                            position={[0, 0.4, 0.15]}
                            fontSize={0.28}
                            color="#ffcc99"
                            anchorX="center"
                            anchorY="middle"
                            maxWidth={4.5}
                        >
                            {exp.role}
                        </Text>

                        {/* Period */}
                        <Text
                            position={[0, -0.1, 0.15]}
                            fontSize={0.2}
                            color="#ccc"
                            anchorX="center"
                            anchorY="middle"
                            maxWidth={4.5}
                        >
                            {exp.period}
                        </Text>

                        {/* Description */}
                        <Html center position={[0, -0.9, 0.15]} distanceFactor={1.2}>
                            <div style={{
                                width: '280px',
                                textAlign: 'center',
                                color: 'white',
                                fontFamily: 'monospace',
                                fontSize: '0.85rem',
                                lineHeight: '1.4'
                            }}>
                                {exp.desc}
                            </div>
                        </Html>

                        {/* Glow effect */}
                        <mesh position={[0, 0, -0.1]}>
                            <boxGeometry args={[5.3, 3.3, 0.1]} />
                            <meshBasicMaterial
                                color="#ff6600"
                                transparent
                                opacity={0.3}
                            />
                        </mesh>

                        {/* Point light */}
                        <pointLight
                            position={[0, 0, 1]}
                            color="#ff6600"
                            intensity={1}
                            distance={5}
                        />
                    </group>
                )
            })}
        </group>
    )
}

export default ZoneExperience
