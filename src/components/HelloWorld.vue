<template>
<div class="hello">
  <div class="question-title">
     <h1>お客様の情報を入力して下さい</h1>
  </div>
  <div class="question">
    <div>
      <p>-性別-</p>
      <label><input type="radio" name="status" id="radioAll" >男性</label>
      <label><input type="radio" name="status" id="radioAll" >女性</label>
    </div>
    <div>
      <p>-生年月日-</p>
      <div id="dates">
    <select name="year" v-model="year" v-on:change="year">
        <option v-for="(year,key) in 2020" :key="key">{{ year }}</option>
    </select>
    <label>年</label>

    <select name="month"  v-model="month" v-on:change="month">
        <option v-for="(month,key) in 12" :key="key">{{ month }}</option>
    </select>
    <label>月</label>

    <select name="date"  v-model="date" v-on:change="day">
        <option v-for="(date,key) in 31" :key="key">{{ date }}</option>
    </select>
    <label>日</label>
</div>
    </div>
  </div>
  <div>
    <button>
      <router-link to="/about">次へ進む</router-link>
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      year: 1980,
      month: 1,
      day: 1,
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    /* text-align: center; */
    font-size: 18px;
  }

  .question{
    font-size: 16px;
  }

  .question-title{
    font-size: 12px;
  }
</style>
