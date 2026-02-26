import React, { useState } from 'react'

function StudentCard({name,cgpa,id,phone,children}){

    let [showDetail,detailsSetter] = useState(false);

    function toggler() {
        detailsSetter(prev => !prev)
    }

    return(
        <div className="card flex flex-col gap-[2px] bg-green-200 max-w-[220px] px-5 py-5 rounded-lg">
            <p className='name text-[1.1rem]' >Name : {name}</p>
            <p className='ID text-[1.1rem]' >ID : {id}</p>
            <p className='cgpa text-[1.1rem]' >CGPA : {cgpa}</p>
            <button onClick={toggler} className='bg-blue-500 mt-4 w-[8rem] px-3 py-1 rounded-sm text-center text-white hover:bg-blue-700 cursor-pointer'>
                {showDetail ? 'Hide Details' : 'Show Details' }
            </button>
            { showDetail && <h1 className='w-full text-center' >{children}{phone} </h1>  }
        </div>
    )
}

export default StudentCard;