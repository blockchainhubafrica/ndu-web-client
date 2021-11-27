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

export const arrayOfrandomNumbers = (amount, numberLength) => {
  numberLength ?? (numberLength = 10);

  const serialsArray = [];
  for (let i = 0; i < amount; i++) {
    serialsArray.push(randomNumber(numberLength));
  }
  return serialsArray;
};

export const isExpired = (date) => {
  let expiryTime = new Date(date).getTime();
  let today = new Date().getTime();
  return today > expiryTime;
};

export const formatDate = (date) => {
  let formattedDate = date
    ? new Date(date).toDateString()
    : new Date().toDateString();
  formattedDate = formattedDate.split(" ");
  formattedDate = formattedDate.slice(1).join(" ");

  return formattedDate;
};
