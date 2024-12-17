import ScheduledClassInfo from '../components/ScheduledClassInfo';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const { scheduledClasses } = useSelector((store)=> store.userData);

  return (
    <div className='flex flex-col p-5 m-2 mt-5 max-w-[90%] mx-auto gap-8'>
     <div className='flex justify-between'>
        <h1 className='text-black text-2xl font-semibold'>Scheduled Classes</h1>
        <Link to={"/add-new-slot"}>
        <button className='bg-secondary w-[200px] p-4 text-white font-semibold'>Add New Slot</button>
        </Link>
     </div>
     <div className='flex flex-col gap-12'>
       {
        scheduledClasses?.length === 0 && <p className='text-lg text-gray-600 text-center mt-5'>
          No Scheduled Classes Found
        </p>
       }
       {
        scheduledClasses?.map((item, indx)=> (
          <ScheduledClassInfo key={indx+item?.monthInfo} monthInfo={item?.monthInfo} displayItems={item?.cards}/>
        ))
       }
     </div>
    </div>
  )
}

export default Home;