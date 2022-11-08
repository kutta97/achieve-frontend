import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { LoginFragment } from '../../../fragments/auth/login/LoginFragment';
import { NextPageWithLayout } from '../../_app';

const Login: NextPageWithLayout = () => {
  return (
    <LoginStyled>
      <LoginFragment />
    </LoginStyled>
  );
};

Login.getLayout = (page: ReactElement) => {
  return (page);
};

const LoginStyled = styled.div``;

export default Login;
