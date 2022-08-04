import React from "react";
import About from "../../Components/Home/About/About";
import styled from "styled-components";
import icon1 from "../../Assets/allSizes.svg";
import icon2 from "../../Assets/code.svg";
import icon3 from "../../Assets/time.svg";
import { Desktop } from "../../utils/BreakPoints";
const AboutContainer = styled.section`
  margin-block: 2rem;
  padding-inline: ${({ theme }) => theme.spacing.margin};
  ${Desktop("margin-block:3rem;padding-inline:4rem;")}
`;

const CardData = [
  {
    title: "Build in minutes",
    text: "With a selection of premade templates, you can build out a portfoilo in less than 10 minutes",
    img: icon3,
    id: 1,
  },
  {
    title: "Add custom CSS",
    text: "Customize your personal portfolio even more with the abilty to add your own css",
    img: icon2,
    id: 2,
  },
  {
    title: "Responsive",
    text: "All Fiber templates are fully responsive to ensure the experience is seemless across all devices",
    img: icon1,
    id: 3,
  },
];

const AboutSection = () => {
  return (
    <AboutContainer>
      <About>
        <About.SubTitle text="Why Fiber" />
        <About.Title text="A good portfolio means good employability." />
      </About>
      <About.CardContainer>
        {CardData.map((item) => (
          <About.CardWrapper key={item.id}>
            <About.CardImage src={item.img} />
            <About.CardTitle text={item.title} />
            <About.CardContent text={item.text} />
          </About.CardWrapper>
        ))}
      </About.CardContainer>
    </AboutContainer>
  );
};

export default AboutSection;
