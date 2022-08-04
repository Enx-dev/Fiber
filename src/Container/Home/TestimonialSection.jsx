import React from "react";
import styled from "styled-components";
import Testimonial from "../../Components/Home/Testimonial/Testimonial";
import user1 from "../../Assets/User Avatar.svg";
import user2 from "../../Assets/User Avatar 2.svg";
import user3 from "../../Assets/User Avatar 32.svg";
import { Desktop } from "../../utils/BreakPoints";
const Container = styled.section`
  padding-block: 5rem;
  padding-inline: ${({ theme }) => theme.spacing.margin};
  ${Desktop("padding-inline:4rem;")}
`;

const TestimonialData = [
  {
    id: 1,
    fullName: "Sarah Andrews",
    rev: "100",
    content:
      "Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k",
    name: "Sarah",
    img: user1,
  },
  {
    id: 2,
    fullName: "Mathew Higgins",
    rev: "20",
    content:
      "I have been getting A LOT of leads ever since i use Fiber's premade templates, now I just need to work on my case studies and I'll be ready to go!",
    name: "Mathew",
    img: user2,
  },
  {
    id: 3,
    fullName: "Janice Dave",
    rev: "30",
    content:
      "I only just started freelancing this year and i have already made more than i ever made in my full time job. The templates are just so amazing",
    name: "Janice",
    img: user3,
  },
];

const TestimonialSection = () => {
  return (
    <Container>
      <Testimonial>
        {TestimonialData.map((tes) => (
          <Testimonial.Card key={tes.id}>
            <Testimonial.CardTop>
              <Testimonial.CardImg src={tes.img} />
              <Testimonial.CardInfo>
                <Testimonial.CardName name={tes.fullName} />
                <Testimonial.CardRev rev={tes.rev} />
              </Testimonial.CardInfo>
            </Testimonial.CardTop>
            <Testimonial.CardContent text={tes.content} />
            <Testimonial.CardBtn name={tes.name} />
          </Testimonial.Card>
        ))}
      </Testimonial>
    </Container>
  );
};

export default TestimonialSection;
