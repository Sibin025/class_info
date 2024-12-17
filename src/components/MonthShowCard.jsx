

const MonthShowCard = ({month, isActive}) => {
  return (
    <div className={`w-full flex-center h-auto writing-vertical p-2 text-sm flex-1 text-[#3C3C3C] ${isActive ? 'font-semibold bg-[#00000000]' : 'bg-[#E8D6E2]' }`}>
      {month}
    </div>
  );
};

export default MonthShowCard;
