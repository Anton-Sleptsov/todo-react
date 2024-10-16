import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import { useDispatch } from "react-redux";
import { toggleThemeAction } from "../../feature/themeList";
import {
  HeaderBlock,
  HeaderContainer,
  HeaderToggleControl,
  HeaderToggleControlBox,
} from "./Header.styled";

export const Header = () => {
  const dispatch = useDispatch();

  const getActiveLink = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${classes.active} ${classes.link}` : classes.link;
  };

  return (
    <HeaderBlock>
      <HeaderContainer>
        <NavLink to="/" className={getActiveLink}>
          ToDo
        </NavLink>
        <NavLink to="/list" className={getActiveLink}>
          List
        </NavLink>
        <HeaderToggleControlBox>
          <HeaderToggleControl onClick={() => dispatch(toggleThemeAction())}>
            Theme
          </HeaderToggleControl>
        </HeaderToggleControlBox>
      </HeaderContainer>
    </HeaderBlock>
  );
};
