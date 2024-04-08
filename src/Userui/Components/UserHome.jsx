import React, { useState, useEffect } from "react";
import { CalendarComp } from "../../assets/Components/CalendarComp";

import UseZustandGetId from "../../context/UseZustandGetId";
import { useCustomMutation } from "../../Hooks/useCustomMutation";

export const UserHome = () => {

  const { userid } = UseZustandGetId();
//post nalang
  const url_getTask = "http://127.0.0.1:8000/api/gettask";

  const [events, setEvents] = useState([]);

  const { data , mutate } =useCustomMutation(url_getTask,"POST");

  useEffect(()=>{
    mutate({
      user_id: userid,
    });
  },[]);

    useEffect(() => {
      if(data){
          setEvents(
            data.map((event) => ({
              title: event.project_name,
              start: new Date(event.deadline),
              end: new Date(event.deadline),
            }))
          );
      }
      
    }, [data]);
 

  return (
    <div className="w-screen h-screen bg-gradient-to-t from-royalblue to-ivory">
      <div className="w-full h-full pt-28 flex flex-col items-center burger">
        <CalendarComp events={events} />
      </div>
    </div>
  );
};
