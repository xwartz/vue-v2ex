export function length (title) {
  if (title.length > 35) {
    return title.substr(0, 35) + '...'
  } else {
    return title
  }
}

export function fromNow (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' 分钟前')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' 小时前')
  } else {
    return pluralize(~~(between / 86400), ' 天前')
  }
}

function pluralize (time, label) {
  return time + label
}
