import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { SignupFragment } from '../../../fragments/auth/signup/SignupFragment';
import { NextPageWithLayout } from '../../_app';

const Signup: NextPageWithLayout = () => {
  return (
    <SignupStyled>
      <SignupFragment />
    </SignupStyled>
  );
};

Signup.getLayout = (page: ReactElement) => {
  return (page);
};

const SignupStyled = styled.div``;

export default Signup;
