export interface Course {
  courseId: number;
  courseTitle: string;
  courseCategory: string;
  coursePrice: number;
  ingredientPrice: number;
  reviewRating: number;
  chefName: string;
  courseImage: string;
  chefImage: string;
  courseDietary?: string[];
}