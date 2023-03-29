function replaceAll(str: string, mapObj: { [key: string]: string }) {
  var re = new RegExp(Object.keys(mapObj).join('|'), 'gi')

  return str.replace(re, function (matched: string) {
    return mapObj[matched.toLowerCase()]
  })
}

export default replaceAll
