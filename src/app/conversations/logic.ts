import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { showToast } from "@/src/store/reducers/toast";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import * as Speench from "expo-speech";
import { getLanguageCode } from "@/src/translations";

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
      Given the input: "${description}", respond as if you're having a real, human-like conversation about the topic provided.
      Use a tone that feels natural, avoiding extremes (neither too formal nor too casual).
      Write the response in ${i18n.language}, keeping it concise (max 250 characters).
      If the input lacks context or is unclear, return: "I’m sorry, I didn’t quite understand that. Could you clarify?" in ${i18n.language}.
      Focus on delivering relevant, thoughtful insights related to the input.
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

  const convertTextToVoice = async (text: string) => {
    await Speench.stop();
    Speench.speak(text, {
      language: getLanguageCode[i18n.language],
      pitch: 1,
      rate: 1,
    });
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
