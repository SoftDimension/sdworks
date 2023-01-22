import React from 'react'
import {
    TrashIcon, CheckCircleIcon, XCircleIcon
} from "@heroicons/react/24/outline";
import { useState } from 'react';

function TaskShowingBar() {

    const [TaskBarShow, setTaskBarShow] = useState(false)

    return (
        <div className='flex justify-between bg-white items-center rounded mb-5'>
            {/* Task Name */}
            <div className='w-10/12 flex justify-between h-full p-5 cursor-pointer' onClick={() => { setTaskBarShow(!TaskBarShow) }}>
                <div >
                    Soft Diamension
                </div>
                {/* Last Date */}
                <div >
                    Date : 14/3/2023
                </div>
                {/* Project Name */}
                <div >
                    Project : None
                </div>
            </div>

            {/* Buttons */}
            <div className=''>
                <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
                    <CheckCircleIcon className='w-5' />
                </button>
                <button class="bg-rose-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-5">
                    <TrashIcon className='w-5' />
                </button>
            </div>
            {TaskBarShow == true ?
                <div className='w-screen h-screen absolute TaskBarBgColor top-0 left-0 flex justify-center items-center'>
                    <div className='w-screen h-screen absolute TaskBarBgColor top-0 left-0 flex justify-center items-center z-0' onClick={() => { setTaskBarShow(false) }}>
                    </div>
                    <div className='w-10/12 h-5/6 bg-white p-14 rounded-lg z-50 relative'>
                        <div className=''>
                            <XCircleIcon className='w-8 absolute top-0 right-0 text-rose-600 cursor-pointer' onClick={() => { setTaskBarShow(false) }} />
                        </div>
                        <div className='w-full h-full flex'>
                            <div className='w-5/12 h-full border-r border-slate-500'>
                                <div className='mb-5'>
                                    Name : 
                                </div>
                                <div className='mb-5'>
                                    Company Name : 
                                </div>
                                <div className='mb-5'>
                                    Developers : 
                                </div>
                                <div className='mb-5'>
                                    Project Leader : 
                                </div>
                                <div className='mb-5'>
                                    Your Position : 
                                </div>
                                <div className='mb-5'>
                                    Name : 
                                </div>

                            </div>
                            <div className='pl-10 w-7/12 h-full '>
                                <div className='mb-5'>
                                    Date : 
                                </div>
                                <div className='mb-5'>
                                    Last Day : 
                                </div>
                                <div className='mb-5'>
                                    Days Remaining : 
                                </div>
                                <div className='mb-5'>
                                    Work : 
                                </div>

                            </div>
                        </div>
                    </div>
                </div> : null
            }
        </div>
    )
}

export default TaskShowingBar