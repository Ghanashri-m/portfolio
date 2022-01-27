import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mediaQueries } from "../components/Themes";

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;

  ${mediaQueries(50)`
        width:16rem;
        margin-right:6rem;
        height:35vh;
  `};
  ${mediaQueries(40)`
        width:14rem;
        margin-right:4rem;
        height:35vh;
  `};
  ${mediaQueries(25)`
        width:12rem;
        margin-right:4rem;
        height:35vh;
        padding:1.5rem 1.5rem;
  `};
  ${mediaQueries(20)`
        width:10rem;
        margin-right:4rem;
        height:40vh;
  `};
`;

const Title = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-size: calc(1em + 0.5vw);
`;
const Description = styled.h4`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  overflow: auto;
  ${mediaQueries(25)`
  font-size:calc(0.7em + 0.3vw);

  `};
  ${mediaQueries(20)`
  font-size:calc(0.6em + 0.3vw);
  `};
`;

const item = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: "spring", duration: 0.5 } },
};

const Testimonial = (props) => {
  const { id, name, description, position, link } = props.data;
  const content = description.split('.');
  return (
    <Box key={id} variants={item}>
      <Title to={{ pathname: `${link}` }} target="_blank" >{name}</Title>
      <p>{position}</p>
      <br />
      <hr />
      <br />
      <Description>{
          content.map((item, index) => {
              return index !== content.length - 1 ? <><p>{item}.</p><br /></> : ''
          })
      }</Description>
    </Box>
  );
};

export default Testimonial;