export const isProduction = () => {
  return process.env.NODE_ENV === "production";
};

export const debounce = (callback: Function, wait: number = 500) => {
  let timer: any = undefined;

  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, wait);
  };
};
