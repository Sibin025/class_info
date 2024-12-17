import { useDispatch, useSelector } from "react-redux";
import { removeSeletedClass } from "../redux/slices/slotSelectionSlice";
import { closeModal } from "../redux/slices/commonDataSlice";

const DisplayBox = ({itemNum, data}) => {
  const { selectedClasses} = useSelector((store)=> store.slotSelectData);

  const dispatch = useDispatch();

  const handleItemDelete = () => {
      dispatch(removeSeletedClass(data?.id))

      if(selectedClasses.length === 1){ // closing the modal if no slot are  selected
        dispatch(closeModal())
      }
  };

  return (
    <div className="max-w-[200px] min-w-[160px]">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">{itemNum + "st Schedule"}</p>
        <div className="bg-secondary text-primary p-6 py-8 rounded-md flex gap-5">
          <span className="font-semibold text-lg flex-center">{data?.date}</span>
          <div className="flex flex-col text-[16px] justify-center">
            <span className="font-medium text-[15px]">{data?.dayInfo}</span>
            <span className="text-[15px]">{data?.topicInfo}</span>
          </div>
        </div>
      </div>
      <button className='mt-5 border border-solid font-semibold border-black rounded w-full'
       onClick={handleItemDelete}
      >Delete</button>
    </div>
  );
};

export default DisplayBox;
