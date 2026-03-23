const app = require('../index');

if (app() !== "Hello GitHub Actions") {
  throw new Error("Test failed");
}
