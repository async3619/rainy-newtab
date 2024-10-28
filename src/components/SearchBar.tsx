import React from 'react'
import { RiOpenaiFill, RiSearch2Line } from 'react-icons/ri'

import IconTab, { IconTabItem } from '@components/IconTab'

import * as Styled from './SearchBar.styled'
import useAppStore from '@stores/app'
import { SEARCH_ENGINES } from '@constants/searchEngines'

type QueryMode = 'websearch' | 'chatgpt'

const SEARCH_ENGiNE_ITEMS: IconTabItem<QueryMode>[] = [
  {
    value: 'websearch',
    icon: RiSearch2Line,
  },
  {
    value: 'chatgpt',
    icon: RiOpenaiFill,
  },
]

const PLACEHOLDER_TEXT: Record<QueryMode, string> = {
  websearch: 'Search the web...',
  chatgpt: 'Ask ChatGPT...',
}

function SearchBar() {
  const [query, setQuery] = React.useState('')
  const [queryMode, setQueryMode] = React.useState<QueryMode>('websearch')
  const { searchEngine, customSearchEngineURL } = useAppStore()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return

    if (queryMode === 'chatgpt') {
      location.href = `https://chat.openai.com/?q=${query}`
      return
    }

    if (queryMode === 'websearch') {
      const searchUrl =
        searchEngine === 'custom'
          ? customSearchEngineURL
          : SEARCH_ENGINES[searchEngine].url

      if (!searchUrl) return alert('Please set a custom search engine URL.')

      location.href = searchUrl.replace('{}', encodeURIComponent(query))
    }
  }

  return (
    <Styled.Root>
      <Styled.Input
        type="text"
        placeholder={PLACEHOLDER_TEXT[queryMode]}
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Styled.IconTabWrapper>
        <IconTab
          value={queryMode}
          onChange={setQueryMode}
          items={SEARCH_ENGiNE_ITEMS}
        />
      </Styled.IconTabWrapper>
    </Styled.Root>
  )
}

export default SearchBar
