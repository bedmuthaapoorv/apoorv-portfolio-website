// Home screen wrapper
import Header from "./Header/Header";
import ScheduleAMeet from "./ScheduleAMeet/ScheduleAMeet";
import Name from "./Name/Name";
import Summary from "./Summary/Summary";
import Highlights from "./Highlights/Highlights";
import Footer from "../utilities/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <ScheduleAMeet />
      <Name />
      <Summary />
      <Highlights />
      <Footer />
    </div>
  );
}
