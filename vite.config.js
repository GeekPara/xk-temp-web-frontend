import { createVuePlugin } from 'vite-plugin-vue2'
// import { viteMockServe } from 'vite-plugin-mock'

export default ({ command }) => {
  return {
    plugins: [
      createVuePlugin(),
      // viteMockServe({
      //   mockPath: 'mock',
      //   localEnabled: command === 'serve',
      // })
    ],
  }
}