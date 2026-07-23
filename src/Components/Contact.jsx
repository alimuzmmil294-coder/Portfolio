import React, { useContext } from "react";
import { ContactContext } from "../Context/ContactContext";

const Contact = () => {
  const {count, setCount} = useContext(ContactContext)
  return (
    <div>
      <div className="flex flex-col uppercase text-7xl font-bold py-7">
        <h1>Let's work</h1>
        <h1 className="text-[#353334]">togather </h1>
      </div>
      <form className="text-[#7F7E7F] flex flex-col gap-5 w-full" action="">
        <article className="flex justify-between">
          <div className="flex flex-col gap-3 w-[48%] ">
            <label className="text-[14px]" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="bg-[#353334] rounded-lg px-3 py-2 text-white outline-none focus:ring-1 focus:ring-orange-500 placeholder:text-[#808080]"
            />
          </div>
          <div className="flex flex-col gap-3  w-[48%]">
            <label className="text-[14px]" htmlFor="email">
              Email
            </label>
            <input
              className="bg-[#353334] rounded-lg px-3 py-2 text-white outline-none focus:ring-1 focus:ring-orange-500 placeholder:text-[#808080]"
              type="text"
              placeholder="Your Name"
              name="name"
              id=""
            />
          </div>
        </article>
        <div className="flex flex-col gap-3  w-full">
          <label className="text-[14px]" htmlFor="budget">
            Budget
          </label>

          <select
            name="priceRange"
            id="priceRange"
            defaultValue=""
            className="bg-[#353334] rounded-lg px-3 py-2 text-white outline-none focus:ring-1 focus:ring-orange-500 cursor-pointer invalid:text-[#808080]"
            required
          >
            <option
              value=""
              disabled
              hidden
              className="text-[#808080] bg-[#353334]"
            >
              Select Price Range
            </option>
            <option value="100-150" className="bg-[#353334] text-white">
              $100 - $150
            </option>
            <option value="150-300" className="bg-[#353334] text-white">
              $150 - $300
            </option>
            <option value="300-500" className="bg-[#353334] text-white">
              $300 - $500
            </option>
          </select>
          <button onClick={() =>setCount(count + 1)}>{count}</button>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-[14px]" htmlFor="message">
            Message
          </label>
          <textarea
            className="bg-[#353334] rounded-lg px-3 py-2 text-white outline-none focus:ring-1 focus:ring-orange-500 placeholder:text-[#808080]"
            type="text"
            placeholder="Your Name"
            name="name"
            id=""
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
