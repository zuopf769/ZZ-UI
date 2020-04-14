import { addClass, removeClass } from '../utils/dom'

const Transition = {
	'before-enter'(el) {
		addClass(el, 'collapse-transition')
		el.style.height = '0'
	},

	enter(el) {
		if (el.scrollHeight !== 0) {
			el.style.height = el.scrollHeight + 'px'
		} else {
			el.style.height = ''
		}
		addClass(el, 'collapse-overflow')
	},

	'after-enter'(el) {
		// for safari: remove class then reset height is necessary
		removeClass(el, 'collapse-transition collapse-overflow')
		el.style.height = ''
	},

	beforeLeave(el) {
		if (!el.dataset) el.dataset = {}
		el.style.height = el.scrollHeight + 'px'
		addClass(el, 'collapse-overflow')
	},

	leave(el) {
		if (el.scrollHeight !== 0) {
			// for safari: add class after set height,
			// or it will jump to zero height suddenly, weired
			addClass(el, 'collapse-transition')
			el.style.height = 0
		}
	},

	'after-leave'(el) {
		removeClass(el, 'collapse-transition collapse-overflow')
		el.style.height = ''
	},
}

export default {
	name: 'MtdCollapseTransition',
	functional: true,
	render(h, { children }) {
		const data = {
			on: Transition,
		}

		return h('transition', data, children)
	},
}
