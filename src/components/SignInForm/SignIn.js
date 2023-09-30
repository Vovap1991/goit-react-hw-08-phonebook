import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import {
  RegistrationForm,
  RigistrationFormLabel,
  RigistrationFormInput,
  RigistrationFormButton,
} from './SignIn.styled';

export const SignInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegistrationForm onSubmit={handleSubmit} autoComplete="off">
      <RigistrationFormLabel>
        Username
        <RigistrationFormInput type="text" name="name" />
      </RigistrationFormLabel>
      <RigistrationFormLabel>
        Email
        <RigistrationFormInput type="email" name="email" />
      </RigistrationFormLabel>
      <RigistrationFormLabel>
        Password
        <RigistrationFormInput type="password" name="password" />
      </RigistrationFormLabel>
      <RigistrationFormButton type="submit">Sign In</RigistrationFormButton>
    </RegistrationForm>
  );
};
