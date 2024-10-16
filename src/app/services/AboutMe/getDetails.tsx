// desc: gets personal details like first name, last name, email, phone number, etc.
import axios from "axios";
import resources from "@/app/resources/Resources";
export default async function getDetails(setAboutMeDetails: Function) {
  if (localStorage.getItem("aboutMeDetails")) {
    let aboutMeDetails = JSON.parse(
      localStorage.getItem("aboutMeDetails") as string
    );
    setAboutMeDetails ? setAboutMeDetails(aboutMeDetails) : null;
    return aboutMeDetails;
  } else {
    let aboutMeDetails = await axios.get(
      resources.config.strapiAPIBaseURL + "/api/about-mes"
    );
    localStorage.setItem("aboutMeDetails", JSON.stringify(aboutMeDetails.data));
    setAboutMeDetails ? setAboutMeDetails(aboutMeDetails.data) : null;
    return aboutMeDetails.data;
  }
}
