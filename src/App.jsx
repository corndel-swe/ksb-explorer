import ksbs from './data/ksbs.json'

function App() {
  return (
    <ul>
      {ksbs.map(ksb => (
        <li>
          <p>Code: {ksb.Code}</p>
          <p>Description: {ksb.Description}</p>
        </li>
      ))}
    </ul>
  )
}

export default App
