import { resumeData } from '../../data/resumeData'
import { useStore } from '../../store/useStore'

const HomeInterface = () => {
    const startGame = useStore((state) => state.startGame)
    const gameStatus = useStore((state) => state.gameStatus)

    // Completely hide when not in home state
    if (gameStatus !== 'home') return null

    const { personal } = resumeData

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            pointerEvents: 'auto'
        }}>
            <div style={{
                maxWidth: '700px',
                width: '90%',
                color: 'white',
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(10, 10, 30, 0.95))',
                padding: '50px',
                borderRadius: '20px',
                border: '3px solid #00ffff',
                fontFamily: "'Courier New', Courier, monospace",
                userSelect: 'none',
                boxShadow: '0 0 60px rgba(0, 255, 255, 0.6), inset 0 0 40px rgba(0, 255, 255, 0.15)',
                maxHeight: '90vh',
                overflowY: 'auto'
            }}>
                {/* Profile Photo */}
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <img
                        src={personal.image}
                        alt="Profile"
                        style={{
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                            border: '6px solid #00ffff',
                            boxShadow: '0 0 40px rgba(0, 255, 255, 0.8)',
                            marginBottom: '25px',
                            objectFit: 'cover',
                            objectPosition: 'center center'
                        }}
                    />

                    {/* Name */}
                    <h1 style={{
                        fontSize: '3rem',
                        margin: '0 0 15px 0',
                        textTransform: 'uppercase',
                        textShadow: '0 0 20px #00ffff',
                        letterSpacing: '6px',
                        fontWeight: 'bold',
                        color: '#00ffff'
                    }}>
                        {personal.name}
                    </h1>

                    {/* Title */}
                    <p style={{
                        color: '#ffffff',
                        fontSize: '1.3rem',
                        marginTop: '10px',
                        marginBottom: '20px',
                        fontWeight: 'bold',
                        letterSpacing: '3px'
                    }}>
                        {personal.title}
                    </p>

                    {/* Description */}
                    <p style={{
                        color: '#ccc',
                        fontSize: '1.1rem',
                        lineHeight: '1.7',
                        margin: '0 auto 30px auto',
                        textAlign: 'center',
                        maxWidth: '550px'
                    }}>
                        {personal.summary}
                    </p>
                </div>

                {/* Social Links */}
                <div style={{
                    display: 'flex',
                    gap: '15px',
                    marginBottom: '30px',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    {/* Email */}
                    <a
                        href={`mailto:${personal.email}`}
                        style={{
                            background: 'rgba(0, 255, 255, 0.1)',
                            border: '2px solid #00ffff',
                            color: '#00ffff',
                            padding: '12px 24px',
                            borderRadius: '10px',
                            textDecoration: 'none',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            transition: 'all 0.3s',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.background = '#00ffff'
                            e.target.style.color = '#000'
                            e.target.style.transform = 'scale(1.05)'
                        }}
                        onMouseOut={(e) => {
                            e.target.style.background = 'rgba(0, 255, 255, 0.1)'
                            e.target.style.color = '#00ffff'
                            e.target.style.transform = 'scale(1)'
                        }}
                    >
                        📧 EMAIL
                    </a>

                    {/* LinkedIn */}
                    <a
                        href={personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: 'rgba(0, 255, 255, 0.1)',
                            border: '2px solid #00ffff',
                            color: '#00ffff',
                            padding: '12px 24px',
                            borderRadius: '10px',
                            textDecoration: 'none',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            transition: 'all 0.3s',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.background = '#00ffff'
                            e.target.style.color = '#000'
                            e.target.style.transform = 'scale(1.05)'
                        }}
                        onMouseOut={(e) => {
                            e.target.style.background = 'rgba(0, 255, 255, 0.1)'
                            e.target.style.color = '#00ffff'
                            e.target.style.transform = 'scale(1)'
                        }}
                    >
                        💼 LINKEDIN
                    </a>

                    {/* GitHub */}
                    <a
                        href={personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: 'rgba(0, 255, 255, 0.1)',
                            border: '2px solid #00ffff',
                            color: '#00ffff',
                            padding: '12px 24px',
                            borderRadius: '10px',
                            textDecoration: 'none',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            transition: 'all 0.3s',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.background = '#00ffff'
                            e.target.style.color = '#000'
                            e.target.style.transform = 'scale(1.05)'
                        }}
                        onMouseOut={(e) => {
                            e.target.style.background = 'rgba(0, 255, 255, 0.1)'
                            e.target.style.color = '#00ffff'
                            e.target.style.transform = 'scale(1)'
                        }}
                    >
                        💻 GITHUB
                    </a>
                </div>

                {/* Divider */}
                <div style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #00ffff, transparent)',
                    margin: '30px 0'
                }} />

                {/* Start Journey Button */}
                <button
                    onClick={startGame}
                    style={{
                        width: '100%',
                        background: 'linear-gradient(135deg, #00ffff, #00aaaa)',
                        border: 'none',
                        color: '#000',
                        padding: '20px',
                        cursor: 'pointer',
                        fontWeight: '900',
                        fontSize: '1.6rem',
                        letterSpacing: '6px',
                        textTransform: 'uppercase',
                        borderRadius: '12px',
                        boxShadow: '0 8px 30px rgba(0, 255, 255, 0.6)',
                        transition: 'all 0.3s'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.transform = 'scale(1.05)'
                        e.target.style.boxShadow = '0 12px 40px rgba(0, 255, 255, 0.9)'
                    }}
                    onMouseOut={(e) => {
                        e.target.style.transform = 'scale(1)'
                        e.target.style.boxShadow = '0 8px 30px rgba(0, 255, 255, 0.6)'
                    }}
                >
                    ▶ START JOURNEY
                </button>

                {/* System Status */}
                <div style={{
                    marginTop: '25px',
                    textAlign: 'center',
                    fontSize: '0.85rem',
                    color: '#666',
                    fontFamily: 'monospace'
                }}>
                    SYSTEM_STATUS: <span style={{ color: '#00ff00' }}>READY</span><br />
                    SCROLL_TO_EXPLORE_CAREER_PATH
                </div>
            </div>
        </div>
    )
}

export default HomeInterface
