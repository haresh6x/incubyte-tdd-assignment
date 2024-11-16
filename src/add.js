const add = (numbers) => {
  if (!numbers) return 0; // 0 for an empty string

  // check if the input starts with a custom delimiter declaration
  if (numbers.startsWith("//")) {
    // extract the delimiter from the first line and the numbers from the rest
    const delimiterMatch = numbers.match(/^\/\/(.+?)\n/);
    if (delimiterMatch) {
      const delimiter = delimiterMatch[1]; // custom delimiter
      numbers = numbers.replace(/^\/\/.+\n/, ""); // remove the delimiter declaration
      // split by the custom delimiter
      return numbers
        .split(new RegExp(`\\${delimiter}`)) // use custom delimiter to split the string
        .map((num) => parseFloat(num.trim())) // convert to numbers
        .reduce((sum, num) => sum + num, 0); // sum numbers
    }
  }

  return numbers
    .split(/,|\n/)
    .map((num) => parseFloat(num.trim())) // convert to numbers
    .reduce((sum, num) => sum + num, 0); // sum numbers
};

export default add;
