import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const RatingsWrapper = styled.div`
  display: flex;
  width: max-content;
`;

export const Ratings = ({ value = 5 }) => {
  const ratings = [];

  for (let i = 1; i <= value; i++) {
    ratings.push(<FaStar color="#F4C426" />);
  }

  return <RatingsWrapper>{ratings}</RatingsWrapper>;
};
