import React, { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';
import { getValue } from '@/util/StringUtils.ts';
export type FlexProps = {
  width?: string | number;
  height?: string | number;
  gap?: string | number;
  padding?: string;
  margin?: string;
  alignItems?: string;
  bgColor?: string;
  justifyContent?: string;
  flexDirection?:
    | 'column'
    | 'inherit'
    | '-moz-initial'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'column-reverse'
    | 'row'
    | 'row-reverse'
    | undefined;
  style?: CSSProperties;
};
export const Flex = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<FlexProps> & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      gap: gapValue,
      padding,
      flexDirection = 'row',
      width: widthValue,
      height: heightValue,
      margin,
      alignItems = 'flex-start',
      justifyContent = 'flex-start',
      bgColor,
      children,
      style,
      ...props
    },
    ref,
  ) => {
    const gap = getValue(gapValue);
    const width = getValue(widthValue);
    const height = getValue(heightValue);

    return (
      <div
        style={{
          display: 'flex',
          gap,
          width: width || '100%',
          height: height || '100%',
          margin,
          padding,
          alignItems,
          justifyContent,
          flexDirection,
          background: bgColor || 'white',
          ...style,
        }}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Flex.displayName = 'Flex';
