module.exports = {
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules'
        }
      ]
    }
  },
  pagePerSection: true,
	sections: [
    {
      name: 'Cards',
      content: './src/components/Cards/Readme.md',
      components: () => ['./src/components/Cards/**/*.js'],
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'collapse', // 'hide' | 'collapse' | 'expand',
      sectionDepth: 1
    },
    {
      name: 'Buttons',
      //content: './src/components/Cards/Readme.md',
      components: () => ['./src/components/Button/**/*.js'],
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'collapse', // 'hide' | 'collapse' | 'expand',
      sectionDepth: 1
    }
	]
}