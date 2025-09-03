<script setup>
    import { reactive, ref } from 'vue';
    import { ElMessage } from 'element-plus'

    const loginForm = reactive({
        name: '',
        password: '',
    })

    const rules = {
        name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度范围：3-10个字符', trigger: 'blur'}
        ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度范围：6-15个字符', trigger: 'blur'}
        ]
    }

    const loginFormRef = ref(null)

    const onSubmit = () => {
        loginFormRef.value.validate((isValid) => {
            if(isValid === false) {
                return ElMessage.error('请进行合法输入！')
            }
        })
        console.log('ok...进行网络请求...');
    }

    const onReset = () => {
        loginFormRef.value.resetFields()
    }
</script>

<template>
<div class="login">
    <el-form 
        :model="loginForm"
        :rules="rules"
        ref="loginFormRef"
        label-width="auto"
        style="max-width: 300px"
    >
        <el-form-item label="用户名" prop="name">
            <el-input 
                v-model="loginForm.name"
                placeholder="请输入用户名"
                prefix-icon="User"
            />
        </el-form-item>

        <el-form-item label="密码" prop="password">
            <el-input 
                v-model="loginForm.password"
                type="password"
                show-password
                placeholder="请输入密码"
                prefix-icon="Lock"
            />
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">提 交</el-button>
            <el-button @click="onReset">重 置</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<style>
body {
    background: #ddd;
    display: flex;
    justify-content: center;   /* 登录框水平居中 */
    align-items: center;       /* 登录框垂直居中 */
    min-height: 100vh;         /* 撑满屏幕高度 */
    margin: 0;
}

.login {
    width: 350px;
    background: white;
    padding: 20px 10px;
    border-radius: 6px;

    display: flex;
    flex-direction: column;    /* 子元素纵向排列 */
    align-items: center;       /* 子元素水平居中 */
}
</style>