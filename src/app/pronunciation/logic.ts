import { useEffect, useState } from "react";

import { Audio, InterruptionModeIOS, InterruptionModeAndroid } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import { useDispatch } from "react-redux";
import { showToast } from "@/src/store/reducers/toast";

const RECORDING_OPTIONS = {
  android: {
    extension: '.m4a',
    outputFormat: Audio.AndroidOutputFormat.MPEG_4,
    audioEncoder: Audio.AndroidAudioEncoder.AAC,
    sampleRate: 44100,
    numberOfChannels: 2,
    bitRate: 128000,
  },
  ios: {
    extension: '.wav',
    audioQuality: Audio.IOSAudioQuality.HIGH,
    sampleRate: 44100,
    numberOfChannels: 1,
    bitRate: 128000,
    linearPCMBitDepth: 16,
    linearPCMIsBigEndian: false,
    linearPCMIsFloat: false,
  },
  web: {}
};

const useLogic = () => {
  const dispatch = useDispatch();

  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [edit, setEdit] = useState(true);

  const getResponse = async () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  const recordingStart = async () => {
    const { granted } = await Audio.getPermissionsAsync();

    if (edit) {
      return dispatch(
        showToast({
          description: 'Você precisa adicionar um texto de referência para iniciar',
          type: 'error'
        })
      )
    }

    if (granted) {
      try {
        const { recording } = await Audio.Recording.createAsync(RECORDING_OPTIONS);
        setRecording(recording);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const recordingStop = async () => {
    try {
      await recording?.stopAndUnloadAsync();
      const recordingFileUri = recording?.getURI();

      if (recordingFileUri) {
        const base64File = await FileSystem.readAsStringAsync(recordingFileUri, { encoding: FileSystem?.EncodingType?.Base64 });
        await FileSystem.deleteAsync(recordingFileUri);

       getResponse()

        setRecording(null);
      } else {
        console.log('Não foi possível gravar o áudio')
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Audio
      .requestPermissionsAsync()
      .then((granted: any) => {
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
      isLoading,
      description,
      recording
    },
    methods: {
      setEdit,
      recordingStart,
      recordingStop,
      setDescription,
    }
  }
}

export { useLogic };
