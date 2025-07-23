<template>
    <h2>利刃的书架</h2>
    <ul>
        <li v-for="item, index in books" :key="item.id">
            <span>{{ item.book_name }}</span>
            <span>{{ item.author }}</span>
            <button @click="del(index, 1)">删除</button>
        </li>
    </ul>
</template>

<script setup>
    import {onMounted, ref} from 'vue'

    const books = ref([
        { id: 1, book_name: "《红楼梦》", author: "曹雪芹" },
        { id: 2, book_name: "《西游记》", author: "吴承恩" },
        { id: 3, book_name: "《水浒传》", author: "罗贯中" },
        { id: 4, book_name: "《三国演义》", author: "施耐庵" }
    ])

    const del = (index, num) => {
        if(window.confirm("确认删除么？")) {
            books.value.splice(index, num)
        }
    }
</script>

<style>
    #app {
        width: 400px;
        margin: 100px auto;
    }

    ul li {
        display: flex;
        justify-content: space-around;
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
    }
</style>