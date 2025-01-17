import lunr from 'lunr'
import fs from 'fs/promises'

const url = new URL('./ksbs.json', import.meta.url)
const data = await fetch(url)
const ksbs = await data.json()

const idx = lunr(function () {
  this.ref('Code')

  this.field('Code')
  this.field('Description')
  this.field('AssessmentMethod')
  this.field('GradingCriteria')
  this.field('DistinctionCriteria')

  ksbs.forEach(function (ksb) {
    this.add(ksb)
  }, this)
})

export default idx
