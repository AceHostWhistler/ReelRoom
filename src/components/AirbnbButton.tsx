import React from 'react';
import { AIRBNB_LINK } from '../config/property';
import {
  airbnbButtonLg,
  airbnbButtonMd,
  airbnbButtonSm,
} from '../lib/airbnbButtonStyles';

type AirbnbButtonVariant = 'lg' | 'md' | 'sm';

const variantClass: Record<AirbnbButtonVariant, string> = {
  lg: airbnbButtonLg,
  md: airbnbButtonMd,
  sm: airbnbButtonSm,
};

interface AirbnbButtonProps {
  variant?: AirbnbButtonVariant;
  children?: React.ReactNode;
  className?: string;
}

export function AirbnbButton({
  variant = 'md',
  children = 'Book on Airbnb',
  className = '',
}: AirbnbButtonProps) {
  return (
    <a
      href={AIRBNB_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variantClass[variant]} ${className}`.trim()}
    >
      {children}
    </a>
  );
}
