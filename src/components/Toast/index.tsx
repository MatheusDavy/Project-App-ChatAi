import { Text } from 'react-native';
import Animated, { SlideInUp, SlideOutUp } from 'react-native-reanimated';

import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { StoreRootState } from '@/src/store/store';
import { THEME } from '@/src/styles/themes';
import { useEffect, useState } from 'react';
import { closeToast } from '@/src/store/reducers/toast';

export function Toast() {
  const dispatch = useDispatch();
  const { id, description, type } = useSelector((store: StoreRootState) => store.toast)

  const bg = {
    'info': THEME.COLORS.PRIMARY,
    'error': THEME.COLORS.RED
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(closeToast({}))
    }, 4000)
  }, [id])

  return (
    <>
      {id && (
        <Animated.View
          style={{
            ...styles.container,
            backgroundColor: bg[type]
          }}
          entering={SlideInUp.duration(700)}
          exiting={SlideOutUp.duration(700)}
        >
          <Text style={styles.text}>
            {description}
          </Text>
        </Animated.View>
      )}
    </>
  );
}