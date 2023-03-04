import { useIsFocused } from '@react-navigation/native';
import { StatusBar, StatusBarProps } from 'expo-status-bar';

import { useAppSelector } from '@/store/hooks';

// By default it should follow the system theme, but if the user passes some custom props, it should use those
function FocusAwareStatusBar(props: StatusBarProps) {
    const { theme } = useAppSelector((state) => state.appSettings);
    const isFocused = useIsFocused();

    return isFocused ? (
        <StatusBar {...props} style={props.style ? props.style : theme === 'dark' ? 'light' : 'dark'} />
    ) : null;
}

export default FocusAwareStatusBar;
