import styled from '@emotion/styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import operations from 'components/redux/auth/Auth-operations';
import { Label } from '../components/contactForm/ContactForm.styled';
import { LogInButton } from 'components/styled/Login.styled';

const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorMessageStyle = styled(ErrorMessage)`
  color: red;
`;
const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(7, 'Your password has to be at least 7 characters'),
});

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(operations.logIn({ email, password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyle>
        <Label htmlFor="name">
          Email
          <ErrorMessageStyle name="email" component="div" />
          <Field type="text" name="email" id="email" />
        </Label>
        <Label htmlFor="number">
          Password
          <ErrorMessageStyle name="password" component="div" />
          <Field type="tel" name="password" id="password" />
        </Label>
        <LogInButton variant="contained" type="submit">
          Log In
        </LogInButton>
      </FormStyle>
    </Formik>
  );
}
