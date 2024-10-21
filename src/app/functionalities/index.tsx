import { router } from "expo-router";
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';

import { THEME } from "@/src/styles/themes";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";
import { Header } from "@/src/components/Header";

const FunctionalitiesPage = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView>
      <Header navigate="/" />
      <ScrollView
        contentContainerStyle={styles.container}
      >

        <Image
          style={styles.logo}
          source={require('@/src/assets/images/robot-01.png')}
        />
        <Text
          style={{
            ...styles.title,
            marginTop: 40,
          }}
        >
          {t('functionalities.title_one')}
        </Text>
        <Text style={styles.title}>
        {t('functionalities.title_two')}
        </Text>

        <View style={styles.contentWrapper}>
          <TouchableOpacity
            style={styles.contentCard}
            onPress={() => {
              router.replace('/conversations')
            }}
          >
            <Ionicons name="chatbox-ellipses-outline" size={40} color={THEME.COLORS.PRIMARY} />
            <Text style={styles.contentCardText}>
              {t('functionalities.chat')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contentCard}
            onPress={() => {
              router.replace('/pronunciation')
            }}
          >
            <Ionicons name="happy-outline" size={40} color={THEME.COLORS.PRIMARY} />
            <Text style={styles.contentCardText}>
              {t('functionalities.pronounce')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contentCard}
            onPress={() => {
              router.replace('/translations')
            }}
          >
            <Ionicons name="globe-outline" size={40} color={THEME.COLORS.PRIMARY} />
            <Text style={styles.contentCardText}>
              {t('functionalities.translate')}
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default FunctionalitiesPage;