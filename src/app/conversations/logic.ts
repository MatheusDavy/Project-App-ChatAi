import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { showToast } from "@/src/store/reducers/toast";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const genAI = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_GOOGLE_GEMINI_AI!);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const useLogic = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const [isLoadingResponse, setIsLoadingResponse] = useState(false);
  const [conversations, setConversations] = useState<Array<string>>([
    t('conversations.initial_talk')
  ]);

  const getResponse = async () => {
    setIsLoadingResponse(true);
    setConversations((prev) => [...prev, description]);
    setDescription('');

    const prompt = `
      Respond to the following statement: "${description}" 
      Simulate a natural, human-like conversation, maintaining a balanced tone (neither too formal nor too casual).
      Ensure the response is concise, with a maximum of 400 characters, and written in code language as '${i18n.language}'.
      If the input does not resemble a conversation or is incoherent, respond with "I’m sorry, I didn’t quite understand that. Could you clarify?" in code language as '${i18n.language}' 
      Focus on providing thoughtful and relevant insights.
    `;

    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      setConversations((prev) => [...prev, text]);
    } catch (error) {
      dispatch(
        showToast({
          description: "Não foi possivel obter uma resposta",
          type: "error",
        })
      );
    }

    setIsLoadingResponse(false);
  };

  const convertTextToVoice = (text: string) => {
    console.log(text);
  };

  return {
    data: {
      isLoadingResponse,
      description,
      conversations,
    },
    methods: {
      getResponse,
      setDescription,
      convertTextToVoice,
    },
  };
};

export { useLogic };
