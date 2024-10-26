import * as THREE from 'three'

import { useEffect, useState } from 'react'
import { invalidate } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'

import { ShaderMaterial } from './components/ShaderMaterial.tsx'

import { useWindowSize } from './hooks/useWindowSize'

import * as Styled from './BackgroundCanvas.styled'

function BackgroundCanvas() {
  const { innerWidth, innerHeight } = useWindowSize()
  const [key, setKey] = useState(`${innerWidth}-${innerHeight}`)
  const [texture] = useState(() => new THREE.TextureLoader().load('/img.png'))

  useEffect(() => {
    setKey(`${innerWidth}-${innerHeight}`)
    invalidate()
  }, [innerWidth, innerHeight, key])

  return (
    <Styled.Root>
      <Styled.Viewport
        camera={{ position: [0, 0, 1] }}
        key={key}
      >
        <OrthographicCamera
          makeDefault
          left={-1}
          right={1}
          top={1}
          bottom={-1}
          near={0.1}
          far={1000}
          position={[0, 0, 1]}
        />
        <mesh scale={[2, 2, 1]}>
          <planeGeometry />
          <ShaderMaterial
            texture={texture}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />
        </mesh>
      </Styled.Viewport>
    </Styled.Root>
  )
}

export default BackgroundCanvas
