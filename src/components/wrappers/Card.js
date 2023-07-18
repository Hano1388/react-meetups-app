import classNames from './Card.module.css';

const Card = ({ children }) => {
  return <div className={classNames.card}>{children}</div>;
};

export default Card;
