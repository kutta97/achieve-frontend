import { TextInput } from '@components/auth/TextInput';
import { Button } from '@components/common/button/Button';
import { EMAIL_PATTERN } from '@consts/Regex';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { useLogin } from './hooks/useLogin';

export const LoginFragment = observer(() => {
  const { handleLoginClick, register, errors } = useLogin();

  return (
    <LoginFragmentStyled>
      <TextInput
        label="Email"
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
