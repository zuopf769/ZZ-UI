<template>
  <i :class="'zzdicon zzicon-' + name" v-on="$listeners"></i>
</template>
<script>
export default {
  name: 'ZzIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
