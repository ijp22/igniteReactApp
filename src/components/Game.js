// React
import { Link } from 'react-router-dom';
import { smallImage } from '../util';

// Placeholder
import placeholderImage from '../img/placeholder.jpeg';

// Styles and Animation
import styled from 'styled-components';
import { popup } from '../animations';
import { motion } from 'framer-motion';

// Redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';

// Component
const Game = ({ name, released, id, image }) => {
  // ID For Animation
  const stringPathId = id.toString();

  // Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  };

  // Missing Item Check
  if (image === null) {
    image = placeholderImage;
  }
  if (released === null) {
    released = 'To Be Released';
  }

  // Component
  return (
    <StyledGame
      layoutId={stringPathId}
      onClick={loadDetailHandler}
      variants={popup}
      initial='hidden'
      animate='show'
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 1280)}
          alt={id}
        />
      </Link>
    </StyledGame>
  );
};

// Styles
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
