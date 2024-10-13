import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";

export const Header = () => {
  const getActiveLink = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${classes.active} ${classes.link}` : classes.link;
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <NavLink to="/" className={getActiveLink}>
          Home
        </NavLink>
        <NavLink to="/todo" className={getActiveLink}>
          ToDo
        </NavLink>
      </div>
    </header>
  );
};
