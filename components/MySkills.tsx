import React from 'react'
const Skills = [
    {skill: 'Html',percentage: 100,},
    {skill: 'Css',percentage: 90,},
    {skill: 'JavaScript',percentage: 80,},
    {skill: 'React.js',percentage: 70,},
    {skill: 'Next.js',percentage: 60,},
    {skill: 'Python',percentage: 60,},
    {skill: 'C++',percentage: 50,},
]

const MySkills = () => {
    
  return (
    <div id='Skills'  className='md:px-[5%] px-8 bg-bg_primary3 rounded-md mb-[2rem]  py-[5rem] flex flex-row justify-center flex-wrap bg-cover'>
    <div className='flex flex-col justify-center gap-8 w-[80%]'>
    <h1 className='font-bold text-xl md:text-3xl self-center'>My Skills</h1>
    <p className=' self-center text-center px-2'>Some of the frameworks and programing language i know.</p>
    <div className='flex flex-col justify-center self-center w-full gap-5'>
      
        {Skills.map((skill)=>{
            return(
                <div key={skill.skill} className='flex w-full justify-between gap-5'>
                 <h1 className='font-bold w-[125px]'>{skill.skill}</h1>
            <div className='bg-bg_background w-full h-fit py-[5px] rounded-lg '>
                <div style={{width: `${skill.percentage}%`,}} className={`bg-bg_primary4 py-2  rounded-lg`}></div>
            </div>
            <h1 className='font-bold'>{skill.percentage}%</h1>
            </div>
            )
        })}
           
    </div>
    
    </div>
  </div>
  )
}

export default MySkills
