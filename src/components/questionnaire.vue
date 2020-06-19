<template>
<div class="hello" id="app">
  <div>
    <h1>以下にお答え下さい</h1>
  </div>
  <div>
    <p>現在生命保険に加入されていますか？</p>
    <label><input type="radio" name="status" value="question1-yes" v-model="page1">はい</label>
    <label><input type="radio" name="status" value="question1-no" v-model="page1">いいえ</label>
  </div>
  <div v-if="page1">
    <p>現在入院中ですか。または、最近３ヶ月以内に医師の診断・検査の結果、入院、手術を勧められたことがことがありますか？</p>
    <label><input type="radio" name="status2" value="question2-yes" v-model="page2">はい</label>
    <label><input type="radio" name="status2" value="question2-no" v-model="page2">いいえ</label>
  </div>
  <div v-if="page2">
    <p>過去５年以内に、病気やけがで、手術を受けたことまたは継続して７日異常の入院をしたことがありますか？？</p>
    <label><input type="radio" name="status3" v-model="page3">はい</label>
    <label><input type="radio" name="status3" v-model="page3">いいえ</label>
  </div>
  <div>
    <button>
      <router-link to="/">前に戻る</router-link>
    </button>
    <button>
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
      page1 : false,
      page2 : false
    }
  },
  props: {
    msg: String
  }
}

</script>
