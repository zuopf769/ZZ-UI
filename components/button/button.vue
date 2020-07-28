<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    class="zz-btn"
    :class="[
      type ? `zz-btn-${type}` : '',
      size ? `zz-btn-${size}` : '',
      {
        'zz-btn-dashed': dashed,
        'zz-btn-disabled': disabled,
        'zz-btn-loading': loading,
        'zz-btn-clicked': clicked,
        'zz-btn-ghost': ghost,
      },
    ]"
    :type="htmlType"
    :disabled="disabled || loading"
    v-bind="$attrs"
    v-on="listen"
  >
    <i v-if="loading" class="zz-btn-before zz-btn-spin"></i>
    <span v-if="!loading && (icon || $slots.icon)" class="zz-btn-before">
      <slot name="icon"><i :class="icon"></i></slot>
    </span>
    <span><slot></slot></span>
  </component>
</template>
<script>
export default {
  name: 'ZzButton',
  inheritAttrs: false,
  props: {
    href: String,
    to: [String, Object],
    ghost: Boolean,
    disabled: {
      type: Boolean,
    },
    size: {
      type: String,
    },
    htmlType: {
      type: String,
      default: 'button',
    },
    loading: {
      type: Boolean,
    },
    icon: {
      type: String,
    },
    type: {
      type: String,
    },
    dashed: {
      type: Boolean,
    },
  },
  data() {
    return {
      clicked: false,
    }
  },
  computed: {
    listen() {
      return {
        ...this.$listeners,
        click: this.handleClick,
      }
    },
    tag() {
      if (this.to !== undefined) {
        return 'router-link'
      } else if (this.href !== undefined) {
        return 'a'
      } else {
        return 'button'
      }
    },
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  methods: {
    handleClick(e) {
      clearTimeout(this.timeout)
      this.clicked = true
      this.$emit('click', e)
      this.timeout = setTimeout(() => {
        this.clicked = false
      }, 500)
    },
    focus() {
      this.$el.focus()
    },
    blur() {
      this.$el.blur()
    },
  },
}
</script>
