import fastify from "fastify";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-polls";
import fastifyCookie from "@fastify/cookie";

const app = fastify();
const port: number = process.env.PORT ? Number(process.env.PORT) : 3333;

app.register(fastifyCookie, {
  secret: process.env.COOKIE_SECRET,
  hook: "onRequest",
  parseOptions: {},
});

app.register(getPoll);
app.register(createPoll);
app.register(voteOnPoll);

app.listen({ port }).then(() => {
  console.log(`HTTP Server listening on port ${port}`);
});
