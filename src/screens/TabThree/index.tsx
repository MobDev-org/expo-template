/* eslint-disable @typescript-eslint/no-empty-function */
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Button } from 'react-native-paper';

import FocusAwareStatusBar from '@/components/atoms/FocusAwareStatusBar/FocusAwareStatusBar';
import { Text } from '@/components/atoms/Themed';
import BottomSheet, { BottomSheetRef } from '@/components/molecules/BottomSheet';
import BottomSheetCombined from '@/components/molecules/BottomSheet/components/BottomSheetCombined';
import BottomSheetDynamic from '@/components/molecules/BottomSheet/components/BottomSheetDynamic';
import BottomSheetScrollable from '@/components/molecules/BottomSheet/components/BottomSheetScrollable';

export default function TabThreeScreen() {
    const sheetRef = useRef<BottomSheetRef>();
    const sheetWithInputRef = useRef<BottomSheetRef>();
    const sheetRefScrollable = useRef<BottomSheetRef>();
    const sheetRefDynamic = useRef<BottomSheetRef>();
    const combinedRefDynamic = useRef<BottomSheetRef>();

    return (
        <View style={styles.container}>
            <FocusAwareStatusBar style="dark" />
            <View style={styles.topTitle}>
                <Text style={styles.title}>Tab 3</Text>
            </View>
            <View>
                <Button style={styles.button} onPress={() => sheetRef?.current?.showModal()}>
                    Simple sheet
                </Button>

                <Button style={styles.button} onPress={() => sheetWithInputRef?.current?.showModal()}>
                    Sheet with input
                </Button>
                <Button style={styles.button} onPress={() => sheetRefScrollable?.current?.showModal()}>
                    Scrollable sheet
                </Button>

                <Button style={styles.button} onPress={() => sheetRefDynamic?.current?.showModal()}>
                    Dynamic sheet
                </Button>
                <Button style={styles.button} onPress={() => combinedRefDynamic?.current?.showModal()}>
                    Combined sheet
                </Button>
            </View>
            {/* SIMPLE */}
            <BottomSheet ref={sheetRef} snapPoints={['25%']}>
                <View style={styles.simpleSheet}>
                    <Text style={styles.title}>SIMPLE SHEET</Text>
                </View>
            </BottomSheet>

            {/* SCROLLABLE */}
            <BottomSheetScrollable ref={sheetRefScrollable} />
            {/* DYNAMIC */}
            <BottomSheetDynamic ref={sheetRefDynamic} />
            {/* INPUT */}
            <BottomSheet ref={sheetWithInputRef}>
                <BottomSheetTextInput placeholder="Input TEST" style={styles.bottomSheetInput} />
            </BottomSheet>

            {/* COMBINED */}
            <BottomSheetCombined ref={combinedRefDynamic}></BottomSheetCombined>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    topTitle: {
        marginBottom: 40,
    },
    button: {
        margin: 8,
    },
    bottomSheetInput: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 16,
        margin: 8,
    },
    simpleSheet: {
        margin: 24,
        alignItems: 'center',
    },
});
