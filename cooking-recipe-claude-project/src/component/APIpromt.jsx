import { useState, useEffect } from "react";

function HuggingFaceFetch(prop) {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const SYSTEM_PROMPT = "Create a recipe using only the following ingredients. You don’t need to use all of them, but try to incorporate as many as possible to create a delicious and easy-to-follow dish. You must format the recipe for easy access on a webpage using html element, with clear sections like h1, ingredients like li, instructions like p, and optional tips or variations with li or ol.";
    const API_TOKEN = import.meta.env.VITE_HUGGING_FACE_TOKEN;

    const MODEL = 'https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1';

    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(MODEL, {
          method: 'POST',
          headers: {
            "Authorization": `Bearer ${API_TOKEN}`,
            "Content-type": 'application/json'
          },
          body: JSON.stringify({
            inputs: `${SYSTEM_PROMPT}, ${prop.ingredient}`
          })
        });

        if (!response.ok) {
          throw new Error("Network isn't responding");
        }

        const data = await response.json();
        let generatedText = data[0].generated_text;

        generatedText = generatedText.replace(SYSTEM_PROMPT, '').trim();

        const filteredHtml = filterHtmlElements(generatedText);

        setResponseData(filteredHtml);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [prop.ingredient, responseData]);

  function filterHtmlElements(inputString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(inputString, "text/html");
    const body = doc.body;

    if (!body) {
      return '';
    }

    const validHtml = Array.from(body.children).map(el => el.outerHTML).join('');
    return validHtml;
  }

  if (loading) {
    return <h1>Loading...</h1>; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h2>Hugging Face A.I. Recommended Menu:</h2>
      <div className="output-recipe" dangerouslySetInnerHTML={{ __html: responseData }} />
    </>
  );
}

export default HuggingFaceFetch;
