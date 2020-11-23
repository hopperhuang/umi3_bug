import React from 'react';
import styles from './about.less';
import { Button } from 'antd';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page About</h1>
      <Button type="primary">这是一个按钮</Button>
    </div>
  );
};
