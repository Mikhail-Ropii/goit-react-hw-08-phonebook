import styled from '@emotion/styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import operations from 'redux/auth/Auth-operations';
import { Label } from '../components/contactForm/ContactForm.styled';
import { RegisterButton } from 'components/styled/Register.styled';

const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorMessageStyle = styled(ErrorMessage)`
  color: red;
`;
const initialValues = {
  name: '',
  email: '',
  password: '',
};

const nameValid = /[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)/;

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Type name')
    .matches(
      nameValid,
      'Name may contain only letters, apostrophe, dash and spaces'
    ),
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

export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(operations.register({ name, email, password }));
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
          Name
          <ErrorMessageStyle name="name" component="div" />
          <Field type="text" name="name" id="name" />
        </Label>
        <Label htmlFor="name">
          Email
          <ErrorMessageStyle name="email" component="div" />
          <Field type="email" name="email" id="email" />
        </Label>
        <Label htmlFor="number">
          Password
          <ErrorMessageStyle name="password" component="div" />
          <Field type="password" name="password" id="password" />
        </Label>
        <RegisterButton variant="contained" type="submit">
          Create account
        </RegisterButton>
      </FormStyle>
    </Formik>
  );
}
