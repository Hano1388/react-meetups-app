import MeetupList from '../components/meetups/MeetupList';

const FAKE_DATA = [
  {
    id: 1,
    title: 'Broderskab (Brotherhood)',
    image: 'http://dummyimage.com/234x100.png/cc0000/ffffff',
    address: '30798 Stoughton Plaza',
    description: 'recontextualize user-centric methodologies',
  },
  {
    id: 2,
    title: 'Colourful (Karafuru)',
    image: 'http://dummyimage.com/187x100.png/cc0000/ffffff',
    address: '2 Meadow Valley Drive',
    description: 'synergize dynamic convergence',
  },
  {
    id: 3,
    title: 'I Have Found It (Kandukondain Kandukondain)',
    image: 'http://dummyimage.com/228x100.png/5fa2dd/ffffff',
    address: '30287 Elka Court',
    description: 'deliver customized niches',
  },
  {
    id: 4,
    title: 'Offside',
    image: 'http://dummyimage.com/239x100.png/dddddd/000000',
    address: '5 Spaight Crossing',
    description: 'innovate plug-and-play relationships',
  },
  {
    id: 5,
    title: 'Germany Pale Mother',
    image: 'http://dummyimage.com/107x100.png/dddddd/000000',
    address: '23450 Amoth Crossing',
    description: 'reintermediate cutting-edge convergence',
  },
  {
    id: 6,
    title: 'Pokémon Origins',
    image: 'http://dummyimage.com/163x100.png/5fa2dd/ffffff',
    address: '0 Grasskamp Alley',
    description: 'seize out-of-the-box markets',
  },
  {
    id: 7,
    title: 'Boeing, Boeing',
    image: 'http://dummyimage.com/142x100.png/5fa2dd/ffffff',
    address: '0500 Fallview Place',
    description: 'deliver 24/7 bandwidth',
  },
];
const AllMeetups = () => {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={FAKE_DATA} />
    </section>
  );
};

export default AllMeetups;
