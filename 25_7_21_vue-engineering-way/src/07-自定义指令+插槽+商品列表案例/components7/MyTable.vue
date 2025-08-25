<script setup>
    const props = defineProps({
        data: {
            type: Array,
            default: () => []
        }
    })
</script>

<template>
    <table class="my-table">
        <thead>
            <tr>
                <!-- 表头使用具名插槽 -->
                <slot name="header"></slot>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in props.data" :key="item.id">
                <!-- 表体使用默认插槽 -->
                <slot :item="item" :index="index"></slot>
            </tr>
        </tbody>
    </table>
</template>

<style lang="scss">
.my-table {
    width: 100%;
    border-spacing: 0;

    img {
        width: 100px;
        height: 100px;
        object-fit: contain;
        vertical-align: middle;
    }

    th {
        background: #f5f5f5;
        border-bottom: 2px solid #069;
    }

    td {
        border-bottom: 1px dashed #ccc;
    }

    td,
    th {
        text-align: center;
        padding: 10px;
        transition: all .5s;

        &.red {
            color: red;
        }
    }

    .none {
        height: 100px;
        line-height: 100px;
        color: #999;
    }
}
</style>