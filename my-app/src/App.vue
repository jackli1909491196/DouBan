<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,h1,h2,h3,h4,h5,h6,p,ul,ol,dl,dd,td,input,select,option,textarea{
	margin:0;
	padding:0;
}
body,html{
	height: 100%;
}
html{
	font-size: 26.67vw;
}
body{
	font-family:"微软雅黑";
	background: #ffffff;
	/* display: flex;
	flex-direction: column; */
}
img{
	border: none;
}
a{
	text-decoration: none;
}

</style>
