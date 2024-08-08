import { React, useState } from "react";
import GetStarted from "../getStarted/GetStarted";
import TrackYourGoal from "../trackYourGoal/TrackYourGoal";
import GetBurn from "../getBurn/GetBurn";
import EatWell from "../eatWell/EatWell";
import ImproveSleepQuality from "../improveSleepQuality/ImproveSleepQuality";

const Home = () => {
  const activePageList = {
    getStarted: "getStarted",
    trackYourGoal: "trackYourGoal",
    getBurn: "getBurn",
    eatWell: "eatWell",
    improveSleepQuality: "improveSleepQuality",
  };
  const [activePage, setActivePage] = useState(activePageList.getStarted);

  return (
    <>
      {activePage === activePageList.getStarted && (
        <GetStarted
          nextButtonClick={() => {
            setActivePage(activePageList.trackYourGoal);
          }}
        />
      )}
      {activePage === activePageList.trackYourGoal && (
        <TrackYourGoal
          nextButtonClick={() => setActivePage(activePageList.getBurn)}
        />
      )}
      {activePage === activePageList.getBurn && (
        <GetBurn
          nextButtonClick={() => setActivePage(activePageList.eatWell)}
        />
      )}
      {activePage === activePageList.eatWell && (
        <EatWell
          nextButtonClick={() =>
            setActivePage(activePageList.improveSleepQuality)
          }
        />
      )}
      {activePage === activePageList.improveSleepQuality && (
        <ImproveSleepQuality
          nextButtonClick={
            () => setActivePage(activePageList.getStarted) //rotating back to getStarted for now, until the rest of the app is developed
          }
        />
      )}
    </>
  );
};

export default Home;
