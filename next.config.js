/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  webpack: (config, { isServer }) => {
    // Add file-loader for mp3 files
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/sounds",
          outputPath: `${isServer ? "../" : ""}static/sounds/`,
          name: "[name]-[hash].[ext]",
        },
      },
    });
    return config;
  },
};
