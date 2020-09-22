export default function prefixObjectKey(targetObject, prefix) {
  return Object.entries(targetObject).reduce((acc, [key, value]) => ({
    ...acc,
    [`${prefix}${key}`]: value,
  }), {});
}
