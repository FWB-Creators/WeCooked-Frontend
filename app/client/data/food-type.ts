import { courses as popularCourses } from '../data/most-popular-course'
import { courses as newCourses } from '../data/new-course'
import { courses as topCourses } from '../data/top-course'
import { courses as personalCourses } from '../data/personal-course'
import { courses as recentlyCourses } from '../data/recently-course'
import { courses as recommendCourses } from '../data/recommended-for-you'

const courses = [
  ...popularCourses,
  ...newCourses,
  ...topCourses,
  ...personalCourses,
  ...recentlyCourses,
  ...recommendCourses,
]

const courseCountByCuisine: Record<string, number> = courses.reduce((acc, course) => {
  if (acc[course.cuisine]) {
    acc[course.cuisine]++;
  } else {
    acc[course.cuisine] = 1;
  }
  return acc;
}, {} as Record<string, number>);

interface FoodType {
    title: string;
    cuisine: string;
    total_course: number;
    imageSrc: string;
  }
  
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