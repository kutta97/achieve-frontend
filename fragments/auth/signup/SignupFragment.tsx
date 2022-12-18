import { Button } from '@components/common/button/Button';
import { TextInput } from '@components/common/form/TextInput';
import { TextareaInput } from '@components/common/form/TextareaInput';
import { EMAIL_PATTERN, NAME_PATTERN } from '@consts/Regex';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { useSignup } from './hooks/useSignup';

export const SignupFragment = () => {
  const { handleSignupClick, control } = useSignup();

  return (
    <SignupFragmentStyled>
      <Image
        src="/assets/icon/logo/achieve_logo_title.svg"
        alt=""
        width={236}
        height={50}
      />
      <TextInput
        label="Name"
        name="name"
        width={520}
        rules={{
          pattern: {
            value: NAME_PATTERN,
            message: '이름을 입력해주세요.',
          },
          required: '이름을 입력해 주세요.',
        }}
        placeholder="Enter Name"
        control={control}
      />
      <TextInput
        label="Email"
        name="email"
        width={520}
        rules={{
          pattern: {
            value: EMAIL_PATTERN,
            message: '이메일을 입력해주세요.',
          },
          required: '이메일을 입력해 주세요.',
        }}
        placeholder="Enter Email"
        control={control}
      />
      <TextareaInput
        label="Description"
        name="description"
        width={520}
        rules={{
          required: '자신에 대한 간략한 소개를 해주세요',
          maxLength: {
            value: 150,
            message: '150자 이내로 입력해주세요.',
          },
        }}
        placeholder="Enter Description about Yourself"
        control={control}
      />
      <TextInput
        label="Password"
        name="password"
        width={520}
        rules={{
          required: '비밀번호를 입력해 주세요.',
        }}
        placeholder="Enter Password"
        isPassword
        control={control}
      />
      {/*<TextInput*/}
      {/*  label="Confirm Password"*/}
      {/*  name="password"*/}
      {/*  width={520}*/}
      {/*  rules={{*/}
      {/*    required: '비밀번호를 재입력해 주세요.',*/}
      {/*  }}*/}
      {/*  placeholder="Confirm Password"*/}
      {/*  isPassword*/}
      {/*  control={control}*/}
      {/*/>*/}
      <Button
        text="Register"
        className="submit-button"
        onClick={handleSignupClick}
      />
      <LoginLinkWrap>
        <p>Already have an Account?</p>
        <Link href={{ pathname: '/auth/login' }} passHref>
          <a>Login</a>
        </Link>
      </LoginLinkWrap>
    </SignupFragmentStyled>
  );
};

const SignupFragmentStyled = styled.div`
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

const LoginLinkWrap = styled.span`
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
