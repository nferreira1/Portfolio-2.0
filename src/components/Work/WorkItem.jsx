/* eslint-disable react/prop-types */
const WorkItem = ({ year, company, title, duration, details }) => {
  return (
    <ol className='flex flex-col relative border-l border-stone-200 md:flex-row'>
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' ></div>
        <p className='flex flex-wrap gap-4 flex-row justify-start text-xs md:text-sm mb-2'>
          <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001B5E] rounded-md'>{year}</span>
          <span className='text-lg font-semibold text-[#001B5E]'>{company}</span>
          <span className='my-1 text-sm font-normal text-stone-400'>{duration}</span>
        </p>
        <span className='text-md font-semibold text-[#001B5E]'>{title}</span>
        <p className='my-2 text-base font-normal text-stone-500'>{details}</p>
      </li>
    </ol>
  )
}

export default WorkItem