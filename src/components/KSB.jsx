function KSB({ ksb }) {
  return (
    <div>
      <h2>{ksb.Code}</h2>
      <p>{ksb.AssessmentMethod}</p>
      <p>{ksb.Description}</p>
      <p>{ksb.GradingCriteria}</p>
      <p>{ksb.DistinctionCriteria}</p>
    </div>
  )
}

export default KSB
