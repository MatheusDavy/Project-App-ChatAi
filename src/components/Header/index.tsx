import { Text, View } from "react-native";
import { styles, stylesButton, stylesDetail } from "./styles";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "@/src/styles/themes";
import { router } from "expo-router";
import { useState } from "react";

type Props = {
  text: string
  color?: string
}

const Header = ({
  text,
  color = THEME.COLORS.SECONDARY
}: Props) => {
  const [detailsSizes, setDetailsSize] = useState({
    width: 0,
    height: 0
  });

  return (
    <View
      style={{...styles.container}}
    >
      <TouchableOpacity
        style={stylesButton.container}
        onPress={() => {
          router.replace('/functionalities');
        }}
      >
        <Ionicons name="arrow-back" color={THEME.FONTS.COLORS.PRIMARY} size={20} />
      </TouchableOpacity>

      <View
        onLayout={(event)=> {
          const { width, height } = event.nativeEvent.layout;
          setDetailsSize({
            width,
            height
          });
        }}
        style={{
          ...stylesDetail.container,
          backgroundColor: color,
          transform: [
            { translateX: -detailsSizes.width / 2 },
            { translateY: detailsSizes.height / 2 }
          ]
        }}
      >
        <Text style={stylesDetail.text}>
          {text}
        </Text>
      </View>
    </View>
  )
}

export { Header };