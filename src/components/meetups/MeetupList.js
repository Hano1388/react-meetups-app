import MeetupItem from './MeetupItem';
import classNames from './MeetupList.module.css';

const MeetupList = ({ meetups }) => {
  return (
    <ul className={classNames.list}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} {...meetup} />
      ))}
    </ul>
  );
};

export default MeetupList;
