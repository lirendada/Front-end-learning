<template>
  <div class="chart-wrapper">
    <!-- 流程图 -->
    <div ref="chartRef"></div>

    <!-- 图例 -->
    <div class="legend">
      <div class="legend-item">
        <span class="legend-color ccp"></span>
        <span>CCP工序</span>
      </div>
      <div class="legend-item">
        <span class="legend-color normal"></span>
        <span>普通工序</span>
      </div>
    </div>

    <!-- 弹窗 -->
    <el-dialog v-model="dialogVisible" title="节点详情">
      <div>{{ currentNode }}</div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import mermaid from "mermaid";

const chartRef = ref(null);
const dialogVisible = ref(false);
const currentNode = ref("");

onMounted(async () => {
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "loose",
    flowchart: {
      useMaxWidth: true,
      curve: "linear"
    }
  });

  const graph = `
    flowchart LR
        %% 样式定义
        classDef ccp fill:#f56c6c,stroke:#333,stroke-width:1px,color:white;
        classDef normal fill:#90cdf4,stroke:#333,stroke-width:1px,color:white;

        %% 节点
        A["开始"]:::normal --> B["处理数据"]:::ccp
        B --> C["结束"]:::normal

        %% 点击事件
        click A "javascript:handleMermaidClick('A')" "开始"
        click B "javascript:handleMermaidClick('B')" "处理数据(CCP)"
        click C "javascript:handleMermaidClick('C')" "结束"
  `;

  const { svg } = await mermaid.render("myGraph", graph);
  chartRef.value.innerHTML = svg;

  window.handleMermaidClick = (id) => {
    currentNode.value = "你点击了节点：" + id;
    dialogVisible.value = true;
  };
});
</script>

<style scoped>
.chart-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center; /* 整个流程图+图例居中 */
  padding: 20px;
  border: 1px dashed #ddd;
}

.chart-wrapper > div:first-child {
  /* 流程图 SVG 容器 */
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 300px;
}

/* 图例 */
.legend {
  display: flex;
  justify-content: center; /* 水平居中 */
  gap: 20px;
  margin-top: 10px; /* 与流程图间距 */
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
}

.legend-color {
  width: 16px;
  height: 16px;
  display: inline-block;
  border-radius: 50%; /* 圆形 */
}

.legend-color.ccp {
  background-color: #f56c6c;
}

.legend-color.normal {
  background-color: #90cdf4;
}
</style>
