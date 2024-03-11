// eslint-disable-next-line
const baseURL = __PPRESS_BASE_URL || '/'

export const normalize = (url) => {
  return (baseURL + url).replace(/\/\//, '/')
}
