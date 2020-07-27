import Vue from 'vue'
const isServer = Vue.prototype.$isServer
const defaultOptions = {
  capture: false,
  passive: false,
}

function noop() {}

function scrollTop() {
  // todo remove this function
  const scroll = document.querySelector('.page')
  return scroll.scrollTop
}

function offsetTop(el) {
  let top = 0
  do {
    top += el.offsetTop
  } while ((el = el.offsetParent))
  return top
}

function appear(el, otherTop = 0) {
  const offTop = offsetTop(el)
  return (
    offTop + el.scrollHeight > window.innerHeight + scrollTop() && offTop + otherTop < window.innerHeight + scrollTop()
  )
}

function throttle(action, delay) {
  let last = 0
  return function (...args) {
    const curr = new Date()
    if (curr - last > delay) {
      action.apply(this, args)
      last = curr
    }
  }
}
const on = (function () {
  if (!isServer && document.addEventListener) {
    return function (node, event, handler) {
      // 判断 node 为 vnode
      const element = node && node.$el ? node.$el : node
      if (element && event && handler) {
        element.addEventListener(event, handler, defaultOptions)
        return () => off(element, event, handler)
      }
      return noop
    }
  } else {
    return function (node, event, handler) {
      const element = node && node.$el ? node.$el : node
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
        return () => off(element, event, handler)
      }
      return noop
    }
  }
})()

const off = (function () {
  if (!isServer && document.removeEventListener) {
    return function (node, event, handler) {
      // 判断 node 为 vnode
      const element = node && node.$el ? node.$el : node
      if (element && event) {
        element.removeEventListener(event, handler, defaultOptions)
      }
    }
  } else {
    return function (node, event, handler) {
      const element = node && node.$el ? node.$el : node
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

const hasClass = function (el, className) {
  if (!el || !className) {
    return false
  }
  if (el.classList) {
    return el.classList.contains(className)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1
  }
}

const addClass = function (el, className) {
  if (!el) return
  let curClass = el.className
  const classes = (className || '').split(' ')

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

const removeClass = function (el, className) {
  if (!el || !className) return
  const classes = className.split(' ')
  let curClass = ' ' + el.className + ' '

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = curClass.trim()
  }
}

const backToTop = function (element, rate) {
  const doc = element
  let scrollTop = doc.scrollTop

  const top = function () {
    scrollTop = scrollTop + (0 - scrollTop) / (rate || 2)
    // 临界判断，终止动画
    if (scrollTop < 1) {
      doc.scrollTop = 0
      return
    }
    doc.scrollTop = scrollTop
    requestAnimationFrame(top)
  }
  top()
}

let fakeElem
function copy(content) {
  if (!fakeElem) {
    fakeElem = document.createElement('textarea')
    fakeElem.style.cssText = 'border: 0;padding: 0;margin: 0; position: absolute; left: -9999px;'
  }

  fakeElem.setAttribute('readonly', '')
  fakeElem.value = content

  document.body.appendChild(fakeElem)

  fakeElem.select()
  document.execCommand('copy')
}

export default {
  on,
  off,
  copy,
  appear,
  throttle,
  scrollTop,
  addClass,
  removeClass,
  backToTop,
}
