<template>
  <a-table :columns="columns"
    :dataSource="data"
    :loading="loading"
  >
      <span slot="action" slot-scope="text, record">
     
      <a-button type="primary" @click="handlePackageState(record)">确认收货</a-button>
   
      </a>
    </span>
  </a-table>
</template>
<script>
import reqwest from 'reqwest';
const columns = [{
  title: '运单号',
  dataIndex: 'trackingNumber',
  sorter: true,
  width: '20%',
}, {
  title: '收件人',
  dataIndex: 'addressee',
  width: '20%',
}, {
  title: '电话',
  dataIndex: 'telephone',
}, {
  title: '状态',
  dataIndex: 'state',
}, {
  title: '预约时间',
  dataIndex: 'dateTime',
}, {
  title: '确认收货',
  key: 'action',
  scopedSlots: { customRender: 'action' },
}];

export default {
  computed: {
    loading:function(){
        return this.$store.state.loading;
    }
  },
  data() {
    return {
      columns,
    }
  },
  computed:{
    data:function(){
    return this.$store.state.packagesList;
     console.log("46",this.data);
    },
    loading:function(){
      return this.$store.state.loading;
    }
  },
  mounted(){
      this.$store.dispatch("getPackages");
    },
    methods:{
      handlePackageState:function(event){
        this.$store.dispatch("putPackages",event);
      }
    }
}
</script>
