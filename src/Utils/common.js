function replaceAll(str, mapObj) {
  console.log('str, mapObj',str, mapObj)
  var re = new RegExp(Object.keys(mapObj).join('|'), 'gi')

  return str.replace(re, function (matched) {
    return mapObj[matched.toLowerCase()]
  })
}

function stringToColor(string) {
  let hash = 0
  let i

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}

function stringAvatar(name) {
  const splittedName = name.split(' ')
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${splittedName[0][0]}${splittedName[1] ? splittedName[1][0] : ''}`,
  }
}

export { replaceAll, stringAvatar, stringToColor }
