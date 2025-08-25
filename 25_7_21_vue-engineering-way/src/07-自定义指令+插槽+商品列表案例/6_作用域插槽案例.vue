<script setup>
    import { ref } from 'vue'
    import MyTable from './components6/MyTable.vue'

    const tableData1 = ref([
        { id: 11, name: '狗蛋', age: 18 },
        { id: 22, name: '大锤', age: 19 },
        { id: 33, name: '铁棍', age: 17 }
    ])

    const tableData2 = ref([
        { id: 21, name: 'Jack', age: 18 },
        { id: 32, name: 'Rose', age: 19 },
        { id: 43, name: 'Henry', age: 17 }
    ])

    const del = (index) => {
        if(window.confirm("确认删除吗？")) {
            tableData1.value.splice(index, 1)
        }
    }

    const check = (index) => {
        alert(JSON.stringify(tableData2.value[index]))
    }
</script>

<template>
    <MyTable :data="tableData1">
        <template #default="obj">
            <button @click="del(obj.index)">删除</button>
        </template>
    </MyTable>

    <MyTable :data="tableData2">
        <template #default="obj">
            <button @click="check(obj.index)">查看</button>
        </template>
    </MyTable>
</template>

<style>
body {
  background-color: #fff;
}
</style>