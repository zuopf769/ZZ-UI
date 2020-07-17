import Vue from 'vue'

const isServer = Vue.prototype.$isServer
const defaultOptions = {
  capture: false,
  passive: false,
}

function noop() {}

/* istanbul ignore next */
export const off = (function () {
  if (!isServer && document.removeEventListener) {
    return function (node: any, event: Event, handler: EventListener) {
      // 判断 node 为 vnode
      const element = node && node.$el ? node.$el : node
      if (element && event) {
        element.removeEventListener(event, handler, defaultOptions)
      }
    }
  } else {
    return function (node: any, event: Event, handler: EventListener) {
      const element = node && node.$el ? node.$el : node
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

/* istanbul ignore next */
export const on = (function () {
  if (!isServer && document.addEventListener) {
    return function (node: any, event: Event, handler: EventListener) {
      // 判断 node 为 vnode
      const element = node && node.$el ? node.$el : node
      if (element && event && handler) {
        element.addEventListener(event, handler, defaultOptions)
        return () => off(element, event, handler)
      }
      return noop
    }
  } else {
    return function (node: any, event: Event, handler: EventListener) {
      const element = node && node.$el ? node.$el : node
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
        return () => off(element, event, handler)
      }
      return noop
    }
  }
})()

export function hasClass(el: HTMLElement, className: string) {
  if (!el || !className) {
    return false
  }
  if (el.classList) {
    return el.classList.contains(className)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1
  }
}

export function addClass(el: HTMLElement, className: string) {
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

export function removeClass(el: HTMLElement, className: string) {
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

export function getStyle(el: HTMLElement, styleName: any) {
  if (isServer) return
  if (!el) {
    return {}
  }
  try {
    const style = window.getComputedStyle(el, null)
    return style.getPropertyValue(styleName)
  } catch (e) {
    return el.style[styleName]
  }
}
