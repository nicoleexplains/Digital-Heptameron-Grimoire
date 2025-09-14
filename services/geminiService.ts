import { GoogleGenAI } from "@google/genai";
import { grimoireData, generalInfo, hourlyAngels } from '../data/grimoireData';
import { GEMINI_MODEL } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

// FIX: Create a serializable version of grimoireData to avoid stringifying JSX elements.
const serializableGrimoireData = grimoireData.map(day => {
    const { sigil, ...restOfAngel } = day.angel;
    return {
        ...day,
        angel: {
            ...restOfAngel,
            sigil: `[Sigil for ${day.angel.name}]` // Replace JSX with a string description
        }
    };
});


// Combine all grimoire data into a single string context
const fullContext = `
Introduction: ${JSON.stringify(generalInfo.introduction.content)}
Circle Composition: ${JSON.stringify(generalInfo.circle_composition.content)}
Consecrations: ${JSON.stringify(generalInfo.consecrations.content)}
Daily Information: ${JSON.stringify(serializableGrimoireData)}
Hourly Angels: ${JSON.stringify(hourlyAngels)}
`;

const systemInstruction = `You are an expert scholar of the 'Heptameron of Peter de Abano'. Your knowledge is strictly limited to the text provided in the context. Answer the user's question based ONLY on the provided context. Do not invent information, speculate, or draw from outside sources. If the answer is not in the context, state that the information is not found in this version of the Heptameron. Present the answer clearly and concisely.`;

export async function generateResponse(prompt: string): Promise<string> {
  try {
    const content = `Context:\n---\n${fullContext}\n---\n\nUser Question: ${prompt}`;

    const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: content,
        config: {
          systemInstruction: systemInstruction,
        }
    });

    return response.text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw new Error('Failed to generate response from Gemini API.');
  }
}
