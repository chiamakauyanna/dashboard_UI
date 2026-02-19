import GoalsListCard from './cards/GoalsListCard'

const GoalsList = () => {
  return (
    <div className='rounded-[17px] border mt-4'>
      <p>Goals List</p>

      <div>
        <GoalsListCard/>
        <GoalsListCard/>
        <GoalsListCard/>
      </div>
    </div>
  )
}

export default GoalsList