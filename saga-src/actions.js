export const INCREMENT = 'INCREMENT';

export const increment = (num=1) => {
  return {
    type: "INCREMENT",
    num
  };
};

