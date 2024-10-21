import { useLogic } from "./logic";

import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { Header } from "@/src/components/Header";

import { useRef } from "react";
import { TypingAnimation } from "react-native-typing-animation";

import { THEME } from "@/src/styles/themes";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";

const ConversationsPage = () => {
  const { t } = useTranslation();
  const { data, methods } = useLogic();

  const scrollConversations = useRef(null);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Header text={t('conversations.header')} />

        <ScrollView
          ref={scrollConversations}
          showsVerticalScrollIndicator={false}
          style={styles.conversationsContainer}
          onContentSizeChange={() => {
            if (scrollConversations.current) {
              scrollConversations.current?.scrollToEnd({ animated: true });
            }
          }}
        >
          {data.conversations.map((data, index) => (
            <View
              style={{
                ...styles.consversationMessagesWrapper,
                marginTop: index === 0 ? 30 : 0,
                alignSelf: index % 2 !== 0 ? "flex-end" : "flex-start",
              }}
            >
              {index % 2 === 0 && (
                <Image
                  source={require("@/src/assets/images/robot-chat-profile.png")}
                />
              )}
              <TouchableOpacity
                key={index}
                onPress={() => {
                  methods.convertTextToVoice(data);
                }}
                style={{
                  borderRadius: 10,
                  backgroundColor:
                    index % 2 !== 0
                      ? THEME.COLORS.QUINARY
                      : THEME.COLORS.TERTIARY,
                }}
              >
                <Text
                  style={{
                    ...styles.conversationMessages,
                    color:
                      index % 2 !== 0
                        ? THEME.FONTS.COLORS.TERTIARY
                        : THEME.FONTS.COLORS.PRIMARY,
                  }}
                >
                  {data}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
          {data.isLoadingResponse && (
            <View
              style={{
                ...styles.consversationMessagesWrapper,
                alignSelf: "flex-start",
              }}
            >
              <Image
                source={require("@/src/assets/images/robot-chat-profile.png")}
              />
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  backgroundColor: THEME.COLORS.QUINARY,
                }}
              >
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
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            value={data.description}
            onChangeText={methods.setDescription}
            style={styles.input}
            placeholderTextColor={THEME.FONTS.COLORS.SECONDARY}
            placeholder={t('conversations.inputLabel')}
            multiline={true}
            numberOfLines={!data.description ? 1 : 2}
          />

          <TouchableOpacity
            style={styles.send}
            onPress={methods.getResponse}
            disabled={data.isLoadingResponse}
          >
            <Ionicons
              name="send-outline"
              size={25}
              style={{
                transform: [{ rotate: "-45deg" }, { translateX: 3 }],
              }}
              color={THEME.FONTS.COLORS.PRIMARY}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ConversationsPage;
