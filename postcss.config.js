module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    },
    'postcss-import': require('postcss-import'),
    autoprefixer: require('autoprefixer')
  }
}
