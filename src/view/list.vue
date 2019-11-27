<template>
  <div class="middle">
    特价页
  </div>
</template>

<script>
export default {
    data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {

  }

}
</script>

<style>
.middle{
        /* 设置居中  也可以写auto */
      flex: 1; 
      
      overflow-y: scroll;
}
</style>