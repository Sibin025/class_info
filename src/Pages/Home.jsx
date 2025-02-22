import { useEffect } from "react";
import MonthChangeSlider from "../components/MonthChangeSlider";
import DateDisplay from "../components/DateDisplay";
import SideBar from "../components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import {
  setYear,
  setMonth,
  setDatesList,
} from "../redux/slices/slotSelectionSlice";
import { getMonthData } from "../lib/utils";

const Home = () => {
  const { year, month, isAvailable } = useSelector(
    (store) => store.slotSelectData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const date = new Date();
    const monthNum = date.getMonth();
    const currentYear = date.getFullYear();
    dispatch(setYear(currentYear)); // seting the store with current year
    dispatch(setMonth(monthNum)); // seting the store with current month
  }, []);

  useEffect(() => {
    // getting the class info of the current month.
    const res = getMonthData(year, month);
    dispatch(setDatesList(res)); // setting the store with datesList according to the values of month and year
  }, [year, month]);

  return (
    <>
      <section className="md:mt-7 md:mx-10 section-container">
        <div className="m-2 xs:m6 min-w-[600px] xs:overflow-auto  box-border flex flex-col gap-4">
          <div className="flex justify-between w-full">
            <div className="w-[250px] py-4 bg-[#E8E1E9] h-min">
              <h1 className="text-black text-2xl font-bold text-center">
                OET Grammar
              </h1>
            </div>
            <div className="flex items-center flex-col gap-3">
              <span className="text-[#3C3C3C] text-4xl font-semibold">
                Monthly Schedule
              </span>
              <div>
                <MonthChangeSlider
                  year={year}
                  month={month}
                  isAvailable={isAvailable}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col xm:flex-row gap-3   xl:gap-6">
            {isAvailable ? (
              <div className="min-w-[600px] xs:w-full  xm:w-2/3">
                <DateDisplay />
              </div>
            ) : (
              <div className="min-w-[600px] min-h-[300px] xs:w-full  xm:w-2/3 flex-center bg-primary">
                <h1> Not Available</h1>
              </div>
            )}
            <div className="min-w-[500px] m-auto xs:w-full  xm:w-1/3 mt-7">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
