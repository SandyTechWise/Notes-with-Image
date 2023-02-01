import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    address: '1/22, Some Street, Some Place',
    description: 'This is first Meetup-expecting second meetup',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image:
      'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    address: '1/23, Some Street, Some Place',
    description: 'This is second meetup-expecting third meetup',
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//     //fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
    //fetch data from API
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
        revalidate: 10,
    }
}

export default HomePage;
