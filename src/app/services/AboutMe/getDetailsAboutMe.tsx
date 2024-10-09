import axios from "axios";
import resources from "@/app/resources/Resources";
export default async function getDetailsAboutMe() {
    if(localStorage.getItem('aboutMeDetails')){
        return JSON.parse(localStorage.getItem('aboutMeDetails') as string);
    }
    let aboutMeDetails=await axios.get(resources.config.strapiAPIBaseURL+'/api/about-mes');
    localStorage.setItem('aboutMeDetails', JSON.stringify(aboutMeDetails.data));
    return aboutMeDetails.data;
}