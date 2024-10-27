import { useEffect, useRef, useState } from 'react'
import RaindropFX from 'raindrop-fx'

import * as Styled from './BackgroundCanvas.styled'

interface BackgroundCanvasProps {
  imageSrc: string
}

function BackgroundCanvas({ imageSrc }: BackgroundCanvasProps) {
  const [isReady, setIsReady] = useState(false)

  const viewportRef = useRef<HTMLCanvasElement>(null)
  const raindropsRef = useRef<RaindropFX | null>(null)

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) {
      return
    }

    const { width, height } = viewport.getBoundingClientRect()
    viewport.width = width
    viewport.height = height

    raindropsRef.current = new RaindropFX({
      canvas: viewport,
    })

    raindropsRef.current.start()
    raindropsRef.current.setBackground(imageSrc).then(() => {
      setIsReady(true)
    })

    return () => {
      raindropsRef.current?.stop()
    }
  }, [imageSrc])

  useEffect(() => {
    const onResize = () => {
      const viewport = viewportRef.current
      const raindrops = raindropsRef.current
      if (!viewport || !raindrops) {
        return
      }

      const { width, height } = viewport.getBoundingClientRect()
      raindrops.resize(width, height)
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <Styled.Root>
      <Styled.Image src={imageSrc} />
      <Styled.Viewport
        ref={viewportRef}
        isReady={isReady}
      />
    </Styled.Root>
  )
}

export default BackgroundCanvas
