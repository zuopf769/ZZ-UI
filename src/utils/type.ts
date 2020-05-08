export function isNumber(v: number) {
	return typeof v === 'number'
}

export function isObject(v: object) {
	return Object(v) === v
}

export function isFunction(v: any) {
	return typeof v === 'function'
}

export function isUndef(v: any) {
	return typeof v === 'undefined'
}

export function isDef(v: any) {
	return !isUndef(v)
}

export function isString(v: string) {
	return typeof v === 'string'
}

export function isExist(v: any) {
	return isDef(v) && v !== null
}

export function isPromise(v: any) {
	return isObject(v) && isFunction(v.then) && isFunction(v.catch)
}

export function isDate(v: any) {
	return v instanceof Date
}
// check native isArray first
export const isArray =
	Array.isArray ||
	function (value) {
		return toString.call(value) === '[object Array]'
	}
