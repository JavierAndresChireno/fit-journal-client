const FormatService = {
  firstLetterUpperCase(word) {
    if (typeof word === 'string') {
      const first = word[0].toUpperCase();
      const rest = word.slice(1);
      return first + rest;
    }
    return word;
  }
};
export default FormatService;
