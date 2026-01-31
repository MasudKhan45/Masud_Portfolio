import * as THREE from 'three'

// Custom glowing material configurations
export const neonMaterial = (color = '#00ffff', intensity = 1) => ({
    color: color,
    emissive: color,
    emissiveIntensity: intensity,
    toneMapped: false, // Prevents color clamping for brighter glow
})

export const glassMaterial = () => ({
    color: '#000000',
    metalness: 0.9,
    roughness: 0.1,
    transparent: true,
    opacity: 0.8,
    envMapIntensity: 1.5,
})

export const industrialMaterial = () => ({
    color: '#2a2520',
    roughness: 0.9,
    metalness: 0.1,
})

export const characterRunningMaterial = () => ({
    color: '#00ffff',
    emissive: '#00ffff',
    emissiveIntensity: 0.8,
    metalness: 0.9,
    roughness: 0.2,
    toneMapped: false,
})

export const characterIdleMaterial = () => ({
    color: '#555555',
    emissive: '#001111',
    emissiveIntensity: 0.2,
    metalness: 0.8,
    roughness: 0.3,
})
