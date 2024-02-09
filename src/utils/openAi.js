import OpenAI from "openai";
// import { OPEN_AI_KEY } from "../constants/Constants";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_AI_KEY,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});

async function opneAISearch(query) {
  const chatCompletion = await openai.chat.completions.create({
    messages: query,
    model: "gpt-3.5-turbo",
  });
  return chatCompletion;
}

export const  AISearch=async(query)=>{
  const chatCompletion = await openai.chat.completions.create({
    messages: query,
    model: "gpt-3.5-turbo",
  });
  return chatCompletion;
}

export default opneAISearch;
