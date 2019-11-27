const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssExtract = new MiniCssExtractPlugin({
  filename: '[name].css',
});

module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    },
    {
      test: /\.s?css$/,
      oneOf: [
        {
          test: /\.module\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            'sass-loader',
          ],
        },
        {
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    }
  );
  config.plugins.push(cssExtract);
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
