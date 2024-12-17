import clock from '../assets/images/clock.svg';
import insta from '../assets/images/instagram.svg';
import whats from '../assets/images/whatsapp.svg';
import x from '../assets/images/X.svg';
import fb from '../assets/images/fb.svg';
import { months } from '../constants/constants';
import MonthShowCard from './MonthShowCard';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../redux/slices/commonDataSlice';
import { toast} from 'react-toastify';


const SideBar = () => {
  const {month:monthNum, selectedClasses } = useSelector((store)=> store.slotSelectData);
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    if(selectedClasses?.length < 1){
      toast.warning("Please select a slot",{autoClose:2500});
      return;
    }
    dispatch(toggleModal());
  }


  return (
    <div className='flex justify-between gap-[10px]'>
        <div className='flex flex-col gap-4 w-full'>
           <div className='bg-primary w-full px-2 py-2 flex min-h-[60px] max-h-[20%]'>
             <div className='border-r-2 border-r-[#A99BC6] flex-1 flex-center gap-4'>
               <img src={clock} alt="" />
               <span className='font-semibold'>09:00 hs</span>
             </div>
             <div className='flex-1 flex-center font-semibold'>
             06:00 hs
             </div>
           </div>
           <div className='p-8 bg-primary flex flex-col gap-6 h-[70%]'>
             {
                [1,2,3,3,5,6,7].map((item)=> (
                    <div key={item+"s"}>
                        <span className='text-xl font-semibold text-[#4D4253] me-2'>Day {item}: </span>
                        <span className='pt-2 text-sm'>Topic {item}</span>
                    </div>
                ))
             }
           </div>
           <button className='bg-secondary w-full p-4 text-white font-semibold' onClick={handleModalOpen}>Submit</button>
           <div className='flex justify-between items-center'>
             <div className='flex gap-1'>
               <img src={insta} alt="instagram" />
               <img src={fb} alt="meta" />
               <img src={x} alt="x" />
               <img src={whats} alt="whatsapp" />
             </div>
             <div className='text-[#424042] font-semibold text-[15px]'>
               For inquiry : +44 123456789
             </div>
           </div>
        </div>
        <div className='flex flex-col border items-stretch gap-[2px] p-1 bg-primary'>
          {
            months?.map((item, indx)=> (
              <MonthShowCard key={indx} month={item.slice(0,3)} isActive={indx == monthNum}/>
            ))
          }
        </div>
    </div>
  );
}

export default SideBar;