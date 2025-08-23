import type { NextApiRequest, NextApiResponse } from "next";
import templates from "../../data/templates.json";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(templates);
}