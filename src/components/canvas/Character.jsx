import { useFrame, useThree } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { Vector3, MathUtils } from 'three'
import { useStore } from '../../store/useStore'
import { characterRunningMaterial, characterIdleMaterial } from '../../utils/materials'

const Character = ({ pathLength = 125 }) => {
    const ref = useRef()
    const scroll = useScroll()
    const { camera } = useThree()
    const gameStatus = useStore((state) => state.gameStatus)
    const setScrollProgress = useStore((state) => state.setScrollProgress)

    // Reset scroll when game starts
    useEffect(() => {
        if (gameStatus === 'running' && scroll.el) {
            scroll.el.scrollTop = 0
            scroll.offset = 0
        }
    }, [gameStatus, scroll])

    useFrame((state, delta) => {
        if (!ref.current) return

        // Update scroll progress in store
        setScrollProgress(scroll.offset)

        if (gameStatus === 'home') {
            // Idle state
            ref.current.position.z = MathUtils.lerp(ref.current.position.z, 0, 0.1)
            ref.current.position.y = 0.9 + Math.sin(state.clock.elapsedTime * 2) * 0.05
            ref.current.rotation.x = 0

            // Camera idle float
            const t = state.clock.elapsedTime
            camera.position.lerp(new Vector3(Math.sin(t * 0.5) * 2, 2.5, 6), 0.05)
            camera.lookAt(0, 1.2, 0)
            return
        }

        // RUNNING STATE
        const targetZ = -scroll.offset * pathLength
        ref.current.position.z = MathUtils.lerp(ref.current.position.z, targetZ, 0.1)

        // Bobbing motion
        const speed = Math.abs(targetZ - ref.current.position.z) * 100

        if (speed > 0.1) {
            ref.current.position.y = 0.9 + Math.sin(state.clock.elapsedTime * 15) * 0.15
            ref.current.rotation.x = 0.25
        } else {
            ref.current.position.y = 0.9 + Math.sin(state.clock.elapsedTime * 2) * 0.05
            ref.current.rotation.x = 0
        }

        // Camera Follow
        const cameraTargetPos = new Vector3(0, 3, ref.current.position.z + 8)
        camera.position.lerp(cameraTargetPos, 0.1)
        camera.lookAt(0, 1, ref.current.position.z - 5)
    })

    const bodyMat = gameStatus === 'running' ? characterRunningMaterial() : characterIdleMaterial()

    return (
        <group ref={ref}>
            {/* Body */}
            <mesh position={[0, 0.9, 0]} castShadow>
                <capsuleGeometry args={[0.3, 1, 4, 8]} />
                <meshStandardMaterial {...bodyMat} />
            </mesh>

            {/* Head */}
            <mesh position={[0, 1.7, 0]}>
                <sphereGeometry args={[0.25]} />
                <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
            </mesh>

            {/* Visor */}
            <mesh position={[0, 1.7, -0.2]}>
                <boxGeometry args={[0.3, 0.1, 0.1]} />
                <meshStandardMaterial
                    color="#ff0044"
                    emissive="#ff0044"
                    emissiveIntensity={3}
                    toneMapped={false}
                />
            </mesh>

            {/* Glow orb when running */}
            {gameStatus === 'running' && (
                <mesh position={[0, 1.2, 0]}>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial
                        color="#00ffff"
                        emissive="#00ffff"
                        emissiveIntensity={2}
                        transparent
                        opacity={0.6}
                        toneMapped={false}
                    />
                </mesh>
            )}
        </group>
    )
}

export default Character
