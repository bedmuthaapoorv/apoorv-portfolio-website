// desc: UI component that displays the first name & last name of the user
"use client"
import { useEffect, useState } from "react"
import services from "@/app/services/services"
export default function Name(){
    let [aboutMeDetails, setAboutMeDetails]=useState({});
    useEffect(()=>{
        services.aboutMe.getDetails(setAboutMeDetails);
    }, [])
    return(
        <div>
            {JSON.stringify(aboutMeDetails)}
        </div>
    )
}