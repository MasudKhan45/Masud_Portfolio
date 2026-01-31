import { EffectComposer, Bloom, Vignette, ChromaticAberration, Noise } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

const Effects = () => {
    return (
        <EffectComposer>
            {/* Bloom for neon glow */}
            <Bloom
                intensity={1.5}
                luminanceThreshold={0.2}
                luminanceSmoothing={0.9}
                mipmapBlur
            />

            {/* Vignette for cinematic feel */}
            <Vignette
                offset={0.3}
                darkness={0.7}
                eskil={false}
            />

            {/* Chromatic Aberration for cyberpunk glitch */}
            <ChromaticAberration
                offset={[0.0005, 0.0005]}
                blendFunction={BlendFunction.NORMAL}
            />

            {/* Film grain */}
            <Noise
                opacity={0.05}
                blendFunction={BlendFunction.OVERLAY}
            />
        </EffectComposer>
    )
}

export default Effects
