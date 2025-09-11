import IMenuOption from "@/app/interfaces/IMenuOption";
// The menu options for the header menu
const menuOptions: IMenuOption[] = [
  {
    title: "About",
    action: () => {
      console.log("About");
    },
    onDesktop: false,
  },
  {
    title: "Resume",
    action: () => {
      window.open(
        "https://drive.google.com/file/d/1sR2QLDppUBtCqmxFW_tgUCwJrd2_ViTT/view?usp=sharing",
        "_blank"
      );
    },
    onDesktop: true,
  },
  {
    title: "Contact",
    action: () => {
      window.open("https://www.linkedin.com/in/apoorvbedmutha", "_blank");
    },
    onDesktop: true,
  },
];
export default menuOptions;
