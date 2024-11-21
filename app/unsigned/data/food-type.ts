import { courses as fullmockdata} from '../data/full-mock-data';
import { Course } from '../types/courses'
import { FoodType } from '../types/foodtype';

const courses: Course[] = [...fullmockdata];

const courseCountBycourseCategory: Record<string, number> = courses.reduce((acc, course) => {
  if (acc[course.courseCategory]) {
    acc[course.courseCategory]++;
  } else {
    acc[course.courseCategory] = 1;
  }
  return acc;
}, {} as Record<string, number>);

export const foodtype: FoodType[] = [
  {
    courseTitle: 'Italian Food',
    courseCategory: 'Italian',
    total_course: courseCountBycourseCategory['Italian'] || 0,
    courseImage: '/images/italian-food.png',
  },
  {
    courseTitle: 'Thai Food',
    courseCategory: 'Thai',
    total_course: courseCountBycourseCategory['Thai'] || 0,
    courseImage: '/images/thai-food.png',
  },
  {
    courseTitle: 'Japanese Food',
    courseCategory: 'Japanese',
    total_course: courseCountBycourseCategory['Japanese'] || 0,
    courseImage: '/images/japanese-food.png',
  },
  {
    courseTitle: 'Indian Food',
    courseCategory: 'Indian',
    total_course: courseCountBycourseCategory['Indian'] || 0,
    courseImage: '/images/indian-food.png',
  },
  {
    courseTitle: 'French Food',
    courseCategory: 'French',
    total_course: courseCountBycourseCategory['French'] || 0,
    courseImage: '/images/french-food.png',
  },
  {
    courseTitle: 'Mexican Food',
    courseCategory: 'Mexican',
    total_course: courseCountBycourseCategory['Mexican'] || 0,
    courseImage: '/images/mexican-food.png',
  },
  {
    courseTitle: 'American Food',
    courseCategory: 'American',
    total_course: courseCountBycourseCategory['American'] || 0,
    courseImage: '/images/american-food.png',
  }
];