import React, { useMemo, forwardRef, useImperativeHandle } from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const GameInfoSheet = forwardRef(({ game }, ref) => {
    const theme = useTheme();
    const snapPoints = useMemo(() => ['60%', '90%'], []);
    const bottomSheetRef = React.useRef(null);
    const styles = StyleSheet.create({
        text: {
            color: theme.colors.onSurface,
        },
        infoPoint: {
            fontSize: 16,
        },
        pointHeader: {
            fontSize: 20, 
            marginVertical: 10
        }
    });
    useImperativeHandle(ref, () => ({
        open: () => bottomSheetRef.current?.present(),
        close: () => bottomSheetRef.current?.dismiss()
      }));
    if (!game) return null;
    return (
        <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{
            backgroundColor: theme.colors.surface,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
        }}
        handleIndicatorStyle={{
            backgroundColor: theme.colors.onSurfaceVariant,
        }}
        >
        <BottomSheetScrollView contentContainerStyle={{ paddingBottom: 32 }}>
            <View style={{
                    width: "60%", 
                    aspectRatio: 3/4,
                    marginTop: 20,
                    alignSelf: "center",
                }}>
                    <Image
                    source={game.cover}
                    style={{ width: '100%', height: "100%", borderRadius: 12,}}
                    resizeMode="cover"
                    />
                </View>
                <View style={{ padding: 16, }}>
                    <Text variant="bold" style={[styles.text, { fontSize: 26, marginBottom: 10}]}>{game.title}</Text>
                    <Text variant="bold" style={[styles.text, styles.infoPoint]}>Release Date: <Text variant="regular" style={styles.text}>{game.date}</Text></Text>
                    <Text variant="bold" style={[styles.text, styles.infoPoint]}>Rating: 
                        <Text variant="regular" style={styles.text}>
                            {` ${game.rating}`}
                        </Text>
                        <Icon name="star" color={theme.colors.onSurface} size={16}/>
                    </Text>
                    <Text variant="bold" style={styles.pointHeader}>Description:</Text>
                    <Text variant="regular" style={{fontSize: 16}}>{game.description}</Text>
                </View>
        </BottomSheetScrollView>
        </BottomSheetModal>
    );
});

export default GameInfoSheet;
