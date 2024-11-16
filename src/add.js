const add = (numbers) => {
  if (!numbers) return 0; // 0 for an empty string

  return numbers
    .split(/,|\n/)
    .map((num) => parseFloat(num.trim())) // convert to numbers
    .reduce((sum, num) => sum + num, 0); // sum numbers
};

export default add;
