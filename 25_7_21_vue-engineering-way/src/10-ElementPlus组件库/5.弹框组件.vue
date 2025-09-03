<template>
  <el-button plain @click="dialogVisible = true">
    Click to open the Dialog
  </el-button>

  <!--
        v-model: 控制对话框显示隐藏
        title: 标题
        width: 宽度
        before-close: 关闭前的回调函数
  -->
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="500"
    :before-close="handleClose"
  >
    <!-- 默认插槽：主题内容 -->
    <span>This is a message</span>

    <!-- 具名插槽：底部内容 -->
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
    import { ref } from 'vue'
    import { ElMessageBox } from 'element-plus'

    const dialogVisible = ref(false) // 对话框是否可见

    const handleClose = (done) => {
        ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
    }
</script>