const colors = ["#D7E4FD", "#CAEFF0", "#F4EEFD", "#FEE9E2"];

export const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
