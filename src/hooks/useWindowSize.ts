import { useEffect, useState } from 'react'
import { debounce } from 'lodash'

export function useWindowSize() {
  const [size, setSize] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      })
    }

    const debouncedHandleResize = debounce(handleResize, 250)
    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [])

  return size
}
