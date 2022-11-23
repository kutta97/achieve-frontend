import { Button } from '@components/common/button/Button';
import { TextInput } from '@components/common/form/TextInput';
import { EMAIL_PATTERN } from '@consts/Regex';
import { observer } from 'mobx-react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { useLogin } from './hooks/useLogin';

export const LoginFragment = observer(() => {
  const { handleLoginClick, register, errors } = useLogin();

  return (
    <LoginFragmentStyled>
      <Image
        src="/assets/icon/logo/achieve_logo_title.svg"
        alt=""
        width={236}
        height={50}
      />
      <TextInput
        label="Email"
        width={520}
        register={register('email', {
          pattern: {
            value: EMAIL_PATTERN,
            message: '이메일을 입력해주세요.',
          },
          required: '이메일을 입력해 주세요.',
        })}
        placeholder="example@gmail.com"
        errors={errors}
      />
      <TextInput
        label="Password"
        width={520}
        register={register('password', {
          required: '비밀번호를 입력해 주세요.',
        })}
        errors={errors}
        isPassword
      />
      <Button
        text="Login"
        className="submit-button"
        onClick={handleLoginClick}
      />
      <SignupLinkWrap>
        <p>Not registered yet?</p>
        <Link href={{ pathname: '/auth/signup' }} passHref>
          <a>Create an Account</a>
        </Link>
      </SignupLinkWrap>
    </LoginFragmentStyled>
  );
});

const LoginFragmentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: fit-content;
  margin: 230px auto;

  .submit-button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 44px;
    font-size: 16px;
    padding: 10px 10px;
  }
`;

const SignupLinkWrap = styled.span`
  display: flex;
  align-content: center;
  gap: 7px;

  p {
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.SolidPurple};
    text-decoration: underline;
    font-weight: bold;
  }
`;
