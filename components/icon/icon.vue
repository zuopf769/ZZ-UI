<template>
  <i :class="'zzdicon zzicon-' + name" v-on="$listeners" />
</template>
<script>
export default {
  name: 'ZZIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
  }
};
</script>
