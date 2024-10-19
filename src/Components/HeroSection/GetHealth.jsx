import React from "react";
import Card from "./Card";
import { FaRegCalendarCheck, FaUserTie } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import Sympotoms from "./Sympotoms";
import Updates from "./Updates";
import PatientService from "./PatientService";
function GetHealthCards() {
  return (
    <div className="md:px-20 px-5 w-full pb-10">
      <div className="flex flex-wrap justify-between">
        <Card
          icon={<FaRegCalendarCheck className="h-10 w-10 " />}
          subtitle="24 hours services"
          title="Get health services"
          content="We are committed to providing you with accurate and up-to-date information to help you avoid the Marburg virus and ensure your well-being."
          buttonText="Get Health Services"
        />
        <Card
          icon={<MdAccessTimeFilled className="h-10 w-10 " />}
          subtitle="Timing scheduler"
          title="Timing Scheduler"
          content={
            <div>
              <p className="flex justify-between font-bold">
                <span>Sun-Wed</span> <span>8:00-17:00</span>
              </p>
              <p className="flex justify-between font-bold">
                <span>Thu-Fri</span> <span>9:00-17:00</span>
              </p>
              <p className="flex justify-between font-bold">
                <span>Sat-Sun</span> <span>9:00-17:00</span>
              </p>
            </div>
          }
        />
        <Card
          icon={<FaUserTie className="h-10 w-10" />}
          subtitle="Emergency cases"
          title="0790838315"
          content="Get ALl time support for emergency. We have introduced the principle of family medicine. Get Connected with us for any urgency."
        />
      </div>
      <Sympotoms imgEl={true}/>
      <Updates/>
      {/* <PatientService/> */}

    </div>
    
  );
}

export default GetHealthCards;
