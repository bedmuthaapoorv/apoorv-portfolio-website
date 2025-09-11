// Home screen wrapper
import ScheduleAMeet from "./ScheduleAMeet/ScheduleAMeet";
import Name from "./Name/Name";
import Summary from "./Summary/Summary";
import Highlights from "./Highlights/Highlights";
import Footer from "../utilities/Footer/Footer";
import Menu from "./Header/Menu/Menu";

export default function Home() {
  return (
    <>
      <Menu />
      <ScheduleAMeet />
      <Name />
      <Summary />
      <Highlights />
      <Footer />
    </>
  );
}
