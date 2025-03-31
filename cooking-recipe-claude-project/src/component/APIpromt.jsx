import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import { Bars} from 'react-loader-spinner'

function HuggingFaceFetch(prop) {
  const SYSTEM_PROMPT = "Your are an assistant that recives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You dont't need to use every ingredients they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your respone in markdown to make it easier to render to a web page";
  const API_TOKEN = import.meta.env.VITE_HUGGING_FACE_TOKEN;
  const MODEL = 'https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1';
  // console.log("API Token:", import.meta.env.VITE_HUGGING_FACE_TOKEN);

  const fetchData = async () => {
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
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    // console.log('API Response:', data);
    let generatedText = data[0]?.generated_text;
    generatedText = generatedText.replace(SYSTEM_PROMPT, '');
    // console.log("Generated text trim", generatedText)

    return generatedText;
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['data', prop.ingredient],
    queryFn: fetchData,
    refetchOnWindowFocus: false,
  });
    

  if (isLoading) {
    return <div className='loading'>
      <Bars 
        height="80"
        width="80"
        color="#000"
      />
    </div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Hugging Face A.I. Recommended Menu:</h2>
      <div className='output-recipe'>
        {data && <ReactMarkdown>{data}</ReactMarkdown>}
      </div>
    </div>
  );
}

export default HuggingFaceFetch;
