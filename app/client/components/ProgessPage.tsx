import React from 'react';
import { progress } from '../data/progress';
import ProgressCard from './ProgressCard';

export default function ProgessPage() {
  return (
    <div className="flex flex-col justify-start py-12">
      <h1 className="text-3xl font-bold mb-2 text-white px-12">Video Courses</h1>
      <div className="mx-12">
        {progress.map((item, index) => (
          <ProgressCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}