<script setup>
    import MyGoods from './components1/MyGoods.vue';

    // 提供数据
    const goodsObj = {
      id: '3998274',
      name: '德国百年工艺高端水晶玻璃红酒杯2支装',
      price: 139,
      picture:
        'https://yanxuan-item.nosdn.127.net/8896b897b3ec6639bbd1134d66b9715c.jpg'
    }
</script>

<template>
  <div class="list">
    <!-- 在子组件中，传入自定义属性 -->
    <MyGoods :urlImg="goodsObj.picture" :price="goodsObj.price" :title="goodsObj.name"/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.list {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
</style>