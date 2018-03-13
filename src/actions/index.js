const increment = (num=1) => {
  return {
    type: "INCREMENT",
    num
  };
};

export default increment
