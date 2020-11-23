import React from 'react';
import { InitialState, request as umiRequest, SelectLang, history } from 'umi';
import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';

export function render(oldRender) {
  console.log('render');
  oldRender();
}

const delay = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
};

export async function getInitialState() {
  /** 模拟获取用户信息 */
  await delay();
  return {
    name: 'my_name_is_basic',
    currentUser: {
      name: 'my_manager',
    },
  };
}

export const layout = props => {
  const { initialState } = props;
  return {
    onPageChange: () => {
      const { currentUser } = initialState;
      // 如果没有登录，重定向到 login
      const { location } = history;
      if (!currentUser && location.pathname !== '/user/login') {
        console.log(initialState, 'initialState');
        history.push('/user/login');
      }
    },
    menuHeaderRender: undefined,
    ...initialState?.settings,
    logout: () => {
      alert('logout');
    },
  };
};
