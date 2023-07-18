import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetups = () => {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(
      'https://react-meetups-app-9b92d-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((res) => res.json())
      .then((data) => {
        const fetchedMeetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          fetchedMeetups.push(meetup);
        }
        setLoading(false);
        setMeetups(fetchedMeetups);
      });
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>
      {!loading && <MeetupList meetups={meetups} />}
    </section>
  );
};

export default AllMeetups;
