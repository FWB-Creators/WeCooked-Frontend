export interface Ingredient {
  name: string
  quantity?: SVGAnimatedNumber
  price?: number
}

export const ingredients: Ingredient[] = [
  { name: 'Spaghetti' },
  { name: 'Eggs' },
  { name: 'Pecorino Romano Cheese' },
  { name: 'Guanciale Black' },
  { name: 'Pepper' },
]