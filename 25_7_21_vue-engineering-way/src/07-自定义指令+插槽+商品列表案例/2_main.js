import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// app.directive('color', {
//   mounted(el, binding) {
//     el.style.color = binding.value
//   }, 
//   updated(el, binding) {
//     el.style.color = binding.value
//   }
// })

app.directive('color', (el, binding) => {
  el.style.color = binding.value
})


app.mount('#app')