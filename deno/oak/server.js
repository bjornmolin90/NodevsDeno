import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import small from "../../data/small.json" assert { type: 'json' };
import medium from "../../data/medium.json" assert { type: 'json' };
import big from "../../data/big.json" assert { type: 'json' };

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/small", (context) => {
    context.response.body = JSON.stringify(small);
  })
  .get("/medium", (context) => {
    context.response.body = JSON.stringify(medium);
  })
  .get("/big", (context) => {
    context.response.body = JSON.stringify(big);
  })
  ;

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });