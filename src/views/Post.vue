<template>
  <div class="post">
    <!-- <content msg="Welcome to Your Vue.js App"/> -->

    <h1>ご相談内容をご記入下さい</h1>
    <p>-ご相談内容-</p>
    <p>
      <textarea id="msg" name="user_message"></textarea>
    </p>

    <button>
      <router-link to="/about">前に戻る</router-link>
    </button>
    <button>
      次へ
    </button>
  </div>
</template>

<style scoped>
input, textarea {
  font: 1em sans-serif;

  width: 300px;
  box-sizing: border-box;

  border: 1px solid #999;
}

</style>
