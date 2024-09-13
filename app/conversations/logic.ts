import { useEffect, useState } from "react";

import { Alert } from "react-native";


const CHAT_GPD_API_KEY = process.env.CHAT_GPD_API_KEY;

const useLogic = () => {
  const [description, setDescription] = useState('');
  const [isLoadingResponse, setIsLoadingResponse] = useState(false);
  const [conversations, setConversations] = useState<Array<string>>([
    'Hi, what do you talk about?',
    'Hi, what do you talk about?',
    'Hi, what do you talk about?',
    'Hi, what do you talk about?',
    'Hi, what do you talk about?',
    'Hi, what do you talk about?',
    'Hi, what do you talk about?',
    'Hi, what do you talk about?',
    'Hi, what do you talk about?','Hi, what do you talk about?',
    'Hi, what do you talk about?',
    'Hi, what do you talk about?',
    'Hi, what do you talk about?',
    'Hi, what do you talk about?',
    'Hi, what do you talk about?',
  ])

  const getResponse = async () => {
    const prompt = `
      Awser this '${description}' simulating a real conversation as a real person (not so informal and not so formal)
      And give me de response in ${'EN'}
    `;

    setIsLoadingResponse(true);
    setConversations(prev => ([...prev, description]));

    // await fetch("https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions", {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${CHAT_GPD_API_KEY}`
    //   },
    //   body: JSON.stringify({
    //     prompt,
    //     temperature: 0.22,
    //     max_tokens: 500,
    //     top_p: 1,
    //     frequency_penalty: 0,
    //     presence_penalty: 0,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch(() => Alert.alert('Erro', 'Não foi possível buscar as tags.'))

    const newConversation = "Teste Milenar dos Milênios";

    setConversations(prev => ([...prev, newConversation]));

    setIsLoadingResponse(false);

    setDescription('');
  }

  const convertTextToVoice = (text: string) => {
    console.log(text);
  }

  return {
    data: {
      isLoadingResponse,
      description,
      conversations
    },
    methods: {
      getResponse,
      setDescription,
      convertTextToVoice
    }
  }
}

export { useLogic };
