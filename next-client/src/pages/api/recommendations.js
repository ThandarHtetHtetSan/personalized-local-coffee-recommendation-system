import { recommendations } from "@/utils/jsonData";

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { roast, fragrance, groundType, aroma, flavor, price } = req.body;

  // Apply filtering logic here based on the filters received in req.body
  // For now, returning the mock data

  res.status(200).json(recommendations);
}
