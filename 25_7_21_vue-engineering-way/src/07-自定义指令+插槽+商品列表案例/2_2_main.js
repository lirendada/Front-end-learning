import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

app.directive('lazyload', (el, binding) => {
    const io = new IntersectionObserver(([entry]) => {
        // entry；交叉状态对象
        if(entry.isIntersecting) {
            // 此时说明图片与可视区发送交叉，说明要渲染出来
            el.src = binding.value

            // 监听图片加载错误事件
            el.addEventListener('error', (error) => {
                console.log('图片加载失败', error);
            })

            // 停止监听，关闭监听
            io.unobserve(el)
            io.disconnect()
        }
    })
    // 开启监视
    io.observe(el)
})


app.mount('#app')