import idx from "../data/search";

export const formatSentence = (sentence) => {
  if (!sentence) return "";
  sentence = sentence.trim();
  return (
    sentence.charAt(0).toUpperCase() + sentence.slice(1).replace(/\.?$/, ".")
  );
};

export const getSearchSet = (search) => {
  return idx.search(search).reduce((acc, item) => {
    acc.add(item.ref);
    return acc;
  }, new Set());
};
