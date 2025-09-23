// Basic CRACO config for Create React App customization
module.exports = {
  devServer: {
    port: 3000,
    host: 'localhost',
    client: {
      webSocketURL: {
        port: 3000,
        hostname: 'localhost',
        protocol: 'ws'
      }
    }
  }
};
