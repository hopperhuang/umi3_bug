import React from 'react';
import styles from './about.less';
import { Button } from 'antd';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>这里是welcome</h1>
      <Button type="primary">这是welcome按钮</Button>
    </div>
  );
};
