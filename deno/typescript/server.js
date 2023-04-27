import { serve } from "https://deno.land/std@0.181.0/http/server.ts";
import * as bcrypt from 'https://deno.land/x/crypt@v0.1.0/bcrypt.ts';
import small from "../../data/small.json" assert { type: 'json' };
import medium from "../../data/medium.json" assert { type: 'json' };
import big from "../../data/big.json" assert { type: 'json' };

const salt = await bcrypt.genSalt(16);
const pass = "Passw0rd123!"

const handler = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);

  if (url.pathname  === "/small") {
    return new Response(JSON.stringify(small), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }
  
  else if (url.pathname  === "/pass") {
    const hash = await bcrypt.hash(pass, salt);
    return new Response(JSON.stringify(hash), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  else if (url.pathname  === "/medium") {
    return new Response(JSON.stringify(medium), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  else if (url.pathname  === "/big") {
    return new Response(JSON.stringify(big), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  else {
    return new Response("Hello world", {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }

};

serve(handler, { port: 3000 });