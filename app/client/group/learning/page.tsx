'use client'
import { ErrorBoundary } from 'react-error-boundary'
import Navbar from '../../components/Navbar'
import GroupLearning from '../../components/group/GroupLearning'
import GroupCurvePage from '../../components/group/GroupCurvePage'
import Footer from '../../components/Footer'
import FAQPage from '../../components/FAQPage'
export default function GroupLearningPage() {
  return (
    <div>
      <Navbar />
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
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
