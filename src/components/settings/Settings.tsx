import { useState } from 'react'
import { MdSettings } from 'react-icons/md'

import Panel from '@components/Panel'

import * as Styled from './Settings.styled'
import SettingsBackground from './background/SettingsBackground'
import SettingsSearch from './search/SettingsSearch'

type Tabs = 'background' | 'search'

function Settings() {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<Tabs>('background')

  const handleButtonClick = () => {
    setOpen((prev) => !prev)
  }

  const renderTabContent = () => {
    if (tab === 'search') {
      return <SettingsSearch />
    }

    return <SettingsBackground />
  }

  return (
    <Styled.Root>
      <Panel open={open}>
        <Styled.TabHeader>
          <Styled.TabButton
            onClick={() => setTab('background')}
            isActive={tab === 'background'}
          >
            Background
          </Styled.TabButton>
          <Styled.TabButton
            onClick={() => setTab('search')}
            isActive={tab === 'search'}
          >
            Search
          </Styled.TabButton>
        </Styled.TabHeader>
        <Styled.Content>{renderTabContent()}</Styled.Content>
      </Panel>
      <Styled.Button onClick={handleButtonClick}>
        <MdSettings />
      </Styled.Button>
    </Styled.Root>
  )
}

export default Settings
