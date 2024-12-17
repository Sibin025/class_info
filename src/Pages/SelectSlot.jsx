import { useEffect} from "react";
import MonthChangeSlider from "../components/MonthChangeSlider";
import DateDisplay from "../components/DateDisplay";
import SideBar from "../components/SideBar";
import { getDaysInMonth } from "../lib/helper";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setYear, setMonth, setDatesList } from "../redux/slices/slotSelectionSlice";
import { getDaysAndInfoOFAMonth } from "../lib/utils";

const SelectSlot = () => {
  const { year, month } = useSelector((store)=> store.slotSelectData);
  const dispatch = useDispatch();

  useEffect(() => {
    const date = new Date();
    const monthNum = date.getMonth();
    const currentYear = date.getFullYear();
    dispatch(setYear(currentYear)) // seting the store with current year
    dispatch(setMonth(monthNum)) // seting the store with current month
  },[]);

  useEffect(() => {
    const res = getDaysInMonth(year, month);
    const res1 = getDaysAndInfoOFAMonth(year, month);
    console.log(res1);
    console.log("res")
    dispatch(setDatesList(res1)); // seting the store with datesList according to the values of month and year
  }, [year, month]);

  return (
    <>
      <div className="m-6  box-border flex flex-col gap-4">
        <div className="flex justify-between w-full">
          <h1 className="text-black text-2xl font-bold">OET Grammar</h1>
          <div className="flex items-center flex-col gap-3">
            <span className="text-[#3C3C3C] text-2xl font-semibold">
              Monthly Schedule
            </span>
            <div>
              <MonthChangeSlider
                year={year}
                month={month}

              />
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="w-2/3">
            <DateDisplay />
          </div>
          <div className="w-1/3 mt-7">
            <SideBar />
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
};

export default SelectSlot;
