import React from 'react'
import StudentCard from './components/StudentCard';

function App() {

const students = [
  { id: 1, name: "Ali", cgpa: 3.1, phone: "0301-1111111" },
  { id: 2, name: "Sara", cgpa: 3.6, phone: "0302-2222222" },
  { id: 3, name: "Fasih", cgpa: 3.4, phone: "0303-3333333" },
  { id: 4, name: "Rian", cgpa: 3.8, phone: "0304-4444444" },
];

  return (
    <>
      <h1 className='bg-pink-200'>
        <div className="max-w-[1320px] text-center py-2 text-[1.9rem] font-semibold mx-auto">Results</div>
      </h1>
      <div className="flex justify-center gap-4 flex-wrap items-start max-w-[1020px] mx-auto px-3 py-6 ">
          {students.map((stu)=>(
                <StudentCard key={stu.id}  name={stu.name} id={stu.id} cgpa={stu.cgpa} phone={stu.phone} >
                  { stu.cgpa > 3.5  && <p className='text-yellow-500' >Position Holder</p>}
                </StudentCard>
          ))}
      </div>
    </>
  )
}

export default App
