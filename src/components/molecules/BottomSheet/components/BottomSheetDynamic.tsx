import { BottomSheetView, useBottomSheetDynamicSnapPoints } from '@gorhom/bottom-sheet';
import React, { forwardRef, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BottomSheet, { BottomSheetProps, BottomSheetRef } from '../index';

// import Text from '@/components/atoms/Text';

const BottomSheetDynamic = forwardRef<BottomSheetRef | undefined, BottomSheetProps>((props, ref) => {
    const initialSnapPoints = useMemo(
        () => (props.snapPoints ? ['CONTENT_HEIGHT', ...props.snapPoints] : ['CONTENT_HEIGHT']),
        [props.snapPoints],
    );

    // -----------------------------------------------------------
    const { animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout } =
        useBottomSheetDynamicSnapPoints(initialSnapPoints);

    // -----------------------------------------------------------
    return (
        <BottomSheet
            snapPoints={animatedSnapPoints}
            handleHeight={animatedHandleHeight}
            contentHeight={animatedContentHeight}
            ref={ref}
            {...props}>
            <BottomSheetView onLayout={handleContentLayout}>{props.children || renderFakeContent()}</BottomSheetView>
        </BottomSheet>
    );
});

BottomSheetDynamic.displayName = 'BottomSheetDynamic';
export default BottomSheetDynamic;

const styles = StyleSheet.create({
    contentContainer: {
        height: 300,
        alignItems: 'center',
    },
});

const renderFakeContent = () => {
    return (
        <View style={styles.contentContainer}>
            <Text style={{ textAlign: 'center' }}>
                Add some child components and this bottom sheet will adjust automatically to children height
            </Text>
        </View>
    );
};
