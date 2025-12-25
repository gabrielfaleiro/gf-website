
import { GoogleGenAI, Type } from "@google/genai";

// Always use a named parameter for apiKey and use process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePostContent = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Genera un post de blog creativo sobre: "${topic}". El idioma debe ser Español.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            excerpt: { type: Type.STRING },
            content: { type: Type.STRING },
            category: { type: Type.STRING },
          },
          required: ["title", "excerpt", "content", "category"],
        },
      },
    });

    // The simplest way to get the text output is by accessing the .text property.
    if (response.text) {
      return JSON.parse(response.text.trim());
    }
    throw new Error("No se pudo generar el contenido");
  } catch (error) {
    console.error("Error generating post content:", error);
    throw error;
  }
};
