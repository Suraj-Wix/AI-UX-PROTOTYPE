import type { NextApiRequest, NextApiResponse } from "next";
import models from "../../data/models.json";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(models);
}