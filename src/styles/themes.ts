import Theme, { Themes } from "../models/Theme";
import darkPlus from "../assets/images/darkPlus.png";
import darkCheck from "../assets/images/darkCheck.png";
import lightPlus from "../assets/images/plus.png";
import lightCheck from "../assets/images/check.png";

const light: Theme = {
  name: "light",
  icons: {
    plusIcon: lightPlus,
    checkIcon: lightCheck,
  },
  colors: {
    backgroundPrimary: "#4682b4",
    backgroundSecondary: "#edf0f1",
  },
};

const dark: Theme = {
  name: "dark",
  icons: {
    plusIcon: darkPlus,
    checkIcon: darkCheck,
  },
  colors: {
    backgroundPrimary: "#202554",
    backgroundSecondary: "#4a4a4a",
  },
};

export const themes: Themes = {
  light,
  dark,
};
