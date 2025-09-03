<template>
<div>
    <el-table 
        :data="tableData" 
        style="width: 100%"
        stripe
        border
    >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="date" label="日期" width="180" />
        <el-table-column label="名称" width="180">
            <template #default="obj">
                <el-tag type="success">{{ obj.row.name }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="address" label="地址" />
        <el-table-column label="操作">
            <template #default>
                <el-icon><Edit /></el-icon>
                <el-icon><Delete /></el-icon>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script setup>
    const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-02',
        name: 'liren',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-04',
        name: 'jack',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-01',
        name: 'Tom2',
        address: 'No. 189, Grove St, Los Angeles'
    }
    ]
</script>

<style scoped>

</style>