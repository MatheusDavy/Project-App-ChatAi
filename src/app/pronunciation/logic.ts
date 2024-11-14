import { useEffect, useState } from "react";

import { Audio, InterruptionModeIOS, InterruptionModeAndroid } from "expo-av";
import * as Speench from "expo-speech";
import { useDispatch } from "react-redux";
import * as FileSystem from "expo-file-system";

import { showToast } from "@/src/store/reducers/toast";
import { Platform } from "react-native";
import { useTranslation } from "react-i18next";
import { getLanguageCode } from "@/src/translations";

const useLogic = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [edit, setEdit] = useState(true);
  const [result, setResult] = useState<any>(null);

  const getResponse = async (base64File: string) => {
    setIsLoading(true);

    try {
      const apiKey = process.env.EXPO_PUBLIC_GCP_SPEECH_TO_TEXT_KEY;
      const endpoint = `https://speech.googleapis.com/v1/speech:recognize?key=${apiKey}`;

      const payload = JSON.stringify({
        config: {
          languageCode: getLanguageCode[i18n.language],
          encoding: Platform.OS === "ios" ? "LINEAR16" : "AMR_WB",
          sampleRateHertz: Platform.OS === "ios" ? 44100 : 16000,
        },
        audio: {
          content: base64File,
        },
      });

      const transcriptResponse = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-goog-api-key": apiKey!,
        },
        body: payload,
      });

      const data = await transcriptResponse.json();
      const response = data.results[0].alternatives[0].transcript || "";

      if (response) {
        compareResults(response);
      } else {
        dispatch(
          showToast({
            description: t("pronunciation.pronounceErrorRequest"),
            type: "error",
          })
        );
      }
    } catch (error) {
      console.log("error transcript: " + error);
      dispatch(
        showToast({
          description: t("pronunciation.pronounceErrorRequest"),
          type: "error",
        })
      );
    }

    setIsLoading(false);
  };

  const compareResults = async (text: string) => {
    const mainWords = description.replace(/\s+/g, ' ').replace(/'/g, '').trim().toLocaleLowerCase().split(" ");
    const comparisonWords = text.toLocaleLowerCase().replace(/'/g, '').split(" ");

    let result = [];

    for (let i = 0; i < mainWords.length; i++) {
      if (mainWords[i] !== comparisonWords[i]) {
        result.push({ word: mainWords[i], isDifferent: true });
      } else {
        result.push({ word: mainWords[i], isDifferent: false });
      }
    }

    return setResult(result);
  };

  const recordingStart = async () => {
    const { granted } = await Audio.getPermissionsAsync();

    if (edit) {
      return dispatch(
        showToast({
          description: t("pronunciation.pronounceErrorEmpty"),
          type: "error",
        })
      );
    }

    if (granted) {
      try {
        const { recording } = await Audio.Recording.createAsync({
          ...Audio.RecordingOptionsPresets.HIGH_QUALITY,
          android: {
            extension: ".amr",
            outputFormat: Audio.AndroidOutputFormat.AMR_WB,
            audioEncoder: Audio.AndroidAudioEncoder.AMR_WB,
            sampleRate: 16000,
            numberOfChannels: 1,
            bitRate: 128000,
          },
          ios: {
            extension: ".wav",
            audioQuality: Audio.IOSAudioQuality.HIGH,
            sampleRate: 44100,
            numberOfChannels: 1,
            bitRate: 128000,
            linearPCMBitDepth: 16,
            linearPCMIsBigEndian: false,
            linearPCMIsFloat: false,
          },
        });
        setRecording(recording);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const recordingStop = async () => {
    try {
      await recording?.stopAndUnloadAsync();
      const recordingFileUri = recording?.getURI();

      if (recordingFileUri) {
        const base64File = await FileSystem.readAsStringAsync(
          recordingFileUri,
          { encoding: FileSystem?.EncodingType?.Base64 }
        );
        await FileSystem.deleteAsync(recordingFileUri);

        setRecording(null);
        getResponse(base64File);
      } else {
        showToast({
          description: t("pronunciation.pronounceErrorRequest"),
          type: "error",
        });
      }
    } catch (error) {
      console.log("Conversion Error: " + error);
    }
  };

  const textToVoice = async (text: string) => {
    await Speench.stop();
    Speench.speak(text, {
      language: getLanguageCode[i18n.language],
      pitch: 1,
      rate: 0.5,
      volume: 1.0
    });
  };

  const handleSetEdit = () => {
    if (
      description.includes(",") ||
      description.includes(".") ||
      !description
    ) {
      dispatch(
        showToast({
          description: t("pronunciation.pronounceInvalidDescription"),
          type: "info",
        })
      );
      setEdit(true);
    } else {
      setEdit((prev) => !prev);
    }
  };

  useEffect(() => {
    Audio.requestPermissionsAsync().then((granted: any) => {
      if (granted) {
        Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          interruptionModeIOS: InterruptionModeIOS.DoNotMix,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
          playThroughEarpieceAndroid: true,
        });
      }
    });
  }, []);

  return {
    data: {
      edit,
      result,
      isLoading,
      description,
      recording,
    },
    methods: {
      handleSetEdit,
      recordingStart,
      recordingStop,
      setDescription,
      textToVoice,
      setResult,
    },
  };
};

export { useLogic };
