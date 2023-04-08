import { ref } from 'vue'
const globalConfig = ref<Record<string, any>>({})
export const useGlobalConfig = () => {
  function getConfig<T>(key: string, defaultData: T): T {
    if (globalConfig.value[key]) return globalConfig.value[key]
    setConfig<T>(key, defaultData)
    return defaultData
  }
  function setConfig<T>(key: string, data: T): void {
    globalConfig.value[key] = data
  }
  return {
    getConfig,
    setConfig,
  }
}
