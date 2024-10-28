export const SEARCH_ENGINES: Record<
  string,
  {
    name: string
    url: string
  }
> = {
  google: {
    name: 'Google',
    url: 'https://www.google.com/search?q={}',
  },
  duckduckgo: {
    name: 'DuckDuckGo',
    url: 'https://duckduckgo.com/?q={}',
  },
  'searx.be': {
    name: 'Searx.be',
    url: 'https://searx.be/?q={}',
  },
  custom: {
    name: 'Custom',
    url: '',
  },
}

export type SearchEngineOption = keyof typeof SEARCH_ENGINES
