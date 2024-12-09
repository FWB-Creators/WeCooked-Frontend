'use client'
import { ErrorBoundary } from 'react-error-boundary'
import Navbar from '@/app/client/components/Navbar'
import GroupLearning from '@/app/client/components/group/GroupLearning'
import GroupCurvePage from '@/app/client/components/group/GroupCurvePage'
import Footer from '@/app/client/components/Footer'
import FAQPage from '@/app/client/components/FAQPage'
export default function GroupLearningPage() {
  return (
    <div>
      <Navbar />
      <ErrorBoundary fallback={<div className='flex justify-center'>Something went wrong</div>}>
        <section>
          <GroupLearning />
        </section>
        <section>
          <GroupCurvePage />
        </section>
        <section>
          <FAQPage />
        </section>
      </ErrorBoundary>
      <Footer />
    </div>
  )
}
