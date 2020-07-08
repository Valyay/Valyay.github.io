<template>
  <div class="input_container">
    <input v-model="value" />
    <input v-model="value" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      value: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input_container {
  display: flex;
  flex-direction: column;
  width: 300px;
}
</style>
