module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./scr/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat"],
      serif: ["Montserrat"],
      mono: ["Montserrat"],
    },
    extend: {
      brightness: {
        25: ".20",
        175: "1.75",
      },
      width: {
        wB: "100%",
        hr: "1.5px",
      },
      colors: {
        "light-red": "#FCF9F6",
        "footer-color": "#87A2A3",
        "road-map-color": "#034647",
        "red-bgColor": "#DE1F29",
        "aqua-color": "#034647",
        "TCard-color": "#F7F0EA",
        "hrBanner-color": "#034647",
        "employee-bgImg": "#F2EAE1",
        "employee-Color": "#FCF9F6",
        "form-color": "#034647",
        "light-blue-color": "#E4EEEF",
        "accordion-color": "#F4F4F4",
      },
      backgroundPosition: {
        "footer-img-position": "left -12% bottom -150%",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
