<template>
  <div>test</div>
</template>

<script>
export default {
  name: 'ApiDoc',
  props: {
    doc: {
      type: Object,
      default: () => {},
    },
    name: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  computed: {
    empty() {
      return !Object.keys(this.doc).length
    },
    idName() {
      let name = this.name.replace(/([A-Z])/g, function (matched) {
        return '-' + matched[0].toLowerCase()
      })
      if (name[0] === '-') {
        name = name.substr(1)
      }
      return name
    },
  },
}
</script>
