import { useState, useEffect } from "react";
import "./App.css";

import { role } from "./config";
import { getAiResponse } from "./api";

function App() {
  const [responseList, setResponseList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState(
    "What is the url for payment authorization?"
  );
  async function onAskClick() {
    setLoading(true);
    const response = await getAiResponse(input);
    const newResponseList = [...responseList, input, response];
    setResponseList(newResponseList);
    setLoading(false);
  }
  const onInputChange = ({ target: { value } }) => {
    setInput(value);
  };
  return (
    <>
      <ul>
        {responseList.map((response, idx) => (
          <li key={idx}>{response}</li>
        ))}
      </ul>
      <input
        value={input}
        onChange={onInputChange}
        style={{ width: "100%" }}
        type="text"
      />
      <button onClick={onAskClick} disabled={loading}>
        {loading ? "Loading..." : "Ask"}
      </button>
    </>
  );
}

export default App;
/*
Is the payment authorization a GET or POST request?
What are the three different kinds of responses that the server can give? give their names only?




What is the url for payment authorization?
According to the JSON Postman collection, the URL for payment authorization is `{{url}}/payment/auth`. Note that `{{url}}` is a placeholder and should be replaced with the actual URL of your Bm2Pay Gateway Integration API.

Is the payment authorization a GET or POST request?
According to the provided JSON Postman collection, the "Payment Authorization" is a **POST** request.

What are the three different kinds of responses that the server can give? give their names only
Based on the provided JSON, the three different kinds of responses from the server are: 1. Success 2. Errored 3. Declined
*/
