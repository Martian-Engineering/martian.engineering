import type { NextApiRequest, NextApiResponse } from "next";

type NextHandler = (err?: unknown) => void;

export interface CorsOptions {
  methods?: string[];
  origin?: string | string[];
  headers?: string[];
}

/**
 * Minimal CORS middleware compatible with Next.js API handlers.
 */
export default function Cors(options: CorsOptions = {}) {
  const allowOrigin = options.origin ?? "*";
  const allowMethods = options.methods ?? ["GET", "POST", "PUT", "DELETE", "OPTIONS"];
  const allowHeaders = options.headers ?? ["Content-Type", "X-API-KEY"];

  return (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    res.setHeader("Access-Control-Allow-Origin", Array.isArray(allowOrigin) ? allowOrigin.join(",") : allowOrigin);
    res.setHeader("Access-Control-Allow-Methods", allowMethods.join(","));
    res.setHeader("Access-Control-Allow-Headers", allowHeaders.join(","));

    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }

    next();
  };
}
