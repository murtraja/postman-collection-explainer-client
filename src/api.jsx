import { BASE_URL } from "./config";

export async function getAiResponse(user_input) {
  const url = BASE_URL + "/chat/completions";
  const options = {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: [{ role: "user", content: user_input }],
      stream: false,
    }),
    method: "POST",
  };
  const fetchResult = await fetch(url, options);
  const jsonResult = await fetchResult.json();
  console.log(jsonResult);
  return jsonResult.choices[0].message.content;
}
