import React from 'react';
import styles from './index.less';
import { Button, DatePicker, TimePicker } from 'antd';
import { useIntl, setLocale, useModel, useAccess } from 'umi';

export default () => {
  const intl = useIntl();
  const { description: bar } = useModel('bar');
  const access = useAccess();
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div>
        {intl.formatMessage(
          {
            id: 'WELCOME_TO_UMI_WORLD',
            defaultMessage: '你好，旅行者',
          },
          {
            name: '新来的同学',
          },
        )}
      </div>
      <Button
        type="primary"
        onClick={() => {
          setLocale('en-US', true);
        }}
      >
        切换英文
      </Button>
      <Button
        type="primary"
        onClick={() => {
          setLocale('zh-CN', true);
        }}
      >
        切换简体中文
      </Button>
      <Button
        type="primary"
        onClick={() => {
          setLocale('zh-TW', true);
        }}
      >
        切换到繁体中文
      </Button>
      <DatePicker />
      <TimePicker />
      <div>{bar}</div>
    </div>
  );
};
