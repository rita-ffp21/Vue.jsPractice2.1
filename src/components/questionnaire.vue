<template>
<div class="container" id="app">

 <div class="question">
  <div class="question-title">
    <h1>以下にお答え下さい</h1>
    <hr color="#6091d3" size="1">
  </div>
  <div class="question-about">
   <div>
     <p>現在生命保険に加入されていますか？</p>
     <label><input type="radio" name="status" value="はい" v-model="question1">はい</label>
     <label><input type="radio" name="status" value="いいえ" v-model="question1">いいえ</label>
   </div>
   <div v-if="question1">
     <p>現在入院中ですか。または、最近３ヶ月以内に医師の診断・検査の結果、入院、手術を勧められたことがことがありますか？</p>
     <label><input type="radio" name="status2" value="はい" v-model="question2">はい</label>
     <label><input type="radio" name="status2" value="いいえ" v-model="question2">いいえ</label>
   </div>
   <div v-if="question2">
     <p>過去５年以内に、病気やけがで、手術を受けたことまたは継続して７日異常の入院をしたことがありますか？？</p>
     <label><input type="radio" name="status3" value="はい" v-model="question3">はい</label>
     <label><input type="radio" name="status3" value="いいえ" v-model="question3">いいえ</label>
   </div>
  </div>
  </div>

  <div class="btn-wrapper">
    <button type="button" class="btn">
      <router-link to="/">前に戻る</router-link>
    </button>
    <button type="button" class="btn">
       <router-link to="/post">次に進む</router-link>
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'questionnaire',
  data () {
    return{
    }
  },
  computed: {
    question1: {
      get() {
        return this.$store.state.question1;
      },
      set(value) {
        this.$store.commit("setQuestion1",value);
      },
    },
    question2: {
      get() {
        return this.$store.state.question2;
      },
      set(value) {
        this.$store.commit("setQuestion2",value);
      },
    },
    question3: {
      get() {
        return this.$store.state.question3;
      },
      set(value) {
        this.$store.commit("setQuestion3",value);
      },
    },
  }
}
</script>

<style scoped>
  .container{
    font-size: 15px;
    text-align: center;
    margin: 0 200px;
    padding: 0px;
  }

 .question-title {
   font-size: 12px;
 }


  .question {
    border: solid 1px #6091d3;
    border-radius: 5px;
    padding-bottom: 30px;
    margin-bottom: 20px;
  }

  .question-about {
    font-size: 16px;
    text-align: left;
    margin-left: 20px;
  }

  .btn-wrapper {
    display: flex;
    justify-content: space-between;
  }

    .btn {
    padding: 5px 30px;
    font-weight: bold;
    font-size: 18px;
    border-radius: 4px;
    background-color: #6091d3;
    color: #fff;
    border: none;
    text-decoration: none;
    justify-content: space-between;
  }

  .btn:hover {
    opacity: 0.7;
    cursor: pointer;
  }

</style>
