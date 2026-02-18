import DietReviewCard from './cards/DietReviewCard'

const DietReviews = () => {
  return (
    <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      <DietReviewCard/>
      <DietReviewCard/>
      <DietReviewCard/>
      <DietReviewCard/>
    </div>
  )
}

export default DietReviews