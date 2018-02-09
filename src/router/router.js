import Main from '@/views/Main.vue'

export const appError = {
  path: '/error',
  name: 'errorIndex',
  meta: {
    title: '服务端错误'
  }
}

export const appRouter = {
  path: '/home',
  name: 'mainPage',
  meta: {
    title: 'HI superX'
  },
  component: Main
}

export const routers = [
  appError,
  appRouter
]
