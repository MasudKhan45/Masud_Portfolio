import { resumeData } from '../../data/resumeData'
import { useStore } from '../../store/useStore'

const HomeInterface = () => {
    const startGame = useStore((state) => state.startGame)
    const gameStatus = useStore((state) => state.gameStatus)

    // Completely hide when not in home state
    if (gameStatus !== 'home') return null

    const { personal } = resumeData
    const isMobile = window.innerWidth < 768
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024

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
            pointerEvents: 'auto',
            padding: isMobile ? '10px' : '20px'
        }}>
            <div style={{
                maxWidth: isTablet ? '520px' : '580px',
                width: '100%',
                color: 'white',
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(10, 10, 30, 0.95))',
                padding: isMobile ? '18px 16px' : isTablet ? '24px' : '30px',
                borderRadius: isMobile ? '15px' : '20px',
                border: isMobile ? '2px solid #00ffff' : '3px solid #00ffff',
                fontFamily: "'Courier New', Courier, monospace",
                userSelect: 'none',
                boxShadow: '0 0 60px rgba(0, 255, 255, 0.6), inset 0 0 40px rgba(0, 255, 255, 0.15)',
                maxHeight: '90vh',
                overflowY: 'auto'
            }}>
                {/* Profile Photo */}
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '20px' : '30px' }}>
                    <img
                        src={personal.image}
                        alt="Profile"
                        style={{
                            width: isMobile ? '85px' : isTablet ? '105px' : '120px',
                            height: isMobile ? '85px' : isTablet ? '105px' : '120px',
                            borderRadius: '50%',
                            border: isMobile ? '3px solid #00ffff' : '4px solid #00ffff',
                            boxShadow: '0 0 30px rgba(0, 255, 255, 0.8)',
                            marginBottom: isMobile ? '10px' : '15px',
                            objectFit: 'cover',
                            objectPosition: 'center center'
                        }}
                    />

                    {/* Name */}
                    <h1 style={{
                        fontSize: isMobile ? '1.5rem' : isTablet ? '2rem' : '2.4rem',
                        margin: '0 0 6px 0',
                        textTransform: 'uppercase',
                        textShadow: '0 0 20px #00ffff',
                        letterSpacing: isMobile ? '3px' : '5px',
                        fontWeight: 'bold',
                        color: '#00ffff'
                    }}>
                        {personal.name}
                    </h1>

                    {/* Title */}
                    <p style={{
                        color: '#ffffff',
                        fontSize: isMobile ? '0.8rem' : isTablet ? '0.95rem' : '1rem',
                        marginTop: '6px',
                        marginBottom: isMobile ? '10px' : '14px',
                        fontWeight: 'bold',
                        letterSpacing: isMobile ? '1px' : '2px'
                    }}>
                        {personal.title}
                    </p>

                    {/* Description - compact 2-line summary */}
                    <p style={{
                        color: '#aaa',
                        fontSize: isMobile ? '0.78rem' : isTablet ? '0.85rem' : '0.9rem',
                        lineHeight: '1.5',
                        margin: '0 auto',
                        textAlign: 'center',
                        maxWidth: '480px'
                    }}>
                        Data-focused engineer with hands-on Python, SQL & Power BI experience.<br />
                        Turning raw datasets into actionable dashboards & ML-driven insights.
                    </p>
                </div>

                {/* Social Links */}
                <div style={{
                    display: 'flex',
                    gap: isMobile ? '10px' : '15px',
                    marginBottom: isMobile ? '20px' : '30px',
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
                            padding: isMobile ? '10px 16px' : '12px 24px',
                            borderRadius: '10px',
                            textDecoration: 'none',
                            fontSize: isMobile ? '0.85rem' : '1rem',
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
                    margin: isMobile ? '20px 0' : '30px 0'
                }} />

                {/* Start Journey Button */}
                <button
                    onClick={startGame}
                    style={{
                        width: '100%',
                        background: 'linear-gradient(135deg, #00ffff, #00aaaa)',
                        border: 'none',
                        color: '#000',
                        padding: isMobile ? '15px' : '20px',
                        cursor: 'pointer',
                        fontWeight: '900',
                        fontSize: isMobile ? '1.2rem' : isTablet ? '1.4rem' : '1.6rem',
                        letterSpacing: isMobile ? '3px' : '6px',
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
                    marginTop: isMobile ? '15px' : '25px',
                    textAlign: 'center',
                    fontSize: isMobile ? '0.7rem' : '0.85rem',
                    color: '#666',
                    fontFamily: 'monospace'
                }}>
                    SYSTEM_STATUS: <span style={{ color: '#00ff00' }}>READY</span><br />
                    {!isMobile && 'SCROLL_TO_EXPLORE_CAREER_PATH'}
                </div>
            </div>
        </div>
    )
}

export default HomeInterface
