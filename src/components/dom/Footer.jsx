import { useStore } from '../../store/useStore'
import { resumeData } from '../../data/resumeData'

const Footer = () => {
    const scrollProgress = useStore((state) => state.scrollProgress)
    const gameStatus = useStore((state) => state.gameStatus)

    // Only show when journey is nearly complete (95%+)
    if (gameStatus !== 'running' || scrollProgress < 0.95) return null

    return (
        <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            padding: window.innerWidth < 768 ? '20px 15px' : '40px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)',
            color: 'white',
            fontFamily: 'monospace',
            pointerEvents: 'auto',
            zIndex: 100
        }}>
            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <h1 style={{
                    fontSize: window.innerWidth < 768 ? '1.8rem' : '3rem',
                    marginBottom: '15px',
                    color: '#00ffff',
                    textShadow: '0 0 20px #00ffff',
                    textTransform: 'uppercase',
                    letterSpacing: window.innerWidth < 768 ? '2px' : '5px'
                }}>
                    LEVEL COMPLETE
                </h1>

                <p style={{
                    fontSize: window.innerWidth < 768 ? '0.9rem' : '1.2rem',
                    marginBottom: '20px',
                    color: '#aaa'
                }}>
                    You've explored the journey of {resumeData.personal.name}
                </p>

                <div style={{
                    display: 'flex',
                    gap: window.innerWidth < 768 ? '10px' : '20px',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <a
                        href={'mailto:' + resumeData.personal.email}
                        style={{
                            padding: '15px 30px',
                            background: '#00ffff',
                            color: '#000',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            border: 'none',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            transition: 'all 0.3s'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.background = '#fff'
                            e.target.style.boxShadow = '0 0 20px #fff'
                        }}
                        onMouseOut={(e) => {
                            e.target.style.background = '#00ffff'
                            e.target.style.boxShadow = 'none'
                        }}
                    >
                        EMAIL ME
                    </a>

                    <a
                        href="/assets/resume.pdf"
                        download="Masud_Khan_Resume.pdf"
                        style={{
                            padding: '15px 30px',
                            background: 'transparent',
                            color: '#00ffff',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            border: '2px solid #00ffff',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.background = '#00ffff'
                            e.target.style.color = '#000'
                        }}
                        onMouseOut={(e) => {
                            e.target.style.background = 'transparent'
                            e.target.style.color = '#00ffff'
                        }}
                    >
                        DOWNLOAD RESUME
                    </a>
                </div>

                <div style={{
                    marginTop: '30px',
                    fontSize: '0.8rem',
                    color: '#666'
                }}>
                    SYSTEM STATUS: JOURNEY_COMPLETE | DATA_COMPILED
                </div>
            </div>
        </div>
    )
}

export default Footer
