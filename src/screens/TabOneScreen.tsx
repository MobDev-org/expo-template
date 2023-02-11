import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { RootTabScreenProps } from '@/navigation/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Theme, setTheme } from '@/store/theme/slice';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    navigation;
    const theme = useAppSelector((state) => state.theme);
    const dispatch = useAppDispatch();
    const changeTheme = (theme: Theme) => dispatch(setTheme(theme));

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
            <Button title="Change theme" onPress={() => changeTheme(theme === 'dark' ? 'light' : 'dark')} />
            {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
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
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
