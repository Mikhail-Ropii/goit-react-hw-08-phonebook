import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const ContainMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const TextMenu = styled.p`
  margin-right: 20px;
`;

export const LogOutButton = styled(Button)({
  border: 0,
  backgroundColor: 'blue',
  marginBottom: 5,
  borderRadius: 3,
  color: 'white',
  height: 38,
  width: 120,
  padding: '0 20px',
});
