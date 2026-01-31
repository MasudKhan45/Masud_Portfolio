import Footer from './Footer'
import HomeInterface from '../canvas/HomeInterface'
import { useStore } from '../../store/useStore'

const UI = () => {
    const gameStatus = useStore((state) => state.gameStatus)
    const scrollProgress = useStore((state) => state.scrollProgress)

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 10
        }}>
            {/* Scroll instruction */}
            {gameStatus === 'running' && (
                <div style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    color: 'white',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    textShadow: '0 0 10px rgba(0,255,255,0.5)'
                }}>
                    SCROLL TO EXPLORE &gt;&gt;&gt;
                </div>
            )}

            {/* Progress bar */}
            {gameStatus === 'running' && (
                <div style={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    width: '200px',
                    height: '4px',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '2px',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        width: `${scrollProgress * 100}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
                        boxShadow: '0 0 10px #00ffff',
                        transition: 'width 0.1s'
                    }} />
                </div>
            )}

            {/* Zone indicator */}
            {gameStatus === 'running' && (
                <div style={{
                    position: 'absolute',
                    top: 40,
                    left: 20,
                    color: '#00ffff',
                    fontFamily: 'monospace',
                    fontSize: '0.8rem',
                    textShadow: '0 0 5px rgba(0,255,255,0.8)'
                }}>
                    {scrollProgress < 0.52 ? 'SECTION: SKILLS' :
                        scrollProgress < 0.72 ? 'SECTION: EXPERIENCE' :
                            'SECTION: PROJECTS'}
                </div>
            )}

            <Footer />
            <HomeInterface />
        </div>
    )
}

export default UI
