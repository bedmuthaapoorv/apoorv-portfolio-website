// The menu options for the header menu
const menuOptions = [
  {
    title: "About",
    action: () => {
      console.log("About");
    },
  },
  {
    title: "Resume",
    action: () => {
      window.open(
        "https://drive.google.com/file/d/1sR2QLDppUBtCqmxFW_tgUCwJrd2_ViTT/view?usp=sharing",
        "_blank"
      );
    },
  },
  {
    title: "Contact",
    action: () => {
      window.open("https://www.linkedin.com/in/apoorvbedmutha", "_blank");
    },
  },
];
export default menuOptions;
