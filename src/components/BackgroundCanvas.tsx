import { useEffect, useRef, useState } from 'react'
import RaindropFX from 'raindrop-fx'

import useAppStore from '@stores/app'

import * as Styled from './BackgroundCanvas.styled'

function BackgroundCanvas() {
  const [isReady, setIsReady] = useState(false)

  const backgroundImage =
    useAppStore((store) => store.backgroundImage) ?? '/img.png'

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
    raindropsRef.current.setBackground(backgroundImage).then(() => {
      setIsReady(true)
    })

    return () => {
      raindropsRef.current?.stop()
    }
  }, [backgroundImage])

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
      <Styled.Image src={backgroundImage} />
      <Styled.Viewport
        ref={viewportRef}
        isReady={isReady}
      />
      <Styled.Overlay isReady={isReady} />
    </Styled.Root>
  )
}

export default BackgroundCanvas
