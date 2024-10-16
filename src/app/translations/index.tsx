import { useRef } from "react";

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

import LottieView from "lottie-react-native";
import { Header } from "@/src/components/Header";
import { TypingAnimation } from "react-native-typing-animation";
import { MotiView } from "moti";

import { THEME } from "@/src/styles/themes";
import { FONT_FAMILY } from "@/src/styles";
import { styles } from "./styles";

const ConversationsPage = () => {
  const { data, methods } = useLogic();

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Header text="Traduza qualquer texto" />

        <Image
          source={require("@/src/assets/images/robot-02.png")}
          style={styles.image}
        />

        <TextInput
          value={data.description}
          onChangeText={methods.setDescription}
          style={styles.input}
          placeholderTextColor={THEME.FONTS.COLORS.SECONDARY}
          placeholder="Say anything..."
          multiline={true}
          numberOfLines={!data.description ? 1 : 2}
        />

        <TouchableOpacity
          style={styles.send}
          onPress={methods.getResponse}
          disabled={data.isLoadingResponse}
        >
          <Text
            style={{
              fontSize: 18,
              color: THEME.FONTS.COLORS.PRIMARY,
              fontFamily: FONT_FAMILY.poppinsBold,
            }}
          >
            Tranduzir
          </Text>
          <Ionicons
            name="language-outline"
            size={25}
            color={THEME.FONTS.COLORS.PRIMARY}
          />
        </TouchableOpacity>

        {(data.result || data.isLoadingResponse) && (
          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 500 }}
            style={styles.responseContainer}
          >
            <ScrollView
              style={{
                paddingTop: 20,
                paddingHorizontal: 20,
                width: "100%",
                display: "flex",
              }}
            >
              {data.isLoadingResponse && (
                <TypingAnimation
                  style={styles.dotsTyping}
                  dotColor="white"
                  dotMargin={7}
                  dotAmplitude={3}
                  dotSpeed={0.15}
                  dotRadius={2.5}
                  dotX={12}
                  dotY={6}
                />
              )}
              <Text style={styles.responseResult}>
                {data.result}
              </Text>
            </ScrollView>

              <View style={styles.responseActions}>
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ConversationsPage;
