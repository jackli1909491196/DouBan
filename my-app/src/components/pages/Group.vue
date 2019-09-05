<template>
  <div>
    <header-bar></header-bar>
    <div class="pleaseLogin">
      <please-login></please-login>
    </div>
    <download></download>
  </div>
</template>
<script>
import HeaderBar from "../publics/HeaderBar";
import PleaseLogin from "../publics/PleaseLogin";
import Download from '../publics/Download'
export default {
  components: {
    HeaderBar,
    PleaseLogin,
    Download
  }
};
</script>

<style scoped>
div h1 {
  padding-top: 0.48rem;
  font-size: 0.4rem;
}
.pleaseLogin {
  padding-top: 0.48rem;
}
</style>