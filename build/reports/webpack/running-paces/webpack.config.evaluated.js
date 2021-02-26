{
  mode: 'development',
  resolve: {
    modules: [
      '/Users/ralphwilliamcollett/workspace/running-paces/build/js/packages/running-paces/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/Users/ralphwilliamcollett/workspace/running-paces/build/js/packages/running-paces/kotlin-dce-dev/running-paces.js'
    ]
  },
  output: {
    path: '/Users/ralphwilliamcollett/workspace/running-paces/build/distributions',
    filename: [Function: filename],
    library: 'running-paces',
    libraryTarget: 'umd'
  },
  devtool: 'eval-source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    contentBase: [
      '/Users/ralphwilliamcollett/workspace/running-paces/build/processedResources/js/main'
    ]
  }
}