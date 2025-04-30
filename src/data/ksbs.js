import ksbs from "./ksbs.json";

const { knowledge, skill, behavior } = ksbs.reduce(
  (acc, cur) => {
    switch (cur.Code.charAt(0)) {
      case "K":
        acc.knowledge.push(cur);
        break;
      case "S":
        acc.skill.push(cur);
        break;
      case "B":
        acc.behavior.push(cur);
        break;
      default:
        break;
    }
    return acc;
  },
  { knowledge: [], skill: [], behavior: [] }
);

knowledge.sort((a, b) => a.Code.slice(1) - b.Code.slice(1));
skill.sort((a, b) => a.Code.slice(1) - b.Code.slice(1));
behavior.sort((a, b) => a.Code.slice(1) - b.Code.slice(1));

export default [...knowledge, ...skill, ...behavior];
