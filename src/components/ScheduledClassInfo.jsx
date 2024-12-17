import InfoItem from "./InfoItem";

const ScheduledClassInfo = ({monthInfo, displayItems}) => {
  return (
    <div className="flex gap-[5rem]">
      <div className="w-1/6 text-black font-semibold text-lg items-center flex">
         {monthInfo}
      </div>
      <div className="flex w-5/6 gap-5 flex-wrap">
        {
          displayItems?.map((item, index)=> (
            <InfoItem key={index} day={item?.dayInfo} topic={item?.topicInfo} date={item?.date} data={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default ScheduledClassInfo;