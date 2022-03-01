import Vue from 'vue'
import API from '../api'

// 导入iconfront
import token from '../token/token.js'
import constant from '../constant/index.js'
import filters from '../filters/index.js'

Vue.prototype.getToken = token.isLoginToken
Vue.prototype.setToken = token.setToken
Vue.prototype.$constant = constant
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
Vue.prototype.$API = API
// import VueMeta from 'vue-meta'

Vue.config.productionTip = false

