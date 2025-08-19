<template>
    <div class="item">
      <img
        :src="urlImg"
        :alt="title" />
      <p class="name">{{ title }}</p>
      <p class="price">{{ price }}.00</p>
    </div>
</template>

<script setup>
    defineProps([
        'urlImg', 'title', 'price'
    ])
</script>

<style scoped>
.item {
  width: 240px;
  margin-left: 10px;
  padding: 20px 30px;
  transition: all 0.5s;
  margin-bottom: 20px;
  .item:nth-child(4n) {
    margin-left: 0;
  }
  &:hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    transform: translate3d(0, -4px, 0);
    cursor: pointer;
  }
  img {
    width: 100%;
  }
  .name {
    font-size: 18px;
    margin-bottom: 10px;
    color: #666;
  }
  .price {
    font-size: 22px;
    color: firebrick;
  }
  .price::before {
    content: '¥';
    font-size: 22px;
  }
}
</style>