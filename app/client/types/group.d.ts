export interface Group {
  groupId: number
  groupTitle: string
  groupDetail: string
  groupPrice: number
  groupNumberofparticipants: number
  groupDate: Date
  groupCategory: string
  groupLinkZoom?: string
  groupPicture: string
  chefImage: string
  chefName: string
  reviewRating: number
  groupStatus: boolean
  groupChefId?: number
  groupPackId?: string
}