<template>
<div>
    <el-card style="max-width: 300px" shadow="hover">
        <template #header>
            <div class="card-header">
                <span>Card name</span>
            </div>
        </template>
        <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
        <template #footer>Footer content</template>
    </el-card>
</div>
</template>

<script setup>

</script>

<style scoped></style>