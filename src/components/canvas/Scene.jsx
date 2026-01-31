import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import Character from './Character'
import ZoneSkills from './ZoneSkills'
import ZoneExperience from './ZoneExperience'
import ZoneProjects from './ZoneProjects'
import HomeInterface from './HomeInterface'
import Starfield from './Starfield'
import Lighting from './Lighting'

const Scene = () => {
    const scroll = useScroll()

    // Updated zone structure to accommodate more skills:
    // Home: 0
    // Skills: 0 to -65 (extended for better spacing)
    // Experience: -65 to -90
    // Projects: -90 to -125

    const pathLength = 125

    useFrame((state) => {
        // Additional scene-wide logic can go here
    })

    return (
        <group>
            {/* Background */}
            <Starfield />

            {/* Enhanced Lighting System */}
            <Lighting />

            {/* The Runner */}
            <Character pathLength={pathLength} />

            {/* Zone 1: Skills Section - Extended */}
            <ZoneSkills startZ={0} length={65} />

            {/* Zone 2: Experience Section */}
            <ZoneExperience startZ={-65} length={25} />

            {/* Zone 3: Projects Section */}
            <ZoneProjects startZ={-90} length={35} />

            {/* Atmosphere */}
            <fog attach="fog" args={['#050510', 10, 50]} />
        </group>
    )
}

export default Scene
