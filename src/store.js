import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packagesList:[],
    loading:false
  },
  mutations: {
    initPackagesList:function(state,packages){
      let packagesListTemp = [];
      state.packagesList = packages;
      console.log("14",packages);
      packages.forEach(element => {
        packagesListTemp.push({
        key:element.key,
        trackingNumber:element.trackingNumber,
        addressee:element.addressee,
        telephone:element.telephone,
        weight:element.weight,
        state: element.state,
        dataTime:element.dataTime
        })
      });
      state.packagesList = packagesListTemp;

    },
    changeLoading:function(state,content){
      state.loading = content;
    }
  },
  actions: {
    postPackages:function(context,values){
      axios.post("http://localhost:8085/packages",{
        trackingNumber:values.trackingNumber,
        addressee:values.addressee,
        telephone:values.telephone,
        weight:values.weight,
        state:"未取件"
      }).then(function(response){
        context.dispatch("getPckages");
        console.log(response);
      }).catch(function(error){
        console.log(error);
      });
    },
    getPackages:function(context){
      context.commit("changeLoading",true);
      axios.get("http://localhost:8085/packages")
      .then(function(response){
        context.commit("changeLoading",false);
        context.commit("initPackagesList",response.data);
      }).catch(function(error){
        context.commit("changeLoading",false);

        console.log(error);
      });
    },
    putPackages:function(context,package){
      axios.put("http://localhost:8085/packages",{
        trackingNumber:values.trackingNumber,
        state:"未取件"
      }).then(function(response){
        context.dispatch("getPckages");
        console.log(response);
      }).catch(function(error){
        console.log(error);
      });
    }
  }
})
