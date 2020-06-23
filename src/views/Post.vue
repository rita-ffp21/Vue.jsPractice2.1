<template>
  <div class="container">
   <div class="question">
    <div class="question-title">
     <h1>ご相談内容をご記入下さい</h1>
     <hr color="#6091d3" size="1">
    </div>
    <div class="question-about">
     <p>-ご相談内容-</p>
     <p>
      <textarea id="msg" name="user_message" rows="10" cols="110" placeholder="ここに記入して下さい"></textarea>
     </p>
    </div>
   </div>

  <div class="btn-wrapper">
    <button class="btn">
      <router-link to="/about">前に戻る</router-link>
    </button>
    <button class="btn">
      次へ
    </button>
  </div>
  </div>
</template>

<style scoped>
input, textarea {
  font: 1em sans-serif;

  width: 300px;
  box-sizing: border-box;

  border: 1px solid #999;
}

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

  textarea{
    width: 97%;
  }

</style>
