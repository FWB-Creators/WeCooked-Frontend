import { Progress } from "../types/progress";

export const progress: Progress[] = [
  {
    course_id: 0,
    title: 'La Trattoria - Classic Italian',
    timeInMins: 20,
    chef: {
      name: 'Chef John',
      image: '/images/chef.png'
    },
    progress: 100,
    image: '/images/ramachandra.png'
  },
  {
    course_id: 1,
    title: 'Mexican Madness - Burritos & Nachos',
    timeInMins: 45,
    chef: {
      name: 'Chef Marie',
      image: '/images/chef.png'
    },
    progress: 50,
    image: '/images/ramachandra.png'
  },
  {
    course_id: 2,
    title: 'Taco Tuesday - Lucha Libre Tacos',
    timeInMins: 30,
    chef: {
      name: 'Chef Marie',
      image: '/images/chef.png'
    },
    progress: 25,
    image: '/images/ramachandra.png'
  },
  {
    course_id: 3,
    title: 'Classic Bistro - French Favorites',
    timeInMins: 40,
    chef: {
      name: 'Chef Marie',
      image: '/images/chef.png'
    },
    progress: 75,
    image: '/images/ramachandra.png'
  },
  {
    course_id: 4,
    title: 'Tokyo Fusion - Japanese Bowls',
    timeInMins: 50,
    chef: {
      name: 'Chef Marie',
      image: '/images/chef.png'
    },
    progress: 0,
    image: '/images/ramachandra.png'
  }
];