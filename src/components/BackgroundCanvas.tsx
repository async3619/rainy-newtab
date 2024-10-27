import { useEffect, useRef } from 'react'
import RaindropFX from 'raindrop-fx'

import useAppStore from '@stores/app'
import useSessionAppStore from '@stores/session-app'

import * as Styled from './BackgroundCanvas.styled'

function BackgroundCanvas() {
  const isReady = useSessionAppStore((store) => store.isReady)
  const isPropertyChanging = useAppStore((store) => store.isPropertyChanging)
  const dimmingAmount = useAppStore((store) => store.dimmingAmount)
  const blurAmount = useAppStore((store) => store.blurAmount)
  const backgroundImage =
    useAppStore((store) => store.backgroundImage) ?? '/img.png'

  const setIsReady = useSessionAppStore((store) => store.setIsReady)

  const viewportRef = useRef<HTMLCanvasElement>(null)
  const raindropsRef = useRef<RaindropFX | null>(null)

  const initialBlurAmount = useRef(blurAmount)

  useEffect(() => {
    if (!raindropsRef.current) {
      return
    }

    raindropsRef.current.options.backgroundBlurSteps = blurAmount
    raindropsRef.current.options.mistBlurStep = blurAmount + 1
    raindropsRef.current.renderer.reloadBackground()
  }, [blurAmount])

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
      backgroundBlurSteps: initialBlurAmount.current,
      mistBlurStep: initialBlurAmount.current + 1,
    })

    raindropsRef.current.start()
    raindropsRef.current.setBackground(backgroundImage).then(() => {
      setIsReady(true)
    })

    return () => {
      raindropsRef.current?.stop()
    }
  }, [backgroundImage, setIsReady])

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
      <Styled.Overlay
        isChanging={isPropertyChanging}
        isReady={isReady}
        style={{
          backdropFilter: `brightness(${isReady ? 1 - dimmingAmount : 1})`,
        }}
      />
    </Styled.Root>
  )
}

export default BackgroundCanvas
