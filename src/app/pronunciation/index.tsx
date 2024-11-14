import { memo, useEffect } from "react";
import { useLogic } from "./logic";

import {
  SafeAreaView,
  View,
  Animated,
  Easing,
  TouchableOpacity,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Header } from "@/src/components/Header";

import {
  styles,
  stylesMarbles,
  stylesModal,
  stylesPopup,
  stylesPulse,
} from "./styles";
import { THEME } from "@/src/styles/themes";

import { MarblesProps, ModalProps } from "./types";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { MotiImage } from "moti";
import { useTranslation } from "react-i18next";

const PronunciationPage = () => {
  const { t } = useTranslation();
  const { data, methods } = useLogic();

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Header
          text={
            data.recording
              ? t("pronunciation.header_listening")
              : t("pronunciation.header")
          }
          color={data.recording ? THEME.COLORS.PRIMARY : THEME.COLORS.SECONDARY}
        />
        <Marbles isRecordind={data.isLoading} />

        <View
          style={{
            opacity: !data.isLoading ? 1 : 0,
          }}
        >
          <View style={styles.inputContainer}>
            <TextInput
              value={data.description}
              onChangeText={methods.setDescription}
              style={styles.input}
              placeholderTextColor={THEME.FONTS.COLORS.SECONDARY}
              placeholder={t("pronunciation.inputLabel")}
              numberOfLines={!data.description ? 1 : 2}
              readOnly={!data.edit}
            />

            <TouchableOpacity
              style={styles.inputEdit}
              onPress={methods.handleSetEdit}
            >
              <Ionicons
                style={{ position: "relative", zIndex: 10 }}
                name={data.edit ? "checkmark" : "create-outline"}
                size={30}
                color={THEME.FONTS.COLORS.PRIMARY}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.actionsContainer}>
            <TouchableOpacity
              style={styles.actionsButton}
              onPressIn={methods.recordingStart}
              onPressOut={methods.recordingStop}
              activeOpacity={1}
              disabled={data.isLoading}
            >
              <Ionicons
                style={{ position: "relative", zIndex: 10 }}
                name="mic-outline"
                size={50}
                color={THEME.FONTS.COLORS.PRIMARY}
              />
            </TouchableOpacity>
            {data.recording && <PulseRecording />}
          </View>
        </View>
      </KeyboardAvoidingView>

      {data.result && (
        <ModalResult
          result={data.result}
          closeModal={() => {
            methods.setResult(null);
          }}
        />
      )}
    </SafeAreaView>
  );
};

const ModalResult = ({ result, closeModal }: ModalProps) => {
  const { t } = useTranslation();
  const { methods } = useLogic();

  const hasNoErrors = result.filter((item: any) => item.isDifferent === true);

  return (
    <SafeAreaView style={stylesModal.container}>
      <TouchableOpacity style={stylesModal.close} onPress={closeModal}>
        <Ionicons
          name="arrow-back"
          color={THEME.FONTS.COLORS.PRIMARY}
          size={20}
        />
      </TouchableOpacity>
      <View style={stylesModal.text}>
        {result.map((item: any, index: number) => {
          if (item.isDifferent) {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  methods.textToVoice(item.word);
                }}
              >
                <Text style={stylesModal.differentWord}>{item.word} </Text>
              </TouchableOpacity>
            );
          } else {
            return (
              <Text key={index} style={stylesModal.normalWord}>
                {item.word + " "}
              </Text>
            );
          }
        })}
      </View>

      <View style={stylesPopup.container}>
        <Ionicons
          name="color-wand-outline"
          size={30}
          color={THEME.FONTS.COLORS.PRIMARY}
        />
        <Text style={stylesPopup.text}>
          {!hasNoErrors.length
            ? t("pronunciation.congratulations")
            : t("pronunciation.incorrect")}
        </Text>
      </View>

      {!hasNoErrors.length && (
        <LottieView
          source={require("@/src/assets/lotties/confetti.json")}
          autoPlay
          loop={false}
          style={stylesModal.animation}
          renderMode={"SOFTWARE"}
        />
      )}
    </SafeAreaView>
  );
};

const Marbles = memo(function Marbles({ isRecordind }: MarblesProps) {
  return (
    <MotiImage
      key={isRecordind ? "RECORDING" : "STATIC"}
      source={require("@/src/assets/images/marble-listening.png")}
      style={stylesMarbles.marbles}
      from={{
        scale: 1,
        rotate: "0deg",
      }}
      animate={{
        rotate: "360deg",
        scale: isRecordind ? 1.3 : 1,
      }}
      transition={{
        loop: true,
        type: "timing",
        duration: isRecordind ? 2000 : 10000,
      }}
    />
  );
});

const PulseRecording = memo(function PulseRecording() {
  const opacityValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <Animated.Image
      source={require("@/src/assets/images/pulse-record.png")}
      style={{
        ...stylesPulse.circles,
        opacity: opacityValue,
        transform: [{ translateX: -65 }, { translateY: -65 }],
      }}
    />
  );
});

export default PronunciationPage;
