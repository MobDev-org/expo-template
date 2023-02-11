// import React, {FC, memo} from 'react';
// import {ColorValue, ViewStyle} from 'react-native';
// import {SvgProps} from 'react-native-svg';

// // ------------------ Simple Icons ------------------

// import Clock from 'assets/icons/app_icons/clock.svg';
// import Barcode from 'assets/icons/app_icons/barcode.svg';

// // ------------------ Chevron icons ------------------
// import ChevronDown from 'assets/icons/chevron_icon/chevron-down.svg';
// import ChevronUp from 'assets/icons/chevron_icon/chevron-up.svg';

// // ------------------ Icons ------------------

// export type AppIconNames =
//   | 'clock'
//   | 'barcode';

// const components: {[key in AppIconNames]: React.FC<SvgProps>} = {
//   clock: Clock,
//   barcode: Barcode,
// };

// export type AppIconProps = {
//   name: AppIconNames;
//   size?: number;
//   color?: ColorValue;
//   style?: ViewStyle;
// };

// const AppIcon: FC<AppIconProps> = ({name, size, ...props}) => {
//   const IconFactory = components[name];
//   return (
//     <IconFactory testID={`${name}Icon`} width={size} height={size} {...props} />
//   );
// };

// AppIcon.defaultProps = {
//   size: 24,
//   color: 'black',
// };

// export default memo(AppIcon);
