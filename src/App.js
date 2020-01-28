import React from "react";
import "./styles.css";
import CvItem from "./CvItem";
import PersonalPicture from "./component/Personal-Picture";
import ResumeTitle from "./component/ResumeTitle";
import AddressInfo from "./component/AddressInfo";
import ContactList from "./component/ContactList";
import SocialMedia from "./component/SocialMedia";
import Education from "./component/Education";
import Experience from "./component/Experience";
import Skills from "./component/Skills";

const resumeItems = [
  [
    {
      title: "about me ",
      children:
        "Use it to describe your credentials, expertise, and goals. What’s the best way to start? The following exercises can be helpful in figuring all of that out, and will help you determine what to"
    }
  ],
  [
    {
      title: "achievments",
      children:
        "Use it to describe your credentials, expertise, and goals. What’s the best way to start? The following exercises can be helpful in figuring all of that out, and will help you determine what to"
    }
  ]
];
const educations = [
  {
    startDate: "2000",
    endDate: "2004",
    courseStudies: "computer scince",
    universityName: "University,collage details"
  },
  {
    startDate: "2010",
    endDate: "2015",
    courseStudies: "computer scince",
    universityName: "University,collage details"
  },
  {
    startDate: "2000",
    endDate: "2004",
    courseStudies: "computer scince",
    universityName: "University,collage details"
  }
];

const experience = [
  {
    startDate: "2000",
    endDate: "2004",
    comanyName: "company Name",
    description:
      "Use it to describe your credentials, expertise, and goals.What’s the best way to start? Use it to describe your credentials, expertise, and goals.What’s the best way to start?"
  },
  {
    startDate: "2000",
    endDate: "2004",
    comanyName: "company Name",
    description:
      "Use it to describe your credentials, expertise, and goals.What’s the best way to start?"
  },
  {
    startDate: "2000",
    endDate: "2004",
    comanyName: "company Name",
    description:
      "Use it to describe your credentials, expertise, and goals.What’s the best way to start?"
  }
];

const skills = [
  { skillName: "HTML5", value: 3 },
  { skillName: "Java Script", value: 4 },
  { skillName: "Php", value: 2 },
  { skillName: "React", value: 3 },
  { skillName: "Java", value: 2 },
  { skillName: "PhotoShop", value: 2 },
  { skillName: "Hoppy", value: 5 },
  { skillName: "learn", value: 5 }
];

let aboutme = resumeItems[0];
let achievments = resumeItems[1];

const personalPicture = [
  {
    perPic: "./Noor-Harbaji.JPG",
    alt: "Noor Harbaji"
  }
];

const resumeHeader = "Noor Harbaji";

const addressInfo = [
  {
    streetName: "street name",
    twonCity: "town City",
    postZipCountry: "12345"
  }
];

const contactList = [
  { name: "phone:", value: "12345678" },
  { name: "Email:", value: "name@domainname.com" },
  { name: "WebbSite:", value: "www.websit.com" }
];

const socialMedia = [
  { name: "FaceBook/name", className: "fa fa-facebook" },
  { name: "Twitter/name/", className: "fa fa-twitter" },
  { name: "linkdin/name", className: "fa fa-linkedin" }
];

export default function App() {
  return (
    <main className="resume-page">
      <div className="rightSide">
        <div>
          {personalPicture.map(item => (
            <PersonalPicture {...item} />
          ))}
        </div>
        <ResumeTitle title={resumeHeader} />
        <div className="adressDiv">
          {addressInfo.map(item => (
            <AddressInfo {...item} />
          ))}
        </div>
        <div className="contact">
          <ul className="contactList">
            {contactList.map(item => (
              <ContactList {...item} />
            ))}
          </ul>
        </div>
        <div className="socialMedia">
          <ul className="contactList">
            {socialMedia.map(item => (
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
          {aboutme.map(item => (
            <CvItem {...item} />
          ))}
        </div>
        <div className="adressDiv">
          <CvItem title={"education"} />
          {educations.map(item => (
            <Education {...item} />
          ))}
        </div>
        <div className="adressDiv">
          <CvItem title={"experience"} />
          <div className="experDiv">
            {experience.map(item => (
              <Experience {...item} />
            ))}
          </div>
        </div>
        <div className="skills">
          <CvItem title={"skills"} />
          <div className="skills-div">
            {/* <div className="skill-div1"> */}
            {skills.map(item => (
              <Skills {...item} />
            ))}
          </div>
        </div>
        <div className="achement">
          {achievments.map(item => (
            <CvItem {...item} />
          ))}
        </div>
      </div>
    </main>
  );
}
