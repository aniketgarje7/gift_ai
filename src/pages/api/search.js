import OpenAI from "openai";

export default async function handler(req, res) {
  // 1. check for POST call
  if (req.method !== "POST") {
    return res.status(400).json({ message: "http method not allowed" });
  }
  const data = req.body;
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: data.messages,
      temperature: 0,
      max_tokens: 256,
    });
    const formatted_response = response?.choices[0]?.message;
    return res.status(200).json({ success: true, data: formatted_response });
  } catch (e) {
    return res.status(400).json({ success: false, error: e });
  }
}
