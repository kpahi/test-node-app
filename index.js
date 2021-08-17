const lynx = require('lynx');

const envMode = process.env.ENV_MODE
// For debug purpose only.
console.log("Mode: ",envMode )

const statsd = process.env.STATSD_HOST || "statsd"
const port = parseInt(process.env.STATSD_PORT) || 8125

// instantiate a metrics client
const metrics = new lynx(statsd, port);

// sleep for a given number of milliseconds
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  // send message to the metrics server
  metrics.timing('test.core.delay', Math.random() * 1000);

  // sleep for a random number of milliseconds to avoid flooding metrics server
  return sleep(3000);
}

// infinite loop
(async () => {
  console.log("🚀🚀🚀");
  while (true) { await main() }
})()
  .then(console.log, console.error);
