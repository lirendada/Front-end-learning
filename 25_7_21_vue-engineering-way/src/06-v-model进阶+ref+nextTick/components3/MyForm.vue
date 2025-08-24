<script setup>
    // 表单校验
    const validate = () => {
        return Math.random() > 0.5 ? true : false
    }

    // 暴露给组件, 目的是父组件可以通过 ref 可以拿到子组件的方法
    defineExpose({
        validate
    })
</script>

<template>
  <div class="login-box">
    账户：<input type="text" /><br /><br />
    密码：<input type="password" /><br /><br />
  </div>
</template>