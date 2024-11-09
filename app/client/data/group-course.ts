import { Group } from "../types/group";

const parseDate = (dateStr: string): Date => {
  const cleanedDateStr = dateStr.replace('at', '').trim();
  const parsedDate = new Date(cleanedDateStr);
  return isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
};

export const group: Group[] = [
  {
    course_id: 0,
    title: 'Chef\'s Secrets - Mastering Pro Tips',
    date: parseDate('November 5, 2024, at 6:00 PM'),
    description: 'Pro Chef Tips That Will Make You Cook Like a Restaurant!',
    image: '/images/gordon.png'
  },
  {
    course_id: 1,
    title: 'Sweet and Savory Fusion - Perfect Pairings',
    date: parseDate('November 12, 2024, at 7:00 PM'),
    description: 'Learn how to pair sweet and savory flavors to create an impressive dish!',
    image: '/images/sweet.png'
  }
];