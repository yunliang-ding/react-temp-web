const plugin = () => ({
  setup: ({ onGetConfig }) => {
    onGetConfig((config) => { config.useDevServer = false })
  },
})
export default plugin;