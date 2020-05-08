import { addClass, removeClass } from '../utils/dom'

const Transition = {
	'before-enter'(el: HTMLElement) {
		addClass(el, 'collapse-transition')
		el.style.height = '0'
	},

	enter(el: HTMLElement) {
		if (el.scrollHeight !== 0) {
			el.style.height = el.scrollHeight + 'px'
		} else {
			el.style.height = ''
		}
		addClass(el, 'collapse-overflow')
	},

	'after-enter'(el: HTMLElement) {
		// for safari: remove class then reset height is necessary
		removeClass(el, 'collapse-transition collapse-overflow')
		el.style.height = ''
	},

	beforeLeave(el: any) {
		if (!el.dataset) el.dataset = {}
		el.style.height = el.scrollHeight + 'px'
		addClass(el, 'collapse-overflow')
	},

	leave(el: any) {
		if (el.scrollHeight !== 0) {
			// for safari: add class after set height,
			// or it will jump to zero height suddenly, weired
			addClass(el, 'collapse-transition')
			el.style.height = 0
		}
	},

	'after-leave'(el: HTMLElement) {
		removeClass(el, 'collapse-transition collapse-overflow')
		el.style.height = ''
	},
}

export default {
	name: 'MtdCollapseTransition',
	functional: true,
	render(h: any, { children }: any) {
		const data = {
			on: Transition,
		}

		return h('transition', data, children)
	},
}
