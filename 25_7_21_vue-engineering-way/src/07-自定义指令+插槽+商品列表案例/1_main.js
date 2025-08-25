import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

app.directive('highlight', {
  mounted(el, binding) {
    console.log(binding)

    // 默认颜色
    let color = 'yellow'

    // 如果传了参数（比如 :blue）
    if (binding.arg) {
      color = binding.arg
    }

    // 如果有修饰符，比如 .bold
    if (binding.modifiers.bold) {
      el.style.fontWeight = 'bold'
    }

    el.style.backgroundColor = color
  }
})


app.mount('#app')