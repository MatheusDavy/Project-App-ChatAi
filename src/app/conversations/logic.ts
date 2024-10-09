import { useState } from "react";

const useLogic = () => {
  const [description, setDescription] = useState('');
  const [isLoadingResponse, setIsLoadingResponse] = useState(false);
  const [conversations, setConversations] = useState<Array<string>>(['Hi, what do you talk about?'])

  const getResponse = async () => {
    const prompt = `
      Awser this '${description}' simulating a real conversation as a real person (not so informal and not so formal)
      And give me de response in ${'EN'}
    `;

    setIsLoadingResponse(true);
    setConversations(prev => ([...prev, description]));


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
