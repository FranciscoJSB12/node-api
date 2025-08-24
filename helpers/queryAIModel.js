import axios from "axios";

const AI_MODEL_KEY = process.env.AI_MODEL_KEY;

export async function queryAIModel(prompt) {
  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

  const dataToSend = {
    contents: [
      {
        parts: [
          {
            text: `#Rol: eres un asesor emocional para personas que se sienten tristes, te 
            encargas de entender sus problemas y brindar el apoyo emocional que necesiten impulsandolos
            a salir a adelante e incrementar su fe y confianza.
            #Este es el mensaje del usuario al que vas a apoyar: ${prompt}
            # Limita tus mensajes a 250 caracteres y siempre debes dar frases motivadora.
            `,
          },
        ],
      },
    ],
  };

  try {
    const response = await axios.post(url, dataToSend, {
      headers: {
        "X-goog-api-key": AI_MODEL_KEY,
      },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}
