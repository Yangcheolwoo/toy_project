import React, { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';
import { getValue } from '@/util/StringUtils.ts';
import { Property } from 'csstype';

type TextProps = {
  width?: string | number;
  height?: string | number;
  textAlign?: Property.TextAlign;
  fontWeight?: Property.FontWeight;
  textDecoration?: Property.TextDecoration;
  fontSize?: Property.FontSize | number;
  textColor?: string;
  style?: CSSProperties;
};
export const Text = React.forwardRef<
  HTMLSpanElement,
  PropsWithChildren<TextProps> & HTMLAttributes<HTMLSpanElement>
>(
  (
    {
      width: widthValue,
      height: heightValue,
      textAlign = 'center',
      fontWeight,
      textDecoration,
      fontSize: fontSizeValue,
      textColor = 'black',
      children,
      style,
    },
    ref,
  ) => {
    const width = getValue(widthValue);
    const height = getValue(heightValue);
    const fontSize = getValue(fontSizeValue);

    return (
      <span
        style={{
          width,
          height,
          textAlign: textAlign,
          fontWeight,
          textDecoration,
          fontSize,
          ...style,
          color: textColor,
        }}
        ref={ref}
      >
        {children}
      </span>
    );
  },
);

Text.displayName = 'Flex';
