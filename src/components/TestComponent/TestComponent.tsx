/**
 * Vendor
 */

import React from 'react';
import cn from 'classnames/bind';

/**
 * Styles
 */

import styles from './TestComponent.scss';

export interface Props {
  /**
   * Simple text prop
   * */
  text: string;
}

const cx = cn.bind(styles);

export const TestComponent = ({ text }: Props): React.ReactNode => (
  <div className={cx(styles.test)}>
    Test Component: 
    {' '}
    {text}
    <p>Coool!</p>
  </div>
);
