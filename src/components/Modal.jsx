import { useEffect } from "react";
import close_icon from "../assets/images/close-btn.svg";
import DisplayBox from "./DisplayBox";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/slices/commonDataSlice";
import { addItemToScheduledClasses } from "../redux/slices/userSlice";
import { months } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { clearSelectedClasses } from "../redux/slices/slotSelectionSlice";

const Modal = () => {
  const { commonData, slotSelectData } = useSelector((store) => store);
  const { isModal } = commonData;
  const { selectedClasses } = slotSelectData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const actionsAfterSubmit = () => {
    dispatch(clearSelectedClasses());
    handleCloseModal();
    navigate("/");
  };

  const handleSubmit = () => {
    const { year, month } = selectedClasses[0];

    const payload = {
      year: year,
      month: month,
      monthInfo: `${months[month]} ${year}`,
      cards: selectedClasses,
    };
    dispatch(addItemToScheduledClasses(payload));
    actionsAfterSubmit();
  };

  useEffect(() => {
    // making the body fixed when the modal is open and vice versa
    const bodyElement = document.querySelector("body");
    if (isModal) {
      bodyElement.classList.add("fixed");
    }

    return () => {
      bodyElement.classList.remove("fixed");
    };
  }, [isModal]);

  return (
    <div
      className={`h-screen w-full flex-center absolute inset-0 box-border z-10 transition ${
        !isModal ? " hidden-modal" : " show-modal"
      } `}
    >
      <div className="overlay absolute inset-0 opacity-90 bg-black "></div>
      <div className="modal w-[90%] bg-white min-h-[75%]  rounded-2xl relative z-10 backdrop-blur-md p-10">
        <img
          className="absolute -right-1 -top-12 cursor-pointer"
          onClick={handleCloseModal}
          src={close_icon}
        ></img>
        <div className="h-full w-full flex flex-col gap-10">
          <h1 className="text-black text-2xl font-bold text-center">
            Slelcted Slots
          </h1>
          <div className="flex gap-5 flex-wrap">
            {selectedClasses?.map((item, indx) => (
              <DisplayBox key={item?.id} itemNum={indx + 1} data={item} />
            ))}
          </div>
          <div className="flex gap-6 mt-8 justify-center">
            <button
              className="bg-[#D6D6D6] w-[200px] h-[70px] p-4 text-black font-semibold"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
            <button
              className="bg-secondary w-[200px] h-[70px] p-4 text-white font-semibold"
              onClick={handleSubmit}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
