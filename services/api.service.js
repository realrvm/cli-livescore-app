import axios from "axios";

export async function getLiveScore() {
  const token = process.env.TOKEN || "";
  if (!token) {
    throw new Error("TOKEN is not set");
  }

  const { data } = await axios.get(
    "https://v3.football.api-sports.io/fixtures/events?fixture=live",
    { params: {} }
  );

  return data;
}
