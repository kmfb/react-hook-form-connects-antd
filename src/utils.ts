export const isFalsy = (value: any) => {
  if (value === null) return true;

  if (value === undefined) return true;

  if (value === false) return true;

  return false;
};

export const isString = (value: unknown) => {
  return typeof value === 'string';
};
