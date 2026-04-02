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

    // Updated zone structure:
    // Home: 0
    // Skills: 0 to -105 (fits 2-col layout with 5 unit Z-spacing)
    // Experience: -105 to -135 (length 30)
    // Projects: -135 to -190 (length 55, fits 6 projects)

    const pathLength = 195

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
            <ZoneSkills startZ={0} length={105} />

            {/* Zone 2: Experience Section */}
            <ZoneExperience startZ={-105} length={30} />

            {/* Zone 3: Projects Section - Extended for 6 projects */}
            <ZoneProjects startZ={-135} length={55} />

            {/* Atmosphere */}
            <fog attach="fog" args={['#050510', 10, 50]} />
        </group>
    )
}

export default Scene
