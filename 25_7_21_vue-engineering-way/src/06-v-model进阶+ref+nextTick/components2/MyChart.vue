<template>
<div class="chart-box" ref="box_ref">

</div>
</template>

<script setup>
    import * as echarts from 'echarts';
    import { onMounted, ref } from 'vue';

    const box_ref = ref(null)

    onMounted(() => {
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(box_ref.value);

        // 绘制图表
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
                {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
                }
            ]
        });
    })
</script>

<style scoped>
.chart-box {
    width: 400px;
    height: 300px;
    margin: 100px auto;
    border: 3px solid #322929;
}
</style>