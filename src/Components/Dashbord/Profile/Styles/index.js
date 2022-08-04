import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  gap: 3rem;
  padding-inline: 2rem;
  flex-direction: column;
  justify-content: center;
  padding-block: 4rem;
  min-height: 100vh;
  width: 100%;
`;
export const ProfileImg = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.color.accent};
`;
export const Info = styled.div`
  height: max-content;
  text-align: center;
`;
export const Image = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .custom-file-input {
    visibility: hidden;
    width: 200px;
    margin-top: 10px;
    display: flex;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.bgMain};
  }
  .custom-file-input::before {
    content: "Upload Image";
    display: inline-block;
    background: ${({ theme }) => theme.color.accent};
    border: 1px solid #999;
    border-radius: 10px;
    visibility: visible;
    padding: 1rem 8px;
    text-align: center;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 10pt;
  }
`;
export const Delete = styled.section`
  border: 1px solid darkred;
  padding: 1rem;
  border-radius: 10px;
`;
export const DeleteBtn = styled.button`
  border: none;
  background: red;
  color: whitesmoke;
  padding: 1rem 2.5rem;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 0.5rem;
`;
export const DeleteText = styled.p`
  color: red;
  line-height: normal;
`;
export const Wraning = styled.h1`
  color: red;
  font-size: 2rem;
  margin-bottom: 0.3em;
  font-family: monospace;
`;
export const ProfileName = styled.p`
  font-size: 2rem;
  font-weight: 700;
  text-transform: capitalize;
`;
export const ProfileEmail = styled.p`
  font-weight: 500;
  font-size: 1.3rem;
  margin-top: 0.5rem;
`;
export const Label = styled.label``;
