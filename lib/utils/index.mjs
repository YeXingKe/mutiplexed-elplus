const o = e => {
  if (e) return e.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}
export { o as toLine }
