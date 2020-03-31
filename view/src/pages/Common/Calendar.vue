<template>
  <div>
    <van-popup v-model="show"  position='bottom' :style="{ height: '80%' }"  round >
        <van-calendar v-model="show" type="range" @confirm="confirm"
         color="#ffdb00" confirm-disabled-text="请选择结束时间" :formatter="formatter" />
      </van-popup>
  </div>
</template>

<script>
export default {
  props:{
    formatter:Function,
    show:Boolean
  },
  data() {
    return {
      bool:false,
      showIs : true
    }
  },
  methods:{
    confirm(date) {
      this.$emit('hand',date)
    }
  }
}
</script>

<style>
i.van-icon{
  display: none;
}
</style>