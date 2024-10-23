import { useRef } from "react";
import { Image, Text, View } from "react-native";

import { StoreRootState } from "@/src/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentLanguage } from "@/src/store/reducers/select-language";

import { getLanguageFlag } from "@/src/translations";
import { Picker } from "@react-native-picker/picker";

import { styles } from "./styles";
import { useTranslation } from "react-i18next";

const SelectLanguage = () => {
  const { t, i18n } = useTranslation();
  const pickerRef = useRef(null);

  if (!i18n.language) {
    i18n.changeLanguage('pt');
  }

  const setSelectedLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t('home.label')}</Text>
      <View style={{
        gap: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
        <Image style={styles.flag} source={getLanguageFlag[i18n.language]} />
        <Picker
          style={styles.picker}
          ref={pickerRef}
          mode="dialog"
          selectedValue={i18n.language}
          onValueChange={(itemValue) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item style={styles.pickerItem} label={t("languages.pt")} value="pt" />
          <Picker.Item style={styles.pickerItem} label={t("languages.en")} value="en" />
          <Picker.Item style={styles.pickerItem} label={t("languages.es")} value="es" />
          <Picker.Item style={styles.pickerItem} label={t("languages.fr")} value="fr" />
        </Picker>
      </View>
    </View>
  );
};

export { SelectLanguage };
