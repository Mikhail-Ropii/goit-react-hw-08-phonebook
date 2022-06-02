import { MainMenuLink, ContainMainMenu } from './Navigation.styled';

export function Navigation() {
  return (
    <ContainMainMenu>
      <MainMenuLink to="/">Home</MainMenuLink>
      <MainMenuLink to="/contacts">Contacts</MainMenuLink>
    </ContainMainMenu>
  );
}
