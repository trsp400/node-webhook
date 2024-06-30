// Importando o Fastify
const fastify = require("fastify")({ logger: true });

fastify.post("/webhook", async (request, reply) => {
  const body = request.body;

  fastify.log.info("Received webhook:", body);
  console.log("Received webhook:");
  console.log(body);

  return body;
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: "0.0.0.0" });
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
