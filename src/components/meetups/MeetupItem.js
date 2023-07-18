import classNames from './MeetupItem.module.css';
import Card from '../wrappers/Card';

const MeetupItem = (props) => {
  return (
    <li className={classNames.item}>
      <Card>
        <div className={classNames.image}>
          <img src={props.image} alt="" />
        </div>
        <div className={classNames.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classNames.actions}>
          <button>Add To Favorite</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
