<!-- test-vue-router-to页面 -->
<template>
  <div>
    <div>{{page}}</div>
    <div>{{code}}</div>
     <div class="box" @click="routerTo2()">query传参</div>
  </div>
</template>
<script>
export default{
    name:"TestVueRouterTo",
  data() {
    return {
      page: '',
      code: ''
    }
  },
  created() {
    this.getRouterData()
  },
  methods: {
    getRouterData() {
      this.page = this.$route.params.page
      this.code = this.$route.params.code
      console.log('page', this.page)
      console.log('code', this.code)
    },
 routerTo2() {
      this.$router.push({
        path: '/',
       /*  query: {
          page: '这是页面2', code: '这是页面2的8989'
        } */
      })
    }
  }
}
</script>
<style scoped>
.box{
  width: 100px;
  height: 60px;
  background-color: rgba(243, 91, 111, 0.8);
  text-align: center;
  line-height: 60px;
  margin: 0 500px;
}
</style>