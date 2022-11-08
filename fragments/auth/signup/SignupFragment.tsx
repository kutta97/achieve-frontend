import { TextInput } from '@components/auth/TextInput';
import { Button } from '@components/common/button/Button';
import { EMAIL_PATTERN, NAME_PATTERN } from '@consts/Regex';
import styled from 'styled-components';

import { useSignup } from './hooks/useSignup';

export const SignupFragment = () => {
  const { handleSignupClick, register, errors } = useSignup();

  return (
    <SignupFragmentStyled>
      <TextInput
        label="Name"
        register={register('name', {
          pattern: {
            value: NAME_PATTERN,
            message: '이름을 입력해주세요.',
          },
          required: '이름을 입력해 주세요.',
        })}
        placeholder="Enter Name"
        errors={errors}
      />
      <TextInput
        label="Email"
        register={register('email', {
          pattern: {
            value: EMAIL_PATTERN,
            message: '이메일을 입력해주세요.',
          },
          required: '이메일을 입력해 주세요.',
        })}
        placeholder="Enter Email"
        errors={errors}
      />
      <TextInput
        label="Password"
        register={register('password', {
          required: '비밀번호를 입력해 주세요.',
        })}
        placeholder="Enter Password"
        errors={errors}
        isPassword
      />
      {/*<TextInput*/}
      {/*  label="Confirm Password"*/}
      {/*  register={register('password', {*/}
      {/*    required: '비밀번호를 재입력해 주세요.',*/}
      {/*  })}*/}
      {/*  placeholder="Confirm Password"*/}
      {/*  errors={errors}*/}
      {/*  isPassword*/}
      {/*/>*/}
      <Button
        text="Register"
        className="submit-button"
        onClick={handleSignupClick}
      />
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
