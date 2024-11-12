export interface Course {
  courseId: number;
  courseTitle: string;
  courseCategory: string;
  coursePrice: number;
  reviewRating: number;
  ChefName: string;
  courseImage: string;
  chefImage: string;
  courseDietary?: string[];
}