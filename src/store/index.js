import Vue from 'vue'
import Vuex from 'vuex'
import contacts from '@/AllContacts'


Vue.use(Vuex)

export default new Vuex.Store({
  state: { contacts },
  getters: {},
  mutations: {
    removeContact(id) {
      console.log('pisun vuex')

      return contacts.contacts.filter((c) => c.id !== id)
      // this.contacts = this.contacts.filter((c) => c.id !== id);
    },
  },
  actions: {
    // proba() {
    //   //console.log(contacts.contacts)
    // },

  }
})