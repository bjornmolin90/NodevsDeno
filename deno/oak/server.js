import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as bcrypt from 'https://deno.land/x/crypt@v0.1.0/bcrypt.ts';
import small from "../../data/small.json" assert { type: 'json' };
import medium from "../../data/medium.json" assert { type: 'json' };
import big from "../../data/big.json" assert { type: 'json' };

const pass = "Passw0rd123!"

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/pass", async (context) => {
    const salt = await bcrypt.genSalt(16);
    const hash = await bcrypt.hash(pass, salt);
    context.response.body = JSON.stringify(hash);
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