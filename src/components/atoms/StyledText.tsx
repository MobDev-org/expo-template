import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
    const fontFamily = {
        fontFamily: 'space-mono',
    };

    return <Text {...props} style={[props.style, fontFamily]} />;
}
