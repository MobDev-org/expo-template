import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

import store, { persistor } from '@/store';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <StoreProvider store={store}>
                <PersistGate persistor={persistor}>
                    <SafeAreaProvider>
                        <Navigation colorScheme={colorScheme} />
                        <StatusBar />
                    </SafeAreaProvider>
                </PersistGate>
            </StoreProvider>
        );
    }
}
