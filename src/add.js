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
      const numbersArray = numbers
        .split(new RegExp(`\\${delimiter}`))
        .map((num) => parseFloat(num.trim())); // convert to numbers

      // check for negative numbers
      const negativeNumbers = numbersArray.filter((item) => item < 0);
      if (negativeNumbers.length) {
        throw new Error(
          `negative numbers not allowed ${negativeNumbers.join(", ")}`
        );
      }

      // return the sum
      return numbersArray.reduce((sum, num) => sum + num, 0);
    }
  }

  const numbersArray = numbers
    .split(/,|\n/)
    .map((num) => parseFloat(num.trim())); // convert to numbers

  // check for negative numbers
  const negativeNumbers = numbersArray.filter((item) => item < 0);
  if (negativeNumbers.length) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(", ")}`
    );
  }

  //return the sum
  return numbersArray.reduce((sum, num) => sum + num, 0);
};

export default add;
