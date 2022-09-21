export const isDEV = () => {

  if (!process) return false;

  // @ts-ignore
  if (!process?.env?.NODE_ENV) return false;

  // @ts-ignore
  if (['development', 'dev'].includes(process?.env?.NODE_ENV)) return true;

  return false;
};

export const isFalsy = (value: any) => {
  if (value === null) return true;

  if (value === undefined) return true;

  if (value === false) return true;

  return false;
};

export const warning = (isTruthy: boolean, ...params: any[]) => {
  if (isDEV() && isTruthy) {
    console.warn(...params);
  }
};

export const isString = (value: unknown) => {
  return typeof value === "string"
}