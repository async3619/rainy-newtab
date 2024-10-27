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
  const setBackgroundImage = useAppStore((store) => store.setBackgroundImage)

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
        </Styled.Content>
      </Panel>
      <Styled.Button onClick={handleButtonClick}>
        <MdSettings />
      </Styled.Button>
    </Styled.Root>
  )
}

export default Settings
