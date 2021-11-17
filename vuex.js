// main.js
import Vue from 'vue'
import store from './store'
new Vue({
  store // 让所有实例都能调用
})

// store/index.js
import Vue from 'vue'
import Vuex from './vuex'
Vue.use(Vuex) // 调用install

const store = new Vuex.store({
  state: {
    name: 'foo'
  },
  getters: {},
  mutations: {},
  actions: {}
})

export default store

// vuex.js
import Vue from 'vue'
class Store {
  constructor(options) {
    const { state, getters, mutations, actions } = options
    this._s = new Vue({
      data: {
        state
      }
    })
    // TODO 实现getters、mutations、actions
  }
  get state() {
    return this._s.state
  }
}

const install = (_Vue) => {
  // 让每个vue实例都是通过this.$store访问
  _Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store
      } else {
        this.$store = this.$parent.$store
      }
    }
  })
}

export default {
  Store,
  install
}




