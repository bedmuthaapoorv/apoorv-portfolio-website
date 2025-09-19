// Home screen wrapper
import ScheduleAMeet from "./ScheduleAMeet/ScheduleAMeet";
import Name from "./Name/Name";
import Summary from "./Summary/Summary";
import Highlights from "./Highlights/Highlights";
import Footer from "../utilities/Footer/Footer";
import Menu from "./Header/Menu/Menu";
import Testimonials from "./Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Menu />
      <ScheduleAMeet />
      <Name />
      <Summary />
      <Highlights />
      <Testimonials />
      <Footer />
    </>
  );
}
