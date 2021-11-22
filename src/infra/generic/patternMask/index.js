export function patternMask(value, pattern) {
  let i = 0;
  const stringValue = value.toString();

  return pattern.replace(/#/g, () => stringValue[i++] || '');
}
