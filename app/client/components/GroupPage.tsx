import Image from 'next/image';
import { group } from '../data/group-course';
import GroupCard from './GroupCard';

export default function GroupPage() {
  return (
    <div className="relative flex flex-col justify-start py-12">
      <h1 className="text-3xl font-bold mb-2 text-white px-12">Group Courses</h1>
        <div className="mx-12">
          {group.length === 0 && (
          <p className="text-white">No group courses available.</p>
        )}
        {group.map((item, index) => (
          <GroupCard key={index} {...item} />
        ))}
      </div>
      <Image src="/images/pancake.png" alt="pancake" width={1200} height={80} className="absolute -right-52 bottom-0" />
    </div>
  );
}