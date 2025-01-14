import { useSelector } from "react-redux";

const Box = ({ data, date, isDisabled = false }) => {
  const haveNightClass =
    data?.night_class_info !== undefined || data?.night_class_info !== null;
  const haveMorningClass =
    data?.morning_class_info !== undefined || data?.morning_class_info !== null;

  return (
    <div
      className={`p-2 w-full h-full flex flex-col text-[#4B4B4B] justify-between bg-tertiary gap-1`}
    >
      <div className="font-medium flex flex-col gap-[6px] min-h-[81px]">
        <div className="min-h-[39px]">
          {data?.morning_class_info && (
            <>
              <h1 className="font-semibold text-[15px]">
                Day {data?.morning_class_info?.day}
              </h1>
              <p className="text-xs">Morning</p>
            </>
          )}
        </div>

        <div className="min-h-[39px]">
          {data?.night_class_info && (
            <>
              <h1 className="font-semibold text-[15px]">
                Day {data?.night_class_info?.day}
              </h1>
              <p className="text-xs">Night</p>
            </>
          )}
        </div>
      </div>
      <div className="text-end font-semibold ">{date}</div>
    </div>
  );
};

export default Box;
