import React from 'react'
import Login from '../components/Login'
import { ErrorBoundary } from 'react-error-boundary'
import { Suspense } from 'react'

export default function login() {
  return (
    <div className="animate-fadeIn">
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Login />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
