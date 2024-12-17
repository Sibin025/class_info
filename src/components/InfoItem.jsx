import { useDispatch } from 'react-redux';
import { removeCardFromItem } from '../redux/slices/userSlice';

const InfoItem = ({day, topic, date , data}) => {
  const dispatch = useDispatch();

  const handleDelete = ()=> {
      const { month, year, id} = data;
      const payload = {
        month: month,
        year: year,
        id: id
      }
      dispatch(removeCardFromItem(payload));
  };

  return (
    <div className="">
        <div className='p-4 bg-tertiary w-[135px] h-[130px] flex flex-col justify-between'>
            <div className='text-[#4B4B4B] font-medium'>
                <h1 className='font-semibold text-lg'>{day}</h1>
                <p className='text-sm'>{topic}</p>
            </div>
            <div className='text-end font-semibold'>
               {date}
            </div>
        </div>
        <button className='mt-5 border border-solid font-semibold border-black rounded w-full' 
        onClick={handleDelete}
        >Delete</button>
    </div>
  )
}

export default InfoItem;