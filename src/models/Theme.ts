export default interface Theme {
  name: string;
  icons: {
    plusIcon: string;
    checkIcon: string;
  };
  colors: {
    backgroundPrimary: string;
    backgroundSecondary: string;
  };
}

export interface Themes {
  [key: string]: Theme;
}
