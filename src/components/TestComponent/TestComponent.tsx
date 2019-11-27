/**
 * Vendor
 */

import React from 'react';
import classNames from 'classnames/bind';

/**
 * Styles
 */

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export interface Props {
  text: string;
}

export const TestComponent: React.ReactType = ({ text }: Props) => (
  <div className={styles.test}>
    Test Component: {text}
    <p>Coool!</p>
  </div>
);
