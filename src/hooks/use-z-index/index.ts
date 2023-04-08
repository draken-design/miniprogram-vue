import { useGlobalConfig } from '../use-global-confg'
export const useZIndex = () => {
  const { getConfig, setConfig } = useGlobalConfig()
  const nextZIndex = () => {
    let zIndex = getConfig<number>('z-index', 1000)
    zIndex = zIndex + 1
    console.log(zIndex)
    setConfig('z-index', zIndex)
    return zIndex
  }
  return nextZIndex
}
