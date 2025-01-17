import ksbs from './data/ksbs.json'
import KSBList from './components/KSBList'
import idx from './data/search'

import { useState, useEffect } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(ksbs)

  useEffect(() => {
    const hits = query
      ? idx.search(query).map(r => ksbs.find(ksb => ksb.Code === r.ref))
      : ksbs
    setResults(hits)
  }, [query, ksbs])

  return (
    <>
      <h1>KSB Explorer</h1>
      <input
        type='text'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <KSBList ksbs={results} />
    </>
  )
}

export default App
