import React from 'react'
import Link from 'next/link'

const App = () => {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Next.js Course</h1>
      <Link href="counter" className='btn btn-accent'>
      Start
      </Link>
    </div>
  )
}

export default App