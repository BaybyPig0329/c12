export default {
  theme: "./theme",
  extends: ["c12-npm-test"],
  $test: {
    extends: ["./config.dev"],
    envConfig: true,
  },
  colors: {
    primary: "user_primary",
  },
  configFile: true,
  overriden: false,
  array: ["a"],
};
