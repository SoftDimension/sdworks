import React from 'react'
import TaskShowingBar from './TaskShowingBar'

function ProjectPage() {
  return (
    <div className='Navbar__Wrapper mr-5 mt-5 overflow-y-scroll overflow-x-hidden'>
      <div className='h-96 bg-slate-300 rounded-lg mb-10'>
        <div className='bg-white w-full h-10 rounded-lg flex px-5 items-center mb-3'>
          Project Name
        </div>
        <div className='p-5 w-full h-5/6 overflow-y-scroll'>
          <TaskShowingBar />
          <TaskShowingBar />
          <TaskShowingBar />
          <TaskShowingBar />
          <TaskShowingBar />
          <TaskShowingBar />
        </div>

      </div>
      <div className='h-96 bg-slate-300 rounded-lg mb-10'>
        <div className='bg-white w-full h-10 rounded-lg flex px-5 items-center mb-3'>
          Project Name
        </div>
        <div className='p-5 w-full h-5/6 overflow-y-scroll'>
          <TaskShowingBar />
          <TaskShowingBar />
          <TaskShowingBar />
          <TaskShowingBar />
          <TaskShowingBar />
          <TaskShowingBar />
        </div>

      </div>
    </div>
  )
}

export default ProjectPage
