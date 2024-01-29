import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

const langchainLLM = new ChatGoogleGenerativeAI();

export async function generateAiContext(message: string) {
  try {
    // Change this {history} according to the context, you want to generate your content
    const history = "https://www.youtube.com/@harkirat1, this is my youtube channel.I am a tech youtuber"
    const langchainTextResponse = await langchainLLM.invoke([['human', history + message]]);
    const langchainOutput = langchainTextResponse.content;
    return langchainOutput;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while generating AI context.');
  }
}
