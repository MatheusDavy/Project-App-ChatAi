import { Header } from "@/src/components/Header";
import { SafeAreaView, View, Animated, Easing, TouchableOpacity, TextInput, Text } from "react-native";
import { styles, stylesMarbles, stylesPulse } from "./styles";
import { memo, useEffect, useState } from "react";
import { MarblesProps } from "./types";
import { useLogic } from "./logic";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "@/src/styles/themes";

const PronunciationPage = () => {
  const { data, methods } = useLogic();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header
          text={data.recording ? 'Go ahead, I’m listening' : 'Let’s pronounce'}
          color={data.recording ? THEME.COLORS.PRIMARY : THEME.COLORS.SECONDARY}
        />
        <Marbles isRecordind={data.isLoading} />

        <View
          style={{
            opacity: !data.isLoading ? 1 : 0
          }}
        >
          <View style={styles.inputContainer}>
            <TextInput
              value={data.description}
              onChangeText={methods.setDescription}
              style={styles.input}
              placeholderTextColor={THEME.FONTS.COLORS.SECONDARY}
              placeholder="Type something to pronunce..."
              numberOfLines={1}
              readOnly={!data.edit}
            />

            <TouchableOpacity
              style={styles.inputEdit}
              onPress={() => {
                methods.setEdit(prev => !prev);
              }}
            >
              <Ionicons
                style={{ position: 'relative', zIndex: 10 }}
                name={data.edit ? 'checkmark' : 'create-outline'} size={30}
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
                style={{ position: 'relative', zIndex: 10 }}
                name="mic-outline" size={50}
                color={THEME.FONTS.COLORS.PRIMARY}
              />
            </TouchableOpacity>
            {data.recording && <PulseRecording />}
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const Marbles = memo(function Marbles({
  isRecordind
}: MarblesProps) {
  const spinValue = new Animated.Value(0)
  const pulseValue = new Animated.Value(1);

  useEffect(() => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 30000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    if (isRecordind) {
      Animated.loop(
        Animated.timing(pulseValue, {
          toValue: 1.3,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    }
  }, [isRecordind])

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  return (
    <Animated.Image
      source={require('@/src/assets/images/marble-listening.png')}
      style={{
        ...stylesMarbles.marbles,
        transform: [
          { rotate: rotate },
          { scale: isRecordind ? pulseValue : 1 }
        ]
      }}
    />
  )
})

const PulseRecording = memo(function PulseRecording() {
  const opacityValue = new Animated.Value(0)

  useEffect(() => {
    Animated.loop(
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [])

  return (
    <Animated.Image
      source={require('@/src/assets/images/pulse-record.png')}
      style={{
        ...stylesPulse.circles,
        opacity: opacityValue,
        transform: [
          { translateX: -65 },
          { translateY: -65 }
        ]
      }}
    />
  )
})

export default PronunciationPage;