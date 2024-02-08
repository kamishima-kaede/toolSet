module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            // rootValue根据设计稿宽度除以10进行设置，这边假设设计稿为375，即rootValue设为37.5
            rootValue: 37.5,
            propList: ['*'],
          }),
        ],
      },
    },
  },
  plugins: {
    'postcss-preset-env': {},
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
