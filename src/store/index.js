import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: 1,
    gender: "",
    year: 1980,
    month: 1,
    date: 1,
    question1: false,
    question2: false,
    question3: "",
    content: null
  },
  mutations: {
    setGender(state,gender) {
      state.gender = gender;
    },
    setYear(state, year) {
      state.year = year;
    },
    setMonth(state, month) {
      state.month = month;
    },
    setDate(state, date) {
      state.date = date;
    },
    setQuestion1(state, question1) {
      state.question1 = question1;
    },
    setQuestion2(state, question2) {
      state.question2 = question2;
    },
    setQuestion3(state, question3) {
      state.question3 = question3;
    },
    setContent(state, content) {
      state.content = content;
    },
  },
  actions: {
  },
  modules: {
  }
})
