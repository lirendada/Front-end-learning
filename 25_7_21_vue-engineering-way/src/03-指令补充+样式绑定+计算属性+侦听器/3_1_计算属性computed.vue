<template>
<h3>利刃的礼物清单</h3>
<table>
    <thead>
        <tr>
            <th>名字</th>
            <th>数量</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in goodsList" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.num }}</td>
        </tr>
    </tbody>
</table>
<p>礼物总数：{{ n }} 个</p>
<p>礼物总数：{{ n }} 个</p>
<p>礼物总数：{{ n }} 个</p>
<hr/>

<p>礼物总数：{{ normal() }} 个</p>
<p>礼物总数：{{ normal() }} 个</p>
<p>礼物总数：{{ normal() }} 个</p>
</template>

<script setup>
    import {ref, computed} from 'vue'

    // 依赖不变的话，只会被执行一次，然后需要时候从缓存中取得该数据
    const n = computed(() => {
        console.log('computed');
        return goodsList.value.reduce(((prev, value) => prev + value.num), 0);
    })

    // 不管依赖变不变，都会被重新执行
    const normal = () => {
        console.log('normal');
        return goodsList.value.reduce(((prev, value) => prev + value.num), 0);
    }

    const goodsList = ref([
        { id: 1, name: '篮球', num: 1 },
        { id: 2, name: '玩具', num: 3 },
        { id: 3, name: '书籍', num: 2 }
    ])
</script>

<style scoped>
table {
    width: 350px;
    border: 1px solid #898080;
}

table th, table td {
    border: 1px solid #898080;
    text-align: center;
}
</style>