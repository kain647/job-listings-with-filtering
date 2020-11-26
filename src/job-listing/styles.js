import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  user-select: none;
  background-color: #eef6f6;
  font-family: -apple-system, "Spartan", BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
#root{
  width: 100%;
}
 }
  `;
export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
  font-family: "Spartan", sans-serif;
`;
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;
export const JobBoxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const JobBox = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  border-radius: 10px;
  border-left: ${({ special }) => special ? "10px solid #5ba4a4" : "none"};
  @media (max-width: 544px) {
    display: flex;
    flex-direction: column;
  }
`;
export const LogoCompany = styled.img`
  display: flex;
  padding: 30px;
`;
export const CompanyContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  align-items: center;
  padding: 20px;
  @media (max-width: 544px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const CompanyColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  @media (max-width: 544px) {
    display: flex;
    align-items: center;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;
export const Company = styled.div`
  display: flex;
  margin-right: 10px;
`;
export const CompanyBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 544px) {
    margin-bottom: 20px;
  }
`;
export const Profession = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  @media (max-width: 544px) {
    display: flex;
    text-align: center;
    margin-bottom: 20px;
  }
`;
export const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-left: 17px;
    opacity: 0.8;
    list-style-type: disc;
  }
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 544px) {
    display: flex;
    margin-bottom: 20px;
  }
`;
export const Tag = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 12px;
  border-radius: 20px;
  padding: 9px 10px 6px;
  color: white;
  background: ${({ color }) => color};
  margin-right: 5px;
  &:last-of-type {
    margin-right: 0;
  }
`;
export const TagsSkillsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media (max-width: 1024px) {
    display: flex;
    align-items: flex-end;
    flex: 1;
    flex-direction: column;
  }
  @media (max-width: 544px) {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
`;
export const TagsSkill = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100px;
  font-weight: 700;
  font-size: 14px;
  border-radius: 5px;
  padding: 8px 8px 6px;
  cursor: pointer;
  color: #5ba4a4;
  margin-right: 10px;
  margin-bottom: 5px;
  background: #e5e5e5;
  :hover {
    color: #fff;
    background-color: #707070;
  }
  @media (max-width: 1024px) {
    display: flex;
    box-sizing: border-box;
    margin-bottom: 5px;
  }
  @media (max-width: 544px) {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 5px;
    margin-right: 0;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 20px;
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 5px;
    font-size: 14px;
  }
  .close {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 5px;
    cursor: pointer;
    font-size: 14px;
  }
  input {
    display: flex;
    width: 200px;
    height: 30px;
    padding-left: 25px;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 14px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  }
`;
