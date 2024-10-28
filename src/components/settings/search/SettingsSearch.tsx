import FormSection from '@components/FormSection'

import * as Styled from './SettingsSearch.styled'
import { useState } from 'react'
import useAppStore from '@stores/app'
import { SEARCH_ENGINES, SearchEngineOption } from '@constants/searchEngines'

function SettingsSearch() {
  const {
    searchEngine,
    setSearchEngine,
    customSearchEngineURL,
    setCustomSearchEngineURL,
  } = useAppStore()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggle = () => setIsMenuOpen(!isMenuOpen)
  const handleSelect = (item: SearchEngineOption) => {
    setIsMenuOpen(false)
    setSearchEngine(item)
  }

  return (
    <>
      <FormSection title="Search Engine">
        <Styled.Container>
          <Styled.ToggleButton onClick={handleToggle}>
            {SEARCH_ENGINES[searchEngine].name}
          </Styled.ToggleButton>
          <Styled.Menu isOpen={isMenuOpen}>
            {Object.keys(SEARCH_ENGINES).map((engine) => (
              <Styled.MenuItem
                key={engine}
                onClick={() => handleSelect(engine)}
              >
                {SEARCH_ENGINES[engine].name}
              </Styled.MenuItem>
            ))}
          </Styled.Menu>
        </Styled.Container>
      </FormSection>

      {searchEngine === 'custom' && (
        <FormSection
          title="Custom Search Engine URL"
          description="Enter your own search engine, use `{}` for the query string."
        >
          <Styled.Input
            type="text"
            placeholder="https://searx.be/?q={}"
            value={customSearchEngineURL || ''}
            onChange={(e) => setCustomSearchEngineURL(e.target.value)}
          />
        </FormSection>
      )}
    </>
  )
}

export default SettingsSearch
