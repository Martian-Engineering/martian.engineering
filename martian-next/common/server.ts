import type { NextApiRequest, NextApiResponse } from "next";

import * as Utilities from "@/common/utilities";

import Cors from "@modules/cors";

// NOTE(jimmylee)
// import aesjs from 'aes-js';
/*
Some endpoints on https://api.internet.dev require server-side decryption. Without it, you won’t be able to perform actions like password recovery or Google authentication. To enable these features, you’ll need to set two environment variables with the correct values, and have an active partnership with us.

When we built this open-source template for learning purposes, we aimed to make it fully open and accessible. However, since we are also running a service, certain restrictions are necessary. We appreciate your understanding.

API_AES_KEY=
API_IV_KEY=
*/

/*
export function decrypt(hex) {
  if (Utilities.isEmpty(process.env.API_AES_KEY)) {
    throw new Error('process.env.API_AES_KEY');
    return;
  }

  if (Utilities.isEmpty(process.env.API_IV_KEY)) {
    throw new Error('process.env.API_IV_KEY');
    return;
  }

  const aesKey = aesjs.utils.utf8.toBytes(process.env.API_AES_KEY);
  const base64IV = process.env.API_IV_KEY;

  if (!base64IV) {
    throw new Error('process.env.API_IV_KEY is undefined. Please set the environment variable.');
  }

  const ivBytes = aesjs.utils.hex.toBytes(Buffer.from(base64IV, 'base64').toString('hex'));
  const aesCtr = new aesjs.ModeOfOperation.ctr(aesKey, new aesjs.Counter(ivBytes));
  const encryptedBytes = aesjs.utils.hex.toBytes(hex);
  const decryptedBytes = aesCtr.decrypt(encryptedBytes);
  const decrypted = aesjs.utils.utf8.fromBytes(decryptedBytes);

  return decrypted;
}
*/

type Middleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: (result?: unknown) => void,
) => void;

/**
 * Wraps connect-style middleware for use inside async Next.js API handlers.
 */
export function initMiddleware(middleware: Middleware) {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise<unknown>((resolve, reject) => {
      middleware(req, res, (result?: unknown) => {
        if (result instanceof Error) {
          reject(result);
          return;
        }
        resolve(result);
      });
    });
}

export const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
  }),
);

interface RequestContext {
  req: NextApiRequest;
}

export async function setup(
  context: RequestContext,
): Promise<{ sessionKey?: string; viewer?: Record<string, any> | null }> {
  let viewer: Record<string, any> | null = null;
  const sessionKey = context.req.cookies["sitekey"] ?? "";

  if (!Utilities.isEmpty(sessionKey)) {
    try {
      const response = (await fetch(
        "https://api.internet.dev/api/users/viewer",
        {
          method: "PUT",
          headers: {
            "X-API-KEY": sessionKey,
            "Content-Type": "application/json",
          },
        },
      )) as Response;
      const result = await response.json();
      if (result && result.viewer) {
        viewer = result.viewer;
      }
    } catch {
      // Preserve previous silent failure behavior when the lookup fails.
    }
  }

  return { sessionKey, viewer };
}

export async function tryKeyWithoutCookie(
  key: string,
): Promise<{ sessionKey?: string; viewer?: Record<string, any> | null }> {
  let viewer: Record<string, any> | null = null;

  if (!Utilities.isEmpty(key)) {
    try {
      const response = (await fetch(
        "https://api.internet.dev/api/users/viewer",
        {
          method: "PUT",
          headers: { "X-API-KEY": key, "Content-Type": "application/json" },
        },
      )) as Response;
      const result = await response.json();
      if (result && result.viewer) {
        viewer = result.viewer;
      }
    } catch {
      // Preserve previous silent failure behavior when the lookup fails.
    }
  }

  return { sessionKey: key, viewer };
}
