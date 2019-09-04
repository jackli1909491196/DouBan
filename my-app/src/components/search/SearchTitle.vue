<template>
  <div class="con">
    <span>关闭</span>
    <input type="text" />
  </div>
</template>
<script>
export default {
  components: {}
};
</script>

<style scoped>
.con {
  width: 100%;
  height: 0.48rem;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 0.18rem;
  background-color: #ffffff;
  font-size: 0.16rem;
  border-bottom: 0.01rem solid #f3f3f3;
}
.con span {
  color: #42bd56;
  font-size: 0.16rem;
}
.con input {
  margin-left: 0.1rem;
  width: 2.97rem;
  height: 0.3rem;
  background-color: #f3f3f3;
  border: none;
  /* outline: none; */
}
</style>