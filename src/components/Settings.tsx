import React, { useRef, useState } from 'react'
import { MdSettings } from 'react-icons/md'

import Panel from '@components/Panel'
import FormSection from '@components/FormSection'

import useAppStore from '@stores/app'
import readFileAsBase64 from '@utils/readFileAsBase64'

import * as Styled from './Settings.styled'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

function Settings() {
  const [open, setOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const changingTimeout = useRef<number | null>(null)

  const dimmingAmount = useAppStore((store) => store.dimmingAmount)
  const blurAmount = useAppStore((store) => store.blurAmount)

  const setPropertyChanging = useAppStore((store) => store.setPropertyChanging)
  const setDimmingAmount = useAppStore((store) => store.setDimmingAmount)
  const setBlurAmount = useAppStore((store) => store.setBlurAmount)
  const setBackgroundImage = useAppStore((store) => store.setBackgroundImage)

  const doChange = (callback: () => void) => {
    if (changingTimeout.current) {
      clearTimeout(changingTimeout.current)
      changingTimeout.current = null
    }

    setPropertyChanging(true)

    callback()

    changingTimeout.current = setTimeout(() => {
      setPropertyChanging(false)
      changingTimeout.current = null
    }, 500)
  }

  const handleButtonClick = () => {
    setOpen((prev) => !prev)
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0]
    if (!file) {
      return
    }

    if (file.size > MAX_FILE_SIZE) {
      alert('File size exceeds the limit of 5MB.')
      return
    }

    const base64 = await readFileAsBase64(file)
    setBackgroundImage(base64)
  }

  const handleDimmingAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = parseFloat(event.target.value)
    doChange(() => setDimmingAmount(value))
  }

  const handleBlurAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = parseFloat(event.target.value)
    doChange(() => setBlurAmount(value))
  }

  return (
    <Styled.Root>
      <Panel open={open}>
        <Styled.Content>
          <FormSection
            title="Background Image"
            description="Background image should be maximum 5MB in size."
          >
            <Styled.FileInput
              onChange={handleFileChange}
              ref={fileInputRef}
              type="file"
            />
            <Styled.UploadButton
              type="button"
              onClick={handleUploadClick}
            >
              Upload Image
            </Styled.UploadButton>
          </FormSection>
          <FormSection title="Dimming">
            <Styled.RangeInput
              type="range"
              min={0}
              max={1}
              value={dimmingAmount}
              step={0.01}
              onChange={handleDimmingAmountChange}
            />
          </FormSection>
          <FormSection title="Blur">
            <Styled.RangeInput
              type="range"
              min={1}
              max={5}
              value={blurAmount}
              step={1}
              onChange={handleBlurAmountChange}
            />
          </FormSection>
        </Styled.Content>
      </Panel>
      <Styled.Button onClick={handleButtonClick}>
        <MdSettings />
      </Styled.Button>
    </Styled.Root>
  )
}

export default Settings
