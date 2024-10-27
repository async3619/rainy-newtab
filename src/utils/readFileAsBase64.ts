function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result
      if (typeof result === 'string') {
        resolve(result)
      } else {
        reject(new Error('Failed to read file as base64'))
      }
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export default readFileAsBase64
