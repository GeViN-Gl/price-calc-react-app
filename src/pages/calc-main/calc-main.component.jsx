import "./calc-main.styles.scss";

import React, { useState } from "react";

import CustomButton from "../../components/custom-button/custom-button.component";

const CalcMainPage = () => {
  const [language, setLanguage] = useState("English");
  const [duration, setDuration] = useState("60 min");
  const [classesType, setClassesType] = useState("Personal");
  const [classesFormat, setClassesFormat] = useState("Online");
  const [numOfClasses, setNumOfClasses] = useState(1);

  if (classesType !== "Personal" && duration !== "90 min") setDuration("90 min");

  return (
    <div className="container">
      <h1 className="header" onClick={() => setLanguage("German")}>
        Language Classes Price
      </h1>

      <h3 className="sub-header">Language to learn: {language}</h3>
      <div className="btn-row">
        <CustomButton name="German" currValue={language} setFunction={setLanguage} />
        <CustomButton name="English" currValue={language} setFunction={setLanguage} />
      </div>

      <h3 className="sub-header">Class duration:{parseFloat(duration)}</h3>
      <div className="btn-row">
        <CustomButton name="45 min" currValue={duration} setFunction={setDuration} />
        <CustomButton name="60 min" currValue={duration} setFunction={setDuration} />
        <CustomButton name="90 min" currValue={duration} setFunction={setDuration} />
      </div>
      <h5 className={`notice${classesType !== "Personal" ? "" : " hidden"}`}>
        * All group classes are available only in 90 min duration
      </h5>

      <h3 className="sub-header">Classes type:{classesType}</h3>
      <div className="btn-row">
        <CustomButton name="Group" currValue={classesType} setFunction={setClassesType} />
        <CustomButton
          name="Personal"
          currValue={classesType}
          setFunction={setClassesType}
        />
        <CustomButton
          name="Mini-group"
          currValue={classesType}
          setFunction={setClassesType}
        />
      </div>

      <h3 className="sub-header">Classes format:{classesFormat}</h3>
      <div className="btn-row">
        <CustomButton
          name="Online"
          currValue={classesFormat}
          setFunction={setClassesFormat}
        />
        <CustomButton
          name="Offline"
          currValue={classesFormat}
          setFunction={setClassesFormat}
        />
      </div>

      <h3 className="sub-header">Number of classes:{numOfClasses}</h3>
      <div className="btn-row">
        <CustomButton name="-" currValue={numOfClasses} setFunction={setNumOfClasses} />
        <span className="class-amount"></span>
        <CustomButton name="+" currValue={numOfClasses} setFunction={setNumOfClasses} />
      </div>

      <h3>Total price:</h3>
      <h3 id="total-price">₴350</h3>
    </div>
  );
};

export default CalcMainPage;
