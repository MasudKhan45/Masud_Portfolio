import { Html } from '@react-three/drei'

const ExperiencePopup = ({ experience, position }) => {
    return (
        <group position={position}>
            <Html center distanceFactor={1.2}>
                <div style={{
                    width: '400px',
                    background: 'rgba(20, 10, 5, 0.98)',
                    border: '3px solid #ff6600',
                    borderRadius: '12px',
                    padding: '25px',
                    color: 'white',
                    fontFamily: "'Courier New', monospace",
                    textAlign: 'left',
                    boxShadow: '0 0 30px rgba(255, 102, 0, 0.5), inset 0 0 20px rgba(255, 102, 0, 0.1)',
                    pointerEvents: 'auto',
                    backdropFilter: 'blur(10px)'
                }}>
                    {/* Header */}
                    <div style={{
                        borderBottom: '2px solid #ff6600',
                        paddingBottom: '12px',
                        marginBottom: '15px'
                    }}>
                        <h2 style={{
                            margin: '0 0 8px 0',
                            color: '#ff6600',
                            textTransform: 'uppercase',
                            fontSize: '1.4rem',
                            letterSpacing: '2px',
                            textShadow: '0 0 10px #ff6600'
                        }}>
                            {experience.company}
                        </h2>
                        <div style={{
                            fontSize: '1rem',
                            color: '#ffaa66',
                            fontWeight: 'bold',
                            marginBottom: '5px'
                        }}>
                            {experience.role}
                        </div>
                        <div style={{
                            fontSize: '0.85rem',
                            color: '#999',
                            fontStyle: 'italic'
                        }}>
                            {experience.period}
                        </div>
                    </div>

                    {/* Description */}
                    <p style={{
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                        color: '#ddd',
                        margin: '0',
                        textAlign: 'justify'
                    }}>
                        {experience.desc}
                    </p>

                    {/* Footer tag */}
                    <div style={{
                        marginTop: '15px',
                        paddingTop: '10px',
                        borderTop: '1px solid rgba(255, 102, 0, 0.3)',
                        fontSize: '0.7rem',
                        color: '#888',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        EXPERIENCE_TYPE: {experience.type}
                    </div>
                </div>
            </Html>

            {/* Connecting beam */}
            <mesh position={[0, -2.5, 0]}>
                <cylinderGeometry args={[0.03, 0.03, 5]} />
                <meshBasicMaterial
                    color="#ff6600"
                    transparent
                    opacity={0.6}
                />
            </mesh>

            {/* Glow at connection point */}
            <mesh position={[0, -5, 0]}>
                <sphereGeometry args={[0.12]} />
                <meshBasicMaterial
                    color="#ff6600"
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </group>
    )
}

export default ExperiencePopup
