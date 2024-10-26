/// <reference types="vite-plugin-glsl/ext" />
import { useRef, useMemo } from 'react'

import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import fragmentShader from '../shaders/fragment.glsl'
import vertexShader from '../shaders/vertex.glsl'

interface ShaderMaterialProps {
  texture: THREE.Texture
  innerWidth: number
  innerHeight: number
}

export function ShaderMaterial({
  texture,
  innerWidth,
  innerHeight,
}: ShaderMaterialProps) {
  const materialRef = useRef<THREE.ShaderMaterial>()
  const dpr = window.devicePixelRatio

  const uniforms = useMemo(
    () => ({
      iTime: { value: 0.0 },
      iResolution: { value: new THREE.Vector2(1, 1) },
      iMouse: { value: new THREE.Vector3(0, 0, 1) },
    }),
    [],
  )

  useFrame((state) => {
    if (!materialRef.current) {
      return
    }

    const { uniforms } = materialRef.current
    const { elapsedTime } = state.clock
    uniforms.iTime.value = elapsedTime
    uniforms.iResolution.value.set(innerWidth * dpr, innerHeight * dpr, 1)
    uniforms.iChannel0 = { value: texture }
  })

  return (
    <shaderMaterial
      ref={materialRef as React.RefObject<THREE.ShaderMaterial>}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
    />
  )
}
