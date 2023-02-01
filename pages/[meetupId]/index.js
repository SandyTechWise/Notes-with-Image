import MeetupDetail from '../../components/meetups/MeetupDetail';
import { Fragment } from 'react';

const MeetupDetails = () => {
  return (
    <Fragment>
      <MeetupDetail
        image="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="First Meetup"
        address="1/22, Some Address, Some Ooru"
        description="Idhudhaan first Meetup"
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        id: meetupId,
        title: 'First Meetup',
        address: '1/22, Some Address, Some Ooru',
        description: 'Idhudhaan first Meetup',
      },
    },
  };
}

export default MeetupDetails;

// id: 'm1',
// title: 'First Meetup',
// image: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
// address: '1/22, Some Address, Some Ooru',
// description: 'Idhudhaan first Meetup',
