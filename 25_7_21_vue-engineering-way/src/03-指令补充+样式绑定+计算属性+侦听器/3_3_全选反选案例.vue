<template>
<p>
    <span>
        <input type="checkbox" id="all" v-model="allSelect"></input>
        <label for="all">全选</label>
    </span>
    <button @click="planList.forEach(item => item.done = !item.done)">反选</button>
</p>
<ul>
    <li v-for="item in planList" :key="item.id">
        <input type="checkbox" v-model="item.done"></input>
        <span :class="{done : item.done}">{{ item.name }}</span>
    </li>
</ul>
</template>

<script setup>
    import { computed, ref } from 'vue'
    // 计划列表
    const planList = ref([
        { id: 12, name: '跑步', done: false },
        { id: 76, name: '看书', done: false },
        { id: 31, name: '撸码', done: false },
        { id: 49, name: '追剧', done: false }
    ])

    // 实现全选按钮在子项全选情况下为true，取消任意子项后为false
    // 使用computed的原因是因为这里 allSelect 需要根据 planList 的元素情况进行具体判断来改变
    const allSelect = computed({
        // get方法保证子项修改，会影响全选按钮
        get() {
            return planList.value.length > 0 && planList.value.every(item => item.done);
        }, 

        // set方法保证全选按钮修改，会影响子项
        set(val) {
            planList.value.forEach(item => item.done = val);
        }
    })
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

#app {
    width: 300px;
    margin: 100px auto;
    padding: 15px 20px;
    background-color: plum;
    
    p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;

        button {
            padding: 3px 6px;
        }
    }

    ul {
        list-style: none;
        li {
            justify-content: space-between;
            display: flex;
            align-items: center;
            border-top: 1px solid #968a8a;
            height: 30px;

            span.done {
                color:cadetblue;
                text-decoration: line-through;
            }
        }
    }

    input {
        margin-right: 8px;
    }
}
</style>