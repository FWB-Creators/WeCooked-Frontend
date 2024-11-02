import { courses as fullmockdata} from '../data/full-mock-data';
import { Course } from '../types/courses'
import { FoodType } from '../types/foodtype';

const courses: Course[] = [...fullmockdata];

const courseCountByCuisine: Record<string, number> = courses.reduce((acc, course) => {
  if (acc[course.cuisine]) {
    acc[course.cuisine]++;
  } else {
    acc[course.cuisine] = 1;
  }
  return acc;
}, {} as Record<string, number>);

export const foodtype: FoodType[] = [
  {
    title: 'Italian Food',
    cuisine: 'Italian',
    total_course: courseCountByCuisine['Italian'] || 0,
    imageSrc: '/images/italian-food.png',
  },
  {
    title: 'Thai Food',
    cuisine: 'Thai',
    total_course: courseCountByCuisine['Thai'] || 0,
    imageSrc: '/images/thai-food.png',
  },
  {
    title: 'Japanese Food',
    cuisine: 'Japan',
    total_course: courseCountByCuisine['Japan'] || 0,
    imageSrc: '/images/japanese-food.png',
  },
  {
    title: 'Indian Food',
    cuisine: 'India',
    total_course: courseCountByCuisine['India'] || 0,
    imageSrc: '/images/indian-food.png',
  },
  {
    title: 'French Food',
    cuisine: 'French',
    total_course: courseCountByCuisine['French'] || 0,
    imageSrc: '/images/french-food.png',
  },
  {
    title: 'Mexican Food',
    cuisine: 'Mexican',
    total_course: courseCountByCuisine['Mexican'] || 0,
    imageSrc: '/images/mexican-food.png',
  },
  {
    title: 'American Food',
    cuisine: 'American',
    total_course: courseCountByCuisine['American'] || 0,
    imageSrc: '/images/american-food.png',
  }
];