export interface Ingredient {
  name: string
  unit?: string // e.g., 'g', 'ml', 'pieces'
  quantity?: number // Amount needed for the recipe
  description?: string // Additional details or substitutes
  category?: string // e.g., 'dairy', 'meat', 'pasta'
}

export const ingredients: Ingredient[] = [
  { name: 'Spaghetti' },
  { name: 'Eggs' },
  { name: 'Pecorino Romano Cheese' },
  { name: 'Guanciale Black' },
  { name: 'Pepper' },
]