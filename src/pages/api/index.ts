// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ApiResponse } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  res.status(401).json({ error: true, message: "Unathorized" });
}
