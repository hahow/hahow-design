import get from 'lodash/get';

/**
 * Truncates number if it's longer than the given maximum length.
 * The last characters of the truncated string are replaced with the omission string
 * which defaults to "+".
 * @param {number} number - The number to truncate.
 * @param {Object} options
 * @param {number} [options.length=99] - The maximum number length
 * @param {string} [options.omission='+'] - The string to indicate text is omitted.
 * @returns {string} Returns the truncated string.
 * @example
 * // => '33'
 * truncate(33);
 * // => '99'
 * truncate(99);
 * // => '99+'
 * truncate(100);
 */
const truncate = (number, options) => {
  const length = get(options, 'length', 99);
  const omission = get(options, 'omission', '+');

  return (number > length) ? `${length}${omission}` : `${number}`;
};

export default truncate;
