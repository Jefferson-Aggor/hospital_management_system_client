export const utilities = {
  baseUrl: "https://hms-project.herokuapp.com/api",
};

export const getFirstLetter = (name) => {
  let strToArr = name.split("");
  return strToArr[0];
};
