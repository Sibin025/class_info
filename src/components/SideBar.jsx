import clock from "../assets/images/clock.svg";
import insta from "../assets/images/instagram.svg";
import whats from "../assets/images/whatsapp.svg";
import x from "../assets/images/X.svg";
import fb from "../assets/images/fb.svg";
import { months } from "../constants/constants";
import MonthShowCard from "./MonthShowCard";
import { useSelector } from "react-redux";

import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { month: monthNum } = useSelector((store) => store.slotSelectData);

  const classContents = [
    {
      day: "DAY 1",
      content: "Basics of Grammar and Sentence Structure",
    },
    {
      day: "DAY 2",
      content: "Nouns, Articles, Pronouns, and Degrees of Comparison",
    },
    {
      day: "DAY 3",
      content: "Verbs, Tenses, and Conditional Sentences",
    },
    {
      day: "DAY 4",
      content: "Subject-Verb Agreement, Modal Verbs, and Use-to-Versus-Would",
    },
    {
      day: "DAY 5",
      content: "Adjectives, Adverbs, Punctuation, and Prepositions",
    },
    {
      day: "DAY 6",
      content: "Complex Sentences, Clauses, and Conjunctions",
    },
    {
      day: "DAY 7",
      content: "Coherence, Cohesion, Passive Voice, and Reported Speech",
    },
  ];

  return (
    <div className="flex justify-between gap-[10px]">
      <div className="flex flex-col gap-4 w-full">
        <div className="bg-primary w-full px-2 py-2 flex min-h-[60px] max-h-[20%]">
          <div className="border-r-2 border-r-[#A99BC6] flex-1 flex-center gap-4">
            <img src={clock} alt="" />
            <div className="flex flex-col flex-center">
              <span className="font-semibold text-[12px]">09:00 hs</span>
              <span className="font-bold text-[12px]">Morning (UK Time)</span>
            </div>
          </div>
          <div className="flex-1 flex-center font-semibold flex flex-col">
            <span className="font-semibold text-[12px]">06:00 hs</span>
            <span className="font-bold text-[12px]">Night (UK Time)</span>
          </div>
        </div>
        <div className="p-8 bg-primary flex flex-col gap-5 h-[70%]">
          {classContents.map((item) => (
            <div className="flex gap-3 items-center" key={item + "s"}>
              <div className="text-lg font-semibold text-[#4D4253] w-[15%]">
                {item?.day}:{" "}
              </div>
              <div className="pt-2 text-[15.5px] font-normal leading-[18px] w-[85%]">
                {item?.content}
              </div>
            </div>
          ))}
        </div>
          <button className="bg-secondary w-full p-4 text-white font-semibold cursor-auto text-lg">
        <Link to={"tel:+442045205731"}>
            For inquiry : +44 20 4520 5731
        </Link>
          </button>
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <Link
              to={"https://www.instagram.com/mentormerlin/?hl=en"}
              target="_blank"
            >
              <img src={insta} alt="instagram" />
            </Link>
            <Link
              to="https://www.facebook.com/mentormerlinedu/"
              target="_blank"
            >
              <img src={fb} alt="meta" />
            </Link>
            <Link to="https://twitter.com/MentorMerlin" target="_blank">
              {" "}
              <img src={x} alt="x" />
            </Link>
            <Link to="https://mentormerl.in/r/chatwithus" target="_blank">
              <img src={whats} alt="whatsapp" />
            </Link>
          </div>
          <div className="text-[#424042] font-semibold text-[18px]">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="flex flex-col border items-stretch gap-[2px] p-1 bg-primary">
        {months?.map((item, indx) => (
          <MonthShowCard
            key={indx}
            month={item.slice(0, 3)}
            isActive={indx == monthNum}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
