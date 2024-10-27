import React from 'react'
import { RiOpenaiFill, RiGoogleFill } from 'react-icons/ri'

import IconTab, { IconTabItem } from '@components/IconTab'

import * as Styled from './SearchBar.styled'

type SearchEngine = 'google' | 'chatgpt'

const SEARCH_ENGiNE_ITEMS: IconTabItem<SearchEngine>[] = [
  {
    value: 'google',
    icon: RiGoogleFill,
  },
  {
    value: 'chatgpt',
    icon: RiOpenaiFill,
  },
]

const PLACEHOLDER_TEXT: Record<SearchEngine, string> = {
  google: 'Search Google...',
  chatgpt: 'Ask ChatGPT...',
}

function SearchBar() {
  const [query, setQuery] = React.useState('')
  const [searchEngine, setSearchEngine] = React.useState<SearchEngine>('google')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (searchEngine === 'google') {
        location.href = `https://www.google.com/search?q=${query}`
      } else if (searchEngine === 'chatgpt') {
        location.href = `https://chat.openai.com/?q=${query}`
      }
    }
  }

  return (
    <Styled.Root>
      <Styled.Input
        type="text"
        placeholder={PLACEHOLDER_TEXT[searchEngine]}
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Styled.IconTabWrapper>
        <IconTab
          value={searchEngine}
          onChange={setSearchEngine}
          items={SEARCH_ENGiNE_ITEMS}
        />
      </Styled.IconTabWrapper>
    </Styled.Root>
  )
}

export default SearchBar
