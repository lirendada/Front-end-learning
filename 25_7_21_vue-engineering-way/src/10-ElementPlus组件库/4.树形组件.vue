<script setup>
import {ref} from 'vue'
const dataSource = ref([
    {
        id: 1,
        label: 'Level one 1',
        children: [
            {
                id: 4,
                label: 'Level two 1-1',
                children: [
                    {
                        id: 9,
                        label: 'Level three 1-1-1',
                    },
                    {
                        id: 10,
                        label: 'Level three 1-1-2',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        label: 'Level one 2',
        children: [
            {
                id: 5,
                label: 'Level two 2-1',
            },
            {
                id: 6,
                label: 'Level two 2-2',
            },
        ],
    },
    {
        id: 3,
        label: 'Level one 3',
        children: [
            {
                id: 7,
                label: 'Level two 3-1',
            },
            {
                id: 8,
                label: 'Level two 3-2',
            },
        ],
    },
])

let id = 1000

const onAdd = (data) => {
    const newNode = { id: id++, label: 'testtest', children: [] }
    if(!data.children) {
        data.children = []
    }
    data.children.push(newNode)
    // dataSource.value = [...dataSource.value]
}

const onDel = (node, data) => {
    const parent = node.parent
    const children = parent?.data.children || parent?.data
    const index = children.findIndex((d) => d.id === data.id)
    children.splice(index, 1)
}
</script>

<template>
    <el-tree 
        style="max-width: 600px" 
        :data="dataSource" 
        node-key="id" 
        show-checkbox 
        default-expand-all
        :expand-on-click-node="false"
    >
        <template #default="{ node, data }">
            
            <div class="custom-tree-node">
                <span>{{ data.label }}</span>
                <div>
                    <el-button type="primary" text="plain" @click="onAdd(data)">添加</el-button>
                    <el-button type="danger" text="plain" @click="onDel(node, data)">删除</el-button>
                </div>
            </div>
        </template>
    </el-tree>
</template>

<style>
    .custom-tree-node {
        flex: 1;
        width: 500px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 8px;
    }
</style>