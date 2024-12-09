import Image from 'next/image'
import { useParams } from 'next/navigation'
import { group } from '@/app/client/data/group-course'

export default function GroupLearning() {

  const { groupId } = useParams<{ groupId: string }>() // TypeScript typing for useParams
  const ID = parseInt(groupId)
  const groupTitle = group[ID].groupTitle
  const chefImage = group[ID].chefImage
  const chefName = group[ID].chefName
  const groupPicture = group[ID].groupPicture
  const groupDetail = group[ID].groupDetail
  const groupDate = "November 15, 2024"
  

  return (
    <div className="h-[750px] relative w-full flex flex-col items-center">
      <div className="absolute left-24 top-[144px] items-center justify-center max-w-[500px] max-h-[500px] w-[500px] h-[500px] overflow-hidden rounded-3xl">
        <Image
          src={groupPicture}
          alt="Cooked Image"
          width={750}
          height={750}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="absolute right-20 top-44 z-10 max-w-[45%]">
        <h3 className="py-1.5 text-2xl font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
          {groupDate}
        </h3>
        <h1 className="py-1.5 text-6xl font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
          {groupTitle}
        </h1>
        <h2 className="py-1.5 text-5xl font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
          Online Workshop
        </h2>
        <p className="text-xl max-w-2xl pt-12">{groupDetail}</p>
        <div className="flex items-center pt-8">
          <div className="flex items-center rounded-full w-11 h-11">
            <Image
              src={chefImage}
              alt="Profile picture of chef"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <p className="px-2 text-lg">Instructor:</p>
          <p className="text-lg underline underline-offset-4">{chefName}</p>
        </div>
      </div>
    </div>
  )
}
