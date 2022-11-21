import Text, {IRNTextProps} from '@freakycoder/react-native-custom-text';

import React from 'react';

interface ITextWrapperProps extends IRNTextProps {
  color?: string;
  fontFamily?: string;
  children?: React.ReactNode;
}

const TextWrapper: React.FC<ITextWrapperProps> = ({
  fontFamily = 'Helvetica',
  color = '#fff',
  children,
  ...rest
}) => {
  return (
    <Text fontFamily={fontFamily} color={color} {...rest}>
      {children}
    </Text>
  );
};

export default TextWrapper;
