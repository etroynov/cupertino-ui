/**
 * Vendor
 */

import React from 'react';

/**
 * Styles
 */

import './TestComponent.css';

export interface Props {
  /**
   * Simple text prop
   * */
  text: string;
}

export const TestComponent = ({ text }: Props): React.ReactNode => (
  <div className="test">
    Test Component: 
    {' '}
    {text}
    <p>Coool!</p>
  </div>
);
