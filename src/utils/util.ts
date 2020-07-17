import { isArray } from './type'

const hasOwnProperty = Object.prototype.hasOwnProperty

export function hasOwn(obj: object, key: string) {
  return hasOwnProperty.call(obj, key)
}

export function typeOf(obj: object) {
  return Object.prototype.toString
    .call(obj)
    .toLowerCase()
    .replace(/(\[object )(\w+)(\])/g, '$2')
}

// deepCopy
export function deepCopy(data: any) {
  const t = typeOf(data)
  let o

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      ;(o as Array<any>).push(deepCopy(data[i]))
    }
  } else if (t === 'object') {
    for (const i in data) {
      o[i] = deepCopy(data[i])
    }
  }
  return o
}

export function firstUpperCase(str: string) {
  return str.toString()[0].toUpperCase() + str.toString().slice(1)
}

// scrollTop animation
export function scrollTop(
  el: any,
  from = 0,
  to: number,
  duration = 500,
  endCallback: any,
) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame =
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
  }
  const difference = Math.abs(from - to)
  const step = Math.ceil((difference / duration) * 50)

  function scroll(start: number, end: number, step: number) {
    if (start === end) {
      endCallback && endCallback()
      return
    }

    let d = start + step > end ? end : start + step
    if (start > end) {
      d = start - step < end ? end : start - step
    }

    if (el === window) {
      window.scrollTo(d, d)
    } else {
      el.scrollTop = d
    }
    window.requestAnimationFrame(() => scroll(d, end, step))
  }
  scroll(from, to, step)
}

// Find component downward
export function findComponentDownward(
  context: any,
  componentName: string,
): any {
  const childrens = context.$children
  let children = null

  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name
      if (name === componentName) {
        children = child
        break
      } else {
        children = findComponentDownward(child, componentName)
        if (children) break
      }
    }
  }
  return children
}

// Find components downward
export function findComponentsDownward(context: any, componentName: string) {
  return context.$children.reduce((components: any, child: any) => {
    if (child.$options.name === componentName) components.push(child)
    const foundChilds = findComponentsDownward(child, componentName)
    return components.concat(foundChilds)
  }, [])
}

export const getValueByPath = function (object: object, prop: string) {
  if (object === undefined || object === null) {
    return object
  }
  if (hasOwn(object, prop)) {
    return object[prop]
  }
  prop = prop || ''
  const paths = prop.split('.')
  let current = object
  let result = null
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i]
    if (!current) break

    if (i === j - 1) {
      result = current[path]
      break
    }
    current = current[path]
  }
  return result
}

export function getPropByPath(obj: object, path: string, strict: boolean) {
  let tempObj = obj
  if (hasOwn(obj, path)) {
    return {
      o: obj,
      k: path,
      v: obj[path],
    }
  }
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  const keyArr = path.split('.')
  let i = 0
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break
    const key = keyArr[i]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      if (strict) {
        // eslint-disable-next-line max-len
        throw new Error(`[warn]: unable get ${path} in ${obj}`)
      }
      break
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null,
  }
}

export const sharpMatcherRegx = /#([^#]+)$/

export function escapeRegexpString(value = '') {
  return String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
}

export function arrayRemove(array: Array<any>, removed: any) {
  const b = isArray(removed) ? removed : [removed]
  return array.filter(a => b.includes(a))
}
