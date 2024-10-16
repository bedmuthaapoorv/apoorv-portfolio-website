// Home screen wrapper
import Header from "./Header/Header"
import ScheduleAMeet from "./ScheduleAMeet/ScheduleAMeet"
import Name from "./Name/Name"
import Summary from "./Summary/Summary"
import Highlights from "./Highlights/Highlights"

export default function Home(){
    return (
        <div>
            <Header></Header>
            <ScheduleAMeet></ScheduleAMeet>
            <Name></Name>
            <Summary></Summary>
            <Highlights></Highlights>
        </div>
    )
}