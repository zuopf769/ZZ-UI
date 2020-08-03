import Vue from 'vue'
import ZZUI from '@/index.ts'
import dirtyChai from 'dirty-chai'
import RouterLink from './router-link.vue'

chai.use(dirtyChai) // eslint-disable-line
Vue.use(ZZUI)
Vue.config.productionTip = false
Vue.component('router-link', RouterLink)
// require all test files (files that ends with .spec.js)
const testsContext = require.context('../../components', true, /\.spec\.js$/)
const srcContext = require.context('../../src', true, /\.spec\.js$/)

testsContext.keys().forEach(testsContext)
srcContext.keys().forEach(srcContext)
