import { Suspense } from 'react'
import Experience from './components/canvas/Experience'

function App() {
    return (
        <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
            <Suspense fallback={
                <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem'
                }}>
                    Loading Data Sprinter...
                </div>
            }>
                <Experience />
            </Suspense>
        </div>
    )
}

export default App
