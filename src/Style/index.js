import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}
a{
  color:${({ theme }) => theme.color.accent};
}
*:focus,*:focus-visible{
  outline:2px solid ${({ theme }) => theme.color.accent};
}
`;
export const theme = {
  color: {
    accent: "rgba(86, 27, 219, 255)",
    bgMain: "rgba(251, 248, 243, 255)",
    text: " #464444",
    darkText: "#474058",
  },
  fontSize: {
    base: "16px",
    subHead: "32px",
    head: "40px",
  },
  spacing: {
    margin: "2rem",
    padding: "1rem",
  },
};
