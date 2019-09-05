<template>
  <div id="packageHead">
    <span>菜鸟驿站</span>
    <a-button type="dashed" @click="handleFilterState('all')">all</a-button>
    <a-button type="dashed" @click="handleFilterState('已预约')">已预约</a-button>
     <a-button type="dashed" @click="handleFilterState('已取件')">已取件</a-button>
     <a-button type="dashed" @click="handleFilterState('未取件')">未取件</a-button>

        <a-button type="primary" @click="addPackage">+添加</a-button>
  </div>
   

</template>
<script>
export default {
    name:'package-head',
    methods:{
        handleFilterState:function(state){
            this.$store.commit("changeContextFilter",state);
        },
        addPackage:function(){
            this.$router.push('/');
        }
    }
}
</script>
<style scoped>
#packageHead{
    height: 40px;
}
span{
    float: left;
    font-size: 25px;
    color: aquamarine;
}
button{
    margin:0 10px;
}
</style>