import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  LogInFormWrapper,
  LogInFormLabel,
  LogInFormInput,
  LogInFormButton,
} from './LogInForm.styled';

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LogInFormWrapper onSubmit={handleSubmit} autoComplete="off">
      <LogInFormLabel>
        Email
        <LogInFormInput type="email" name="email" />
      </LogInFormLabel>
      <LogInFormLabel>
        Password
        <LogInFormInput type="password" name="password" />
      </LogInFormLabel>
      <LogInFormButton type="submit">Log In</LogInFormButton>
    </LogInFormWrapper>
  );
};
