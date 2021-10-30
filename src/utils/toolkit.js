export const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

export const randomNumber = (length) => {
  length ?? (length = 10);
  let range = Array.from(Array(length).keys());
  let token = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * range.length);
    token += range[randomIndex];
  }
  return token;
};
