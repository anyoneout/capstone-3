// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Redis } from '@upstash/redis';

// Initialize Redis
const redis = Redis.fromEnv();


  // Fetch data from Redis


export default async function handler(req, res) {
  await redis.set("item2", "brocolli")
  const result = await redis.get("item");
  res.status(200).json({ name: "John Doe", result: result });
}
