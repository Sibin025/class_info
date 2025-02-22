import { useSelector } from "react-redux";

const Box = ({ data, date, isDisabled = false }) => {
  return (
    <div
      className={`p-2 w-full h-full flex flex-col text-[#4B4B4B] justify-betweengap-1 ${date === '_' ? 'bg-primary' : 'bg-tertiary'}`}
    >
      <div className="font-medium flex flex-col gap-[6px] min-h-[81px]">
        <div className="min-h-[39px]">
          {data?.morning_class_info && (
            <>
              <h1 className="font-semibold text-[15.5px] leading-[18px]">
                Day {data?.morning_class_info?.day}
              </h1>
              <p className="text-xs">Morning</p>
            </>
          )}
        </div>

        <div className="min-h-[39px]">
          {data?.night_class_info && (
            <>
              <h1 className="font-semibold text-[15.5px] leading-[18px]">
                Day {data?.night_class_info?.day}
              </h1>
              <p className="text-xs">Night</p>
            </>
          )}
        </div>
      </div>
      <div className="text-end font-semibold">{date}</div>
    </div>
  );
};

export default Box;
