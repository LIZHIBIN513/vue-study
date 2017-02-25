module.exports = {
  '/': {
    component: require('./components/index'),

    subRoutes: {
      '/subject/:id': {
        component: require('./components/detail')
      },
      '/:type/:page': {
        component: require('./components/in_theaters')
      }
    }
  },
  '*': {
    component: require('./components/notFound')
  }
}
