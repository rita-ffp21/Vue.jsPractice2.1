<template>
  <div class="about">
    <questionnaire msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import questionnaire from '@/components/questionnaire.vue'

export default {
  name: 'About',
  components: {
    questionnaire
  }
}

</script>
