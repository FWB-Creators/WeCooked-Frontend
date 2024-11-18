import { GroupData } from '../types/groupdata'

const parseDate = (dateStr: string): Date => {
  const cleanedDateStr = dateStr.replace('at', '').trim()
  const parsedDate = new Date(cleanedDateStr)
  return isNaN(parsedDate.getTime()) ? new Date() : parsedDate
}

export const groupData: GroupData[] = [
  {
    groupId: 0,
    groupEnrolledId: 123,
    groupImage: '/images/thumbnail.png',
    groupTitle: 'Pork Chop Steak',
    groupPrice: 150,
    groupRevenue: 3000,
    groupParticipant: 30,
    groupDate: parseDate('November 14, 2024'),
    userProfile: '/images/nut.png',
    name: 'John',
    surname: 'Doe',
    reviewDetail: 'Delicious and easy to cook!',
  },
  {
    groupId: 1,
    groupEnrolledId: 123,
    groupImage: '/images/thumbnail.png',
    groupTitle: 'Chicken Parmesan',
    groupPrice: 200,
    groupRevenue: 4000,
    groupParticipant: 40,
    groupDate: parseDate('October 5, 2024'),
    userProfile: '/images/nut.png',
    name: 'Jane',
    surname: 'Smith',
    reviewDetail: 'Tasty and well-loved dish!',
  },
  {
    groupId: 2,
    groupEnrolledId: 123,
    groupImage: '/images/thumbnail.png',
    groupTitle: 'Grilled Salmon',
    groupPrice: 250,
    groupRevenue: 6250,
    groupParticipant: 25,
    groupDate: parseDate('September 20, 2024'),
    userProfile: '/images/nut.png',
    name: 'Alice',
    surname: 'Johnson',
    reviewDetail: 'Perfectly cooked salmon!',
  },
  {
    groupId: 3,
    groupEnrolledId: 123,
    groupImage: '/images/thumbnail.png',
    groupTitle: 'Vegetarian Pizza',
    groupPrice: 120,
    groupRevenue: 2400,
    groupParticipant: 20,
    groupDate: parseDate('August 15, 2024'),
    userProfile: '/images/nut.png',
    name: 'Bob',
    surname: 'Williams',
    reviewDetail: 'Great vegetarian option!',
  },
  {
    groupId: 4,
    groupEnrolledId: 123,
    groupImage: '/images/thumbnail.png',
    groupTitle: 'Beef Wellington',
    groupPrice: 350,
    groupRevenue: 10500,
    groupParticipant: 30,
    groupDate: parseDate('July 10, 2024'),
    userProfile: '/images/nut.png',
    name: 'Charlie',
    surname: 'Brown',
    reviewDetail: 'A true classic dish!',
  },
  {
    groupId: 5,
    groupEnrolledId: 123,
    groupImage: '/images/thumbnail.png',
    groupTitle: 'Spaghetti Carbonara',
    groupPrice: 180,
    groupRevenue: 5400,
    groupParticipant: 30,
    groupDate: parseDate('June 18, 2024'),
    userProfile: '/images/nut.png',
    name: 'David',
    surname: 'Davis',
    reviewDetail: 'Simple but delicious!',
  },
  {
    groupId: 6,
    groupEnrolledId: 123,
    groupImage: '/images/thumbnail.png',
    groupTitle: 'Tacos Al Pastor',
    groupPrice: 130,
    groupRevenue: 3900,
    groupParticipant: 30,
    groupDate: parseDate('May 22, 2024'),
    userProfile: '/images/nut.png',
    name: 'Eva',
    surname: 'Miller',
    reviewDetail: 'A fantastic taco recipe!',
  },
  {
    groupId: 7,
    groupEnrolledId: 123,
    groupImage: '/images/thumbnail.png',
    groupTitle: 'Butter Chicken Curry',
    groupPrice: 220,
    groupRevenue: 6600,
    groupParticipant: 30,
    groupDate: parseDate('April 12, 2024'),
    userProfile: '/images/nut.png',
    name: 'Frank',
    surname: 'Wilson',
    reviewDetail: 'Rich and creamy curry!',
  },
  {
    groupId: 8,
    groupEnrolledId: 123,
    groupImage: '/images/thumbnail.png',
    groupTitle: 'Sushi Masterclass',
    groupPrice: 300,
    groupRevenue: 9000,
    groupParticipant: 30,
    groupDate: parseDate('March 3, 2024'),
    userProfile: '/images/nut.png',
    name: 'Grace',
    surname: 'Moore',
    reviewDetail: 'A must-try for sushi lovers!',
  },
  {
    groupId: 9,
    groupEnrolledId: 123,
    groupImage: '/images/thumbnail.png',
    groupTitle: 'French Pastry Basics',
    groupPrice: 280,
    groupRevenue: 5600,
    groupParticipant: 20,
    groupDate: parseDate('February 27, 2024'),
    userProfile: '/images/nut.png',
    name: 'Hannah',
    surname: 'Taylor',
    reviewDetail: 'Wonderful pastry techniques!',
  },
  {
    groupId: 10,
    groupEnrolledId: 123,
    groupImage: '/images/thumbnail.png',
    groupTitle: 'BBQ Ribs Special',
    groupPrice: 250,
    groupRevenue: 7500,
    groupParticipant: 30,
    groupDate: parseDate('January 16, 2024'),
    userProfile: '/images/nut.png',
    name: 'Isaac',
    surname: 'Anderson',
    reviewDetail: 'The ribs were mouthwatering!',
  },
  {
    groupId: 11,
    groupEnrolledId: 123,
    groupImage: '/images/thumbnail.png',
    groupTitle: 'Vegan Smoothies',
    groupPrice: 100,
    groupRevenue: 2000,
    groupParticipant: 20,
    groupDate: parseDate('December 5, 2023'),
    userProfile: '/images/nut.png',
    name: 'Jack',
    surname: 'Thomas',
    reviewDetail: 'Refreshing and healthy!',
  },
  {
    groupId: 12,
    groupEnrolledId: 123,
    groupImage: '/images/thumbnail.png',
    groupTitle: 'Dim Sum Delights',
    groupPrice: 270,
    groupRevenue: 8100,
    groupParticipant: 30,
    groupDate: parseDate('November 10, 2023'),
    userProfile: '/images/nut.png',
    name: 'Kathy',
    surname: 'Jackson',
    reviewDetail: 'A delightful dim sum experience!',
  },
  {
    groupId: 13,
    groupEnrolledId: 123,
    groupImage: '/images/thumbnail.png',
    groupTitle: 'Thai Street Food',
    groupPrice: 160,
    groupRevenue: 3200,
    groupParticipant: 20,
    groupDate: parseDate('October 22, 2023'),
    userProfile: '/images/nut.png',
    name: 'Liam',
    surname: 'White',
    reviewDetail: 'Great street food experience!',
  },
  {
    groupId: 14,
    groupEnrolledId: 123,
    groupImage: '/images/thumbnail.png',
    groupTitle: 'Classic French Cuisine',
    groupPrice: 320,
    groupRevenue: 9600,
    groupParticipant: 30,
    groupDate: parseDate('September 30, 2023'),
    userProfile: '/images/nut.png',
    name: 'Mona',
    surname: 'Harris',
    reviewDetail: 'Classic French dishes done right!',
  },
  {
    groupId: 15,
    groupEnrolledId: 123,
    groupImage: '/images/thumbnail.png',
    groupTitle: 'Authentic Italian Pasta',
    groupPrice: 200,
    groupRevenue: 6000,
    groupParticipant: 30,
    groupDate: parseDate('August 8, 2023'),
    userProfile: '/images/nut.png',
    name: 'Nathan',
    surname: 'Martin',
    reviewDetail: 'Delicious and authentic pasta!',
  },
]