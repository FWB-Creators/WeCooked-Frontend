import { Group } from "../types/group";

const parseDate = (dateStr: string): Date => {
  const cleanedDateStr = dateStr.replace('at', '').trim();
  const parsedDate = new Date(cleanedDateStr);
  return isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
};

export const group: Group[] = [
  {
    groupId: 0,
    groupTitle: "Chef's Secrets - Mastering Pro Tips",
    groupDetail: 'Pro Chef Tips That Will Make You Cook Like a Restaurant!',
    groupPrice: 350,
    groupNumberofparticipants: 10,
    groupDate: parseDate('November 5, 2024, at 6:00 PM'),
    groupCategory: 'Thai',
    groupLinkZoom: 'https://zoom.us/j/123456789',
    groupPicture: '/images/gordon.png',
    chefImage: '/images/chef.png',
    ChefName: 'Chef Gordon',
    reviewRating: 4.9,
    groupStatus: true,
  },
  {
    groupId: 1,
    groupTitle: 'Sweet and Savory Fusion - Perfect Pairings',
    groupDetail: 'Learn how to pair sweet and savory flavors to create an impressive dish!',
    groupPrice: 450,
    groupNumberofparticipants: 20,
    groupDate: parseDate('November 12, 2024, at 7:00 PM'),
    groupCategory: 'Japanese',
    groupLinkZoom: 'https://zoom.us/j/123456789',
    groupPicture: '/images/sweet.png',
    chefImage: '/images/chef.png',
    ChefName: 'Chef Nut',
    reviewRating: 4.4,
    groupStatus: true,
  },
  {
    groupId: 2,
    groupTitle: 'Vegan Delights - Healthy Cooking',
    groupDetail: 'Discover delicious and nutritious vegan recipes for a healthier lifestyle.',
    groupPrice: 400,
    groupNumberofparticipants: 15,
    groupDate: parseDate('November 15, 2024, at 5:30 PM'),
    groupCategory: 'Japanese',
    groupLinkZoom: 'https://zoom.us/j/123456789',
    groupPicture: '/images/japanese-food.png',
    chefImage: '/images/chef.png',
    ChefName: 'Chef May',
    reviewRating: 4.8,
    groupStatus: false,
  },
  {
    groupId: 3,
    groupTitle: 'Italian Pasta Masterclass',
    groupDetail: 'Learn the secrets to making authentic Italian pasta from scratch.',
    groupPrice: 500,
    groupNumberofparticipants: 12,
    groupDate: parseDate('November 18, 2024, at 6:00 PM'),
    groupCategory: 'Italian',
    groupLinkZoom: 'https://zoom.us/j/123456789',
    groupPicture: '/images/italian-food.png',
    chefImage: '/images/chef.png',
    ChefName: 'Chef Luca',
    reviewRating: 4.7,
    groupStatus: false,
  },
  {
    groupId: 4,
    groupTitle: 'BBQ Essentials - Grilling Techniques',
    groupDetail: 'Master the art of grilling and impress your guests with BBQ favorites.',
    groupPrice: 300,
    groupNumberofparticipants: 18,
    groupDate: parseDate('November 20, 2024, at 7:30 PM'),
    groupCategory: 'American',
    groupLinkZoom: 'https://zoom.us/j/123456789',
    groupPicture: '/images/american-food.png',
    chefImage: '/images/chef.png',
    ChefName: 'Chef Bob',
    reviewRating: 4.6,
    groupStatus: false,
  },
  {
    groupId: 5,
    groupTitle: 'French Pastry Workshop',
    groupDetail: 'Dive into the world of French pastries and create your own croissants!',
    groupPrice: 550,
    groupNumberofparticipants: 8,
    groupDate: parseDate('November 22, 2024, at 4:00 PM'),
    groupCategory: 'French',
    groupLinkZoom: 'https://zoom.us/j/123456789',
    groupPicture: '/images/french-food.png',
    chefImage: '/images/chef.png',
    ChefName: 'Chef Pierre',
    reviewRating: 5.0,
    groupStatus: false,
  },
  {
    groupId: 6,
    groupTitle: 'Mexican Street Food Fiesta',
    groupDetail: 'Experience the vibrant flavors of Mexico with street food classics.',
    groupPrice: 380,
    groupNumberofparticipants: 14,
    groupDate: parseDate('November 25, 2024, at 5:00 PM'),
    groupCategory: 'Mexican',
    groupLinkZoom: 'https://zoom.us/j/123456789',
    groupPicture: '/images/mexican-food.png',
    chefImage: '/images/chef.png',
    ChefName: 'Chef Maria',
    reviewRating: 4.5,
    groupStatus: false,
  },
  {
    groupId: 7,
    groupTitle: 'Sushi Rolling - Japanese Art',
    groupDetail: 'Learn how to roll sushi like a pro in this hands-on workshop.',
    groupPrice: 420,
    groupNumberofparticipants: 10,
    groupDate: parseDate('November 28, 2024, at 6:00 PM'),
    groupCategory: 'Japanese',
    groupLinkZoom: 'https://zoom.us/j/123456789',
    groupPicture: '/images/japanese-food.png',
    chefImage: '/images/chef.png',
    ChefName: 'Chef Yuki',
    reviewRating: 4.9,
    groupStatus: false,
  },
  {
    groupId: 8,
    groupTitle: 'Baking Basics - Perfect Bread Every Time',
    groupDetail: 'Master the basics of bread making with this step-by-step class.',
    groupPrice: 320,
    groupNumberofparticipants: 16,
    groupDate: parseDate('November 30, 2024, at 3:00 PM'),
    groupCategory: 'Mexican',
    groupLinkZoom: 'https://zoom.us/j/123456789',
    groupPicture: '/images/mexican-food.png',
    chefImage: '/images/chef.png',
    ChefName: 'Chef Anne',
    reviewRating: 4.7,
    groupStatus: false,
  },
  {
    groupId: 9,
    groupTitle: 'Thai Street Food - The Ultimate Guide',
    groupDetail: 'Explore the rich and bold flavors of authentic Thai street food.',
    groupPrice: 370,
    groupNumberofparticipants: 20,
    groupDate: parseDate('December 2, 2024, at 5:00 PM'),
    groupCategory: 'Thai',
    groupLinkZoom: 'https://zoom.us/j/123456789',
    groupPicture: '/images/thai-food.png',
    chefImage: '/images/chef.png',
    ChefName: 'Chef Somchai',
    reviewRating: 4.8,
    groupStatus: false,
  },
  {
    groupId: 10,
    groupTitle: 'Vegetarian Wonders - Cooking with Greens',
    groupDetail: 'Learn to create mouth-watering vegetarian dishes.',
    groupPrice: 350,
    groupNumberofparticipants: 15,
    groupDate: parseDate('December 5, 2024, at 6:00 PM'),
    groupCategory: 'Mexican',
    groupLinkZoom: 'https://zoom.us/j/123456789',
    groupPicture: '/images/mexican-food.png',
    chefImage: '/images/chef.png',
    ChefName: 'Chef Tanya',
    reviewRating: 4.6,
    groupStatus: false,
  },
  {
    groupId: 11,
    groupTitle: 'Indian Curry Mastery',
    groupDetail: 'Dive deep into the world of Indian spices and curry.',
    groupPrice: 420,
    groupNumberofparticipants: 12,
    groupDate: parseDate('December 10, 2024, at 7:00 PM'),
    groupCategory: 'Indian',
    groupLinkZoom: 'https://zoom.us/j/123456789',
    groupPicture: '/images/indian-food.png',
    chefImage: '/images/chef.png',
    ChefName: 'Chef Raj',
    reviewRating: 4.8,
    groupStatus: false,
  },
  {
    groupId: 12,
    groupTitle: 'Spanish Tapas Experience',
    groupDetail: 'Master the art of preparing traditional Spanish tapas.',
    groupPrice: 380,
    groupNumberofparticipants: 16,
    groupDate: parseDate('December 15, 2024, at 4:00 PM'),
    groupCategory: 'Italian',
    groupLinkZoom: 'https://zoom.us/j/123456789',
    groupPicture: '/images/italian-food.png',
    chefImage: '/images/chef.png',
    ChefName: 'Chef Carlos',
    reviewRating: 4.7,
    groupStatus: false,
  },
  {
    groupId: 13,
    groupTitle: 'Seafood Lovers - Gourmet Recipes',
    groupDetail: 'Prepare gourmet seafood dishes from start to finish.',
    groupPrice: 500,
    groupNumberofparticipants: 10,
    groupDate: parseDate('December 20, 2024, at 6:00 PM'),
    groupCategory: 'Italian',
    groupLinkZoom: 'https://zoom.us/j/123456789',
    groupPicture: '/images/italian-food.png',
    chefImage: '/images/chef.png',
    ChefName: 'Chef Leo',
    reviewRating: 4.9,
    groupStatus: false,
  },
  {
    groupId: 14,
    groupTitle: 'Italian Dessert Heaven',
    groupDetail: 'Learn to create mouthwatering Italian desserts.',
    groupPrice: 480,
    groupNumberofparticipants: 14,
    groupDate: parseDate('December 25, 2024, at 5:30 PM'),
    groupCategory: 'Italian',
    groupLinkZoom: 'https://zoom.us/j/123456789',
    groupPicture: '/images/italian-food.png',
    chefImage: '/images/chef.png',
    ChefName: 'Chef Giovanni',
    reviewRating: 4.6,
    groupStatus: false,
  },
  {
    groupId: 15,
    groupTitle: 'Gourmet Street Tacos',
    groupDetail: 'Learn to make gourmet street tacos with unique toppings.',
    groupPrice: 350,
    groupNumberofparticipants: 14,
    groupDate: parseDate('December 15, 2025, at 4:30 PM'),
    groupCategory: 'Mexican',
    groupLinkZoom: 'https://zoom.us/j/123456789',
    groupPicture: '/images/mexican-food.png',
    chefImage: '/images/chef.png',
    ChefName: 'Chef Pablo',
    reviewRating: 4.9,
    groupStatus: false,
  }
];