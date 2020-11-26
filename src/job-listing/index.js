import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import photosnapIcon from "../images/photosnap.svg";
import manageIcon from "../images/manage.svg";
import accountIcon from "../images/account.svg";
import myHomeIcon from "../images/myhome.svg";
import loopStudiosIcon from "../images/loop-studios.svg";
import faceItIcon from "../images/faceit.svg";
import shortlyIcon from "../images/shortly.svg";
import insureIcon from "../images/insure.svg";
import eyecamIcon from "../images/eyecam.svg";
import filterCompanyIcon from "../images/the-air-filter-company.svg";
import {
  GlobalStyle,
  Container,
  JobBoxContainer,
  JobBox,
  LogoCompany,
  CompanyContainer,
  Company,
  Profession,
  FooterContainer,
  CompanyBox,
  Tag,
  TagsSkill,
  CompanyColumn,
  TagsSkillsContainer,
  SearchContainer,
  ErrorContainer
} from "./styles";

const Job = props => {
  const jobs = [
    {
      logoCompany: photosnapIcon,
      company: "Photosnap",
      profession: "Senior Frontend Developer",
      published: "1d ago",
      time: "Full Time",
      country: "USA only",
      tags: ["new!", "featured"],
      tagsSkills: ["Frontend", "HTML", "Senior", "CSS", "JavaScript"]
    },
    {
      logoCompany: manageIcon,
      company: "Manage",
      profession: "Fullstack Developer",
      published: "1d ago",
      time: "Part Time",
      country: "Remote",
      tags: ["new!", "featured"],
      tagsSkills: ["Fullstack", "Midweight", "Python", "React"],
      border: "10px solid #5ba4a4"
    },
    {
      logoCompany: accountIcon,
      company: "Account",
      profession: "Junior Frontend Developer",
      published: "2d ago",
      time: "Contract",
      country: "USA only",
      tagsSkills: ["Frontend", "Junior", "React", "Sass", "JavaScript"]
    },
    {
      logoCompany: myHomeIcon,
      company: "MyHome",
      profession: "Junior Frontend Developer",
      published: "5d ago",
      time: "Contract",
      country: "USA only",
      tagsSkills: ["Fullstack", "Midweight", "React", "JavaScript"]
    },
    {
      logoCompany: loopStudiosIcon,
      company: "Loop Studios",
      profession: "Software Engineer",
      published: "1w ago",
      time: "Full Time",
      country: "Worldwide",
      tagsSkills: ["Frontend", "Junior", "Ruby", "Sass"]
    },
    {
      logoCompany: faceItIcon,
      company: "FaceIt",
      profession: "Junior Backend Developer",
      published: "2w ago",
      time: "Full Time",
      country: "UK only",
      tagsSkills: ["Backend", "Junior", "Ruby"]
    },
    {
      logoCompany: shortlyIcon,
      company: "Shortly",
      profession: "Junior Developer",
      published: "2w ago",
      time: "Full Time",
      country: "Worldwide",
      tagsSkills: ["Frontend", "Junior", "Vue", "Sass"]
    },
    {
      logoCompany: insureIcon,
      company: "Insure",
      profession: "Junior Frontend Developer",
      published: "2w ago",
      time: "Full Time",
      country: "USA only",
      tagsSkills: ["Frontend", "Junior", "React", "Sass", "JavaScript"]
    },
    {
      logoCompany: eyecamIcon,
      company: "Eyecam Co.",
      profession: "Junior Frontend Developer",
      published: "2w ago",
      time: "Full Time",
      country: "USA only",
      tagsSkills: ["Fullstack", "Midweight", "Python", "Django"]
    },
    {
      logoCompany: filterCompanyIcon,
      company: "The Air Filter Company",
      profession: "Front-end Dev",
      published: "1mo ago",
      time: "Part Time",
      country: "Worldwide",
      tagsSkills: ["Frontend", "Junior", "React", "Sass", "JavaScript"]
    }
  ];

  const [search, setSearch] = useState("");

  const skills = jobs
    .reduce((acc, job) => {
      const { tagsSkills } = job;
      for (let i = 0; i < tagsSkills.length; i++) {
        const skill = tagsSkills[i];
        if (!acc.includes(skill)) {
          acc.push(skill);
        }
      }
      return acc;
    }, [])
    .sort();

  const filtered = jobs.filter(job => {
    return (
      search === "" ||
      job.tagsSkills.filter(skill =>
        skill.toLowerCase().includes(search.toLowerCase())
      ).length > 0
    );
  });

  return (
    <>
      <GlobalStyle />
      <Container>
        <SearchContainer>
          <input
            value={search}
            placeholder="Search..."
            onChange={e => {
              setSearch(e.target.value);
            }}
          />
          <RiSearch2Line className="search" />
          {search !== "" && (
            <IoIosClose className="close" onClick={() => setSearch("")} />
          )}
        </SearchContainer>
        {filtered.length === 0 ? (
          <ErrorContainer className="error">
            <span>Nothing found try</span>{" "}
            {skills.map(skill => {
              return (
                <TagsSkill
                  key={skill}
                  onClick={() => {
                    setSearch(skill);
                  }}
                >
                  {skill}
                </TagsSkill>
              );
            })}
          </ErrorContainer>
        ) : (
          <JobBoxContainer>
            {filtered.map(list => {
              return (
                <JobItem
                  key={list.company}
                  setSearch={setSearch}
                  special={list.tags && list.tags.includes("new!")}
                  {...list}
                />
              );
            })}
          </JobBoxContainer>
        )}
      </Container>
    </>
  );
};
const JobItem = props => {
  const {
    setSearch,
    logoCompany,
    company,
    profession,
    published,
    time,
    country,
    tagsSkills = [],
    tags = [],
    special
  } = props;

  return (
    <JobBox special={special}>
      <LogoCompany src={logoCompany} />
      <CompanyContainer>
        <CompanyColumn>
          <CompanyBox>
            <Company>{company}</Company>
            {tags.map(tag => {
              let color = "gray";
              if (tag === "new!") color = "#5ba4a4";
              if (tag === "featured") color = "#2c3a3a";
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </CompanyBox>
          <Profession>{profession}</Profession>
          <FooterContainer>
            <ul>
              <li>{published}</li>
              <li>{time}</li>
              <li>{country}</li>
            </ul>
          </FooterContainer>
        </CompanyColumn>
        <TagsSkillsContainer>
          {tagsSkills.map(tagsSkill => {
            return (
              <TagsSkill
                key={tagsSkill}
                onClick={() => {
                  setSearch(tagsSkill);
                }}
              >
                {tagsSkill}
              </TagsSkill>
            );
          })}
        </TagsSkillsContainer>
      </CompanyContainer>
    </JobBox>
  );
};

export default Job;
