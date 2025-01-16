import lunr from 'lunr'
import fs from 'fs/promises'

const url = new URL('./ksbs.json', import.meta.url)
const json = await fs.readFile(url, 'utf-8')
const ksbs = JSON.parse(json)

const idx = lunr(function () {
  this.ref('Code')

  this.field('Code')
  this.field('Description')
  this.field('GradingCriteria')
  this.field('DistinctionCriteria')

  ksbs.forEach(function (ksb) {
    this.add(ksb)
  }, this)
})

export default idx
