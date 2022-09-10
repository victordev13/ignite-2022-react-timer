const storage = {
  save(key: string, jsonContent: string): void {
    localStorage.setItem(key, jsonContent)
  },
  get(key: string): string | null {
    return localStorage.getItem(key)
  }
}

export default storage;
