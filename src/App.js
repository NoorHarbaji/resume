import React from "react";
import "./styles.css";
import CvItem from "./CvItem";
import { resumeItems } from "./component/Data";
import PersonalPicture from "./component/Personal-Picture";
import ResumeTitle from "./component/ResumeTitle";
import AddressInfo from "./component/AddressInfo";
import ContactList from "./component/ContactList";
import SocialMedia from "./component/SocialMedia";
import Education from "./component/Education";
import Experience from "./component/Experience";
import Skills from "./component/Skills";

export default function App() {
  return (
    <main className="resume-page">
      <div className="rightSide">
        <div>
          {resumeItems.personalPicture.map(item => (
            <PersonalPicture {...item} />
          ))}
        </div>
        <ResumeTitle title={resumeItems.resumeHeader.name} />
        <div className="adressDiv">
          {resumeItems.addressInfo.map(item => (
            <AddressInfo {...item} />
          ))}
        </div>
        <div className="contact">
          <ul className="contactList">
            {resumeItems.contactList.map(item => (
              <ContactList {...item} />
            ))}
          </ul>
        </div>
        <div className="socialMedia">
          <ul className="contactList">
            {resumeItems.socialMedia.map(item => (
              <SocialMedia {...item} />
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="vrLine">&nbsp;</div>
      </div>
      <div className="leftSide">
        <div className="aboutmeDiv">
          {resumeItems.aboutme.map(item => (
            <CvItem {...item} />
          ))}
        </div>
        <div className="adressDiv">
          <CvItem title={"education"} />
          {resumeItems.educations.map(item => (
            <Education {...item} />
          ))}
        </div>
        <div className="adressDiv">
          <CvItem title={"experience"} />
          <div className="experDiv">
            {resumeItems.experience.map(item => (
              <Experience {...item} />
            ))}
          </div>
        </div>
        <div className="skills">
          <CvItem title={"skills"} />
          <div className="skills-div">
            {/* <div className="skill-div1"> */}
            {resumeItems.skills.map(item => (
              <Skills {...item} />
            ))}
          </div>
        </div>
        <div className="achement">
          {resumeItems.achievments.map(item => (
            <CvItem {...item} />
          ))}
        </div>
      </div>
    </main>
  );
}
