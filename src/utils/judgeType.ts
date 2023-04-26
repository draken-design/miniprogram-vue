export const getType = (value: unknown): string => {
  const str = Object.prototype.toString.call(value) as string;
  const match = str.match(/([A-Z]{1}[a-z]+)\]/);
  return match ? match[1] : "";
  // return Object.prototype.toString.call(value).match(/([A-Z]{1}[a-z]+)\]/)
};
export const isObject = (value: unknown): value is Record<any, any> =>
  getType(value) === "Object";
export const isFunction = (value: unknown): value is (...args: any) => any =>
  getType(value) === "Function";

export const isString = (value: unknown): value is string =>
  getType(value) === "String";
export const isBoolean = (value: unknown): value is boolean =>
  getType(value) === "Boolean";
export const isNumber = (value: unknown): value is number =>
  getType(value) === "Number";
export const isUndef = (value: unknown): value is undefined =>
  getType(value) === "Undefined";
export const isArray = (value: unknown): value is Array<any> => {
  return getType(value) === "Array";
};
