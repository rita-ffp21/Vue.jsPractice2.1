<template>
<div class="container">
  <div class="question">
    <div class="question-title">
      <h1>以下の内容をご確認下さい</h1>
      <hr color="#6091d3" size="1">
    </div>
    <div class="question-about">
      <div>
       <p>-性別-</p>
       <p>{{$store.state.gender}}</p>
      </div>
      <div>
        <p>-生年月日-</p>
        <p>{{$store.state.year}}年{{$store.state.month}}月{{$store.state.date}}日</p>
      </div>
      <div>
        <p>-現在生命保険に加入されていますか？-</p>
        <p>{{$store.state.question1}}</p>
        <p>-現在入院中ですか。または、最近３ヶ月以内に医師の診断・検査の結果、入院、手術を勧められたことがことがありますか？-</p>
        <p>{{$store.state.question2}}</p>
        <p>-過去５年以内に、病気やけがで、手術を受けたことまたは継続して７日異常の入院をしたことがありますか？-</p>
        <p>{{$store.state.question3}}</p>
      </div>
      <div>
        <p>-ご相談内容-</p>
        <p>{{$store.state.content}}</p>
      </div>
    </div>
  </div>
  <div class="btn-wrapper">
    <button class="btn">
     <router-link to="/Post">前に戻る</router-link>
    </button>
    <button type="button" class="btn">
       <router-link to="#">送信</router-link>
    </button>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    font-size: 40px;
    text-align: center;
    margin: 0 200px;
    padding: 0px;
  }

  .question-title {
    border: solid 1px #6091d3;
    /* background-color: aqua; */
    border: black;
    font-size: 18px;
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

  .question-title{
    font-size: 12px;
  }

  select {
    padding: 3px 5px;
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
  }

  .btn:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  .btn-wrapper {
    display: flex;
    justify-content: space-between;
  }
</style>
