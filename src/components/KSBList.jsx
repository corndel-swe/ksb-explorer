import KSB from './KSB.jsx'

function KSBList({ ksbs }) {
  return (
    <ul class='ksb-list'>
      {ksbs.map(ksb => (
        <li key={ksb.Code}>
          <KSB ksb={ksb} />
        </li>
      ))}
    </ul>
  )
}

export default KSBList
