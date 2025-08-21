import mitt from 'mitt'

// 拿到中介
const meipo = mitt()

// 默认导出：目的是给别的组件拿到 meipo 中间人
export default meipo