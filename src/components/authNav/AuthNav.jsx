import { ContainAuthNav, NavLinkStyled } from './AuthNav.styled';

export function AuthNav() {
  return (
    <ContainAuthNav>
      <NavLinkStyled to="login">Sign in</NavLinkStyled>
      <NavLinkStyled to="register">Sign up</NavLinkStyled>
    </ContainAuthNav>
  );
}
