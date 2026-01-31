import { create } from 'zustand'

export const useStore = create((set) => ({
    gameStatus: 'home', // 'home', 'running', 'paused', 'ended'
    currentZone: 'industrial',
    scrollProgress: 0,

    startGame: () => set({ gameStatus: 'running' }),
    setScrollProgress: (progress) => set({ scrollProgress: progress }),
    setZone: (zone) => set({ currentZone: zone }),
}))
