import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      /* basic */
      BasicBlack: string;
      BasicWhite: string;
      BasicGray: string;
      BasicBg: string;

      /* shade */
      ShadeGray80: string;
      ShadeGray70: string;
      ShadeGray60: string;
      ShadeGray50: string;
      ShadeGray40: string;
      ShadeGray30: string;
      ShadeGray20: string;
      ShadeGray10: string;

      /* dark */
      DarkBlue: string;
      DarkGreen: string;
      DarkPurple: string;
      DarkRed: string;

      /* solid */
      SolidBlue: string;
      SolidGreen: string;
      SolidPurple: string;
      SolidRed: string;

      /* light */
      LightBlue: string;
      LightGreen: string;
      LightPurple: string;
      LightRed: string;
    };
  }
}
