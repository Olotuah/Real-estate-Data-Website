/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        royalblue: "#0474f8",
        customLightGray: '#F1F4F7',
        black: "#000",
        lightseagreen: "#12af9b",
        turquoise: {
          "100": "#2bc9b5",
          "200": "rgba(43, 201, 181, 0.09)",
        },
        "tetiary-colour": "#1e142a",
        darkslategray: {
          "100": "#454545",
          "200": "#333",
          "300": "rgba(51, 51, 51, 0.2)",
          "400": "#3f3f3f",
        },
        gray: {
          "100": "#252525",
          "200": "rgba(30, 20, 42, 0.45)",
          "300": "#fcfdff",
          "400": "#8c8c8c",
          "500": "#828282",
        },
        "grey-01": "#737373",
        "new-primary-colour-light": "#eeecf5",
        dimgray: {
          "100": "#606060",
          "200": "#5f5f5f",
          "300": "#5d5d5d",
        },
        lightgray: {
          "100": "#d6d6d6",
          "200": "#d4d4db",
        },
        lavender: "#e8e2f4",
        thistle: "#cfc9db",
        mediumseagreen: "#14d19e",
        gainsboro: {
          "100": "#e1e1e1",
          "200": "#d9d9d9",
        },
        silver: {
          "100": "#c0c0c0",
          "200": "#bfbfbf",
          "300": "#bababa",
        },
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f1f4f7",
          "300": "#efefef",
        },
        darkslateblue: "#534476",
        ghostwhite: "#f8fbff",
        aliceblue: "#e2eaf1",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        manrope: "Manrope",
        figtree: "Figtree",
        righteous: "Righteous",
      },
      borderRadius: {
        "131xl": "150px",
        "3xs": "10px",
        "8xs": "5px",
        lg: "18px",
        "mid-9": "17.9px",
        mini: "15px",
        mid: "17px",
        "21xl": "40px",
      },
      fontSize: {
        xl: "20px",
        "5xl": "24px",
        lg: "18px",
        "9xl": "28px",
        "3xl": "22px",
        base: "16px",
        "13xl": "32px",
        lgi: "19px",
        sm: "14px",
        xs: "12px",
        "4xs": "9px",
        "45xl": "64px",
        "19xl": "38px",
        "32xl": "51px",
        "31xl": "50px",
        inherit: "inherit",
      },
      screens: {
        mq1225: {
          raw: "screen and (max-width: 1225px)",
        },
        mq1125: {
          raw: "screen and (max-width: 1125px)",
        },
        mq1050: {
          raw: "screen and (max-width: 1050px)",
        },
        mq750: {
          raw: "screen and (max-width: 750px)",
        },
        mq675: {
          raw: "screen and (max-width: 675px)",
        },
        mq625: {
          raw: "screen and (max-width: 625px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
    },
    corePlugins: {
      preflight: false,
    },
  },
};
