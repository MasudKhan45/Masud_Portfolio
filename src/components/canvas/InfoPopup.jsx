import { Html } from '@react-three/drei'

const InfoPopup = ({ project, position }) => {
    return (
        <group position={position}>
            <Html center distanceFactor={1}>
                <div style={{
                    width: '380px',
                    background: 'rgba(5, 5, 15, 0.98)',
                    border: '3px solid #ff00ff',
                    borderRadius: '12px',
                    padding: '20px',
                    color: 'white',
                    fontFamily: "'Courier New', monospace",
                    textAlign: 'left',
                    boxShadow: '0 0 30px rgba(255, 0, 255, 0.5), inset 0 0 20px rgba(255, 0, 255, 0.1)',
                    pointerEvents: 'auto',
                    backdropFilter: 'blur(10px)'
                }}>
                    {/* Header */}
                    <div style={{
                        borderBottom: '2px solid #ff00ff',
                        paddingBottom: '12px',
                        marginBottom: '12px'
                    }}>
                        <h2 style={{
                            margin: '0 0 8px 0',
                            color: '#ff00ff',
                            textTransform: 'uppercase',
                            fontSize: '1.3rem',
                            letterSpacing: '2px',
                            textShadow: '0 0 10px #ff00ff'
                        }}>
                            {project.title}
                        </h2>
                        <div style={{
                            fontSize: '0.9rem',
                            color: '#00ffff',
                            fontWeight: 'bold',
                            letterSpacing: '1px'
                        }}>
                            {project.tech}
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
                        {project.desc}
                    </p>

                    {/* Footer tag */}
                    <div style={{
                        marginTop: '15px',
                        paddingTop: '10px',
                        borderTop: '1px solid rgba(255, 0, 255, 0.3)',
                        fontSize: '0.7rem',
                        color: '#888',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        PROJECT_ID: {project.id}
                    </div>
                </div>
            </Html>

            {/* Connecting beam - enhanced */}
            <mesh position={[0, -2, 0]}>
                <cylinderGeometry args={[0.03, 0.03, 4]} />
                <meshBasicMaterial
                    color="#ff00ff"
                    transparent
                    opacity={0.6}
                />
            </mesh>

            {/* Glow at connection point */}
            <mesh position={[0, -4, 0]}>
                <sphereGeometry args={[0.1]} />
                <meshBasicMaterial
                    color="#ff00ff"
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </group>
    )
}

export default InfoPopup
