export const getValue = (value: string | number | undefined) => {
  if (value) {
    return typeof value === 'string' ? value : `${value}px`;
  }
};
