export const useLocalStorage = () => {
  const getItem = (key: string) => localStorage.getItem(key)
  const setItem = (key: string, value: unknown) => localStorage.setItem(key, JSON.stringify(value))
  const clear = () => localStorage.clear()

  return {
    getItem,
    setItem,
    clear
  }
}
