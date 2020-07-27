<template>
  <transition
    name="demo-trans"
    @before-enter="beforeEnter"
    @enter="enter"
    @afterEnter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @afterLeave="afterLeave"
  >
    <slot></slot>
  </transition>
</template>
<script>
export default {
  name: 'DemoTransition',
  data() {
    return {
      active: false,
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.height = 0
    },
    enter(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px'
      } else {
        el.style.height = ''
      }
    },
    afterEnter(el) {
      el.style.height = ''
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = 0
      }
    },
    afterLeave(el) {
      el.style.height = ''
    },
  },
}
</script>
<style lang="scss"></style>
