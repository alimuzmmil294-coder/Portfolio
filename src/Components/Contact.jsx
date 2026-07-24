import React, { useContext } from "react";
import { ContactContext } from "../Context/ContactContext";

const Contact = () => {
  const { data, setData } = useContext(ContactContext);

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="flex flex-col uppercase text-7xl font-bold py-7">
        <h1>Let's work</h1>
        <h1 className="text-[#353334]">togather </h1>
      </div>
      <form
        onSubmit={(e) => (
          e.preventDefault(),
          console.log(data),
          setData({
            name: "",
            email: "",
            budget: "",
            message: "",
          })
        )}
        className="text-[#7F7E7F] flex flex-col gap-5 w-full"
        action=""
      >
        <article className="flex justify-between">
          <div className="flex flex-col gap-3 w-[48%] ">
            <label className="text-[14px]" htmlFor="name">
              Name
            </label>
            <input
              onChange={handleData}
              type="text"
              name="name"
              id="name"
              value={data.name}
              placeholder="Your Name"
              className="bg-[#353334] rounded-lg px-3 py-2 text-white outline-none focus:ring-1 focus:ring-orange-500 placeholder:text-[#808080]"
            />
          </div>
          <div className="flex flex-col gap-3  w-[48%]">
            <label className="text-[14px]" htmlFor="email">
              Email
            </label>
            <input
              onChange={handleData}
              className="bg-[#353334] rounded-lg px-3 py-2 text-white outline-none focus:ring-1 focus:ring-orange-500 placeholder:text-[#808080]"
              type="email"
              placeholder="Your@email.com"
              name="email"
              value={data.email}
              id=""
            />
          </div>
        </article>
        <div className="flex flex-col gap-3  w-full">
          <label className="text-[14px]" htmlFor="budget">
            Budget
          </label>

          <select
            onChange={handleData}
            name="budget"
            id="priceRange"
            value={data.budget}
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
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-[14px]" htmlFor="message">
            Message
          </label>
          <textarea
            onChange={handleData}
            className="bg-[#353334] rounded-lg px-3 py-2 text-white outline-none focus:ring-1 focus:ring-orange-500 placeholder:text-[#808080]"
            type="text"
            placeholder="Message"
            value={data.message}
            name="message"
            id=""
          />
        </div>
        <button className="bg-[#F46C38] text-white rounded-lg py-2 ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
