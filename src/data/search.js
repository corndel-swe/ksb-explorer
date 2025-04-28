import lunr from "lunr";

const response = await fetch("./src/data/ksbs.json");
const ksbs = await response.json();

const idx = lunr(function () {
  this.ref("Code");

  this.field("Code");
  this.field("Description");
  this.field("GradingCriteria");
  this.field("DistinctionCriteria");

  ksbs.forEach(function (ksb) {
    this.add(ksb);
  }, this);
});

export default idx;
