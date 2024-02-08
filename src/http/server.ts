import fastify from "fastify";

const app = fastify();
const port: number = process.env.PORT ? Number(process.env.PORT) : 3333;

app.get("/", (req, res) => {
  return res.status(200).send({
    success: true,
  });
});

app.listen({ port }).then(() => {
  console.log(`HTTP Server listening on port ${port}`);
});
