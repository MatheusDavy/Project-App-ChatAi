import { useLogic } from "./logic";

import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { Header } from "@/src/components/Header";
import { TypingAnimation } from "react-native-typing-animation";
import { MotiView } from "moti";

import { THEME } from "@/src/styles/themes";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";
import { getLanguageFlag } from "@/src/translations";

const ConversationsPage = () => {
  const { t, i18n } = useTranslation();
  const { data, methods } = useLogic();

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View>
            <Header text={t("translations.header")} />
            <View style={styles.inputContainer}>
              <Image
                source={require("@/src/assets/images/robot-02.png")}
                style={styles.image}
              />
              <TextInput
                value={data.description} // Certifique-se de que isso não seja alterado na lógica ao traduzir
                onChangeText={methods.setDescription}
                style={styles.input}
                placeholderTextColor={THEME.FONTS.COLORS.SECONDARY}
                placeholder={t("translations.inputLabel")}
                multiline={true}
                numberOfLines={!data.description ? 1 : 2}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            {(data.result || data.isLoadingResponse) && (
              <MotiView
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0 }}
              >
                <Image
                  style={styles.flag}
                  source={getLanguageFlag[i18n.language]}
                />

                <ScrollView style={{ marginBottom: 10 }}>
                  {data.isLoadingResponse && (
                    <TypingAnimation
                      dotColor="white"
                      dotMargin={7}
                      dotAmplitude={3}
                      dotSpeed={0.15}
                      dotRadius={2.5}
                      dotX={12}
                      dotY={6}
                    />
                  )}

                  <Text style={styles.output}>
                    {data.result || "Response..."}
                  </Text>
                </ScrollView>

                <View style={styles.options}>
                  <TouchableOpacity onPress={methods.convertTextToVoice}>
                    <Ionicons
                      name="volume-high-outline"
                      color={THEME.FONTS.COLORS.PRIMARY}
                      size={30}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={methods.copyTextToClipboard}>
                    <Ionicons
                      name="copy-outline"
                      color={THEME.FONTS.COLORS.SECONDARY}
                      size={30}
                    />
                  </TouchableOpacity>
                </View>
              </MotiView>
            )}

            <TouchableOpacity
              style={styles.translateButton}
              onPress={methods.getResponse}
              disabled={data.isLoadingResponse}
            >
              <Text style={styles.buttonText}>
                {t("translations.button") || "Translate"}
              </Text>
              <Ionicons
                name="language-outline"
                size={25}
                color={THEME.FONTS.COLORS.PRIMARY}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ConversationsPage;
