import { View, Text, Image, TouchableOpacity } from "react-native";

import { router } from "expo-router";

import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { SelectLanguage } from "@/src/components/ChooseLanguage";
import { useTranslation } from 'react-i18next';
import { ScrollView } from "moti";

const HomeView = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{t('home.welcome')}</Text>

        <Image
          style={styles.logo}
          source={require("@/src/assets/images/logo.png")}
        />

        <View style={{ marginTop: 30, marginBottom: 30 }}>
          <Text style={styles.text}>{t('home.title')}</Text>
          <Text style={styles.subtext}>{t('home.description')}</Text>
        </View>

        <SelectLanguage />

        <TouchableOpacity
          style={styles.linkWrapper}
          onPress={() => {
            router.replace("/functionalities");
          }}
        >
          <Text style={styles.linkText}>{t('home.button')}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeView;
