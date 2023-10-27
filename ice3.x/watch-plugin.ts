export default () => {
  return {
    setup: ({ onGetConfig }) => {
      onGetConfig((config) => {
        config.useDevServer = false;
      });
    },
  };
};
