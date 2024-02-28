import { useState } from "react";
import down_icon from "../../assets/icons/down.png";

export default function ManagersItem({ manager, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div key={index} className="py-6 border-b grid grid-cols-7 border-box">
      <div className="col-span-1 mr-10 border-box">
        <img src={manager?.image} className="w-full border" alt="" />
      </div>
      <div className="flex flex-col col-span-5">
        <p className="text-gray-600 mb-2">{manager?.job}</p>
        <p className="text-2xl font-semibold">{manager?.first_name}</p>
        <div
          className="mt-8 cursor-pointer max-w-[80%]"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="flex items-center parent">
            <p className="text-lg font-medium">Qisqacha tarjimai hol</p>
            <img src={down_icon} className="w-3 h-3 ml-2 mt-[1px]" alt="" />
          </div>
          <p
            className={`${
              open ? "max-h-[400px] h-fit" : "max-h-0 h-0"
            } overflow-hidden duration-1000 pt-2`}
          >
            {manager?.about}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-medium underline mb-6 text-blue-700">
          {manager?.phone}
        </p>
        <p className="text-lg font-medium underline mb-6 text-blue-700">
          {"expression@info.uz"}
        </p>
        <p className="text-lg font-medium underline mb-6 text-blue-700">
          Dushanba 15:00 - 16:00
        </p>
      </div>
    </div>
  );
}
