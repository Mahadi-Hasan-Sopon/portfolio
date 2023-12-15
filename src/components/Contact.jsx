import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div id="contact" className="max-w-5xl mx-auto px-12 py-28">
      <div className="header flex flex-col items-center justify-center">
        <p className="text-primaryGreen text-base font-mono mb-3">
          04. {"What's"} Next?
        </p>
        <h1 className="font-interFont text-4xl font-bold text-primaryLiteSlate mt-2 mb-5 flex items-center">
          Get In Touch
        </h1>
        <p className="text-sm text-secondarySlate max-w-md font-openSans font-medium leading-relaxed text-center">
          Although, I am currently looking for any full time remote or hybrid
          jobs, my inbox is always open. Whether you have a questions or
          suggestions or want to discus something event want to say hi,{" "}
          {"don't"} hesitate.
        </p>
        <Link
          to={"mailto:d.eng.mahadi.hasan@gmail.com"}
          className="text-primaryGreen flex justify-center items-center outline outline-1 outline-primaryGreen rounded-sm py-2.5 px-7 text-sm font-openSans my-7 "
        >
          Say Hello
        </Link>
      </div>
      <div className="contact-form font-interFont px-2 py-4 ">
        <form className="max-w-md mx-auto space-y-8">
          <div className="fullName relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="full_name"
              id="full_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-primaryLiteSlate dark:border-gray-600 dark:focus:border-primaryGreen focus:outline-none focus:ring-0 focus:border-primaryGreen peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="full_name"
              className="peer-focus:font-medium absolute text-sm text-secondarySlate dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primaryGreen peer-focus:dark:text-primaryGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full name
            </label>
          </div>
          <div className="email relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-primaryLiteSlate dark:border-gray-600 dark:focus:border-primaryGreen focus:outline-none focus:ring-0 focus:border-primaryGreen peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-secondarySlate dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primaryGreen peer-focus:dark:text-primaryGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="subject relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="subject"
              id="subject"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-primaryLiteSlate dark:border-gray-600 dark:focus:border-primaryGreen focus:outline-none focus:ring-0 focus:border-primaryGreen peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="subject"
              className="peer-focus:font-medium absolute text-sm text-secondarySlate dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primaryGreen peer-focus:dark:text-primaryGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Subject
            </label>
          </div>
          <div className="message w-full mb-5 peer">
            <label
              htmlFor="message"
              className="text-sm text-secondarySlate dark:text-gray-400 peer-focus:text-primaryGreen mb-2 block"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-primaryLiteSlate bg-transparent rounded-lg border focus:ring-primaryGreen placeholder-gray-400 peer:focus:ring-primaryGreen peer-focus:border-primaryGreen outline-primaryGreen"
              placeholder="Let me know what you think..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-primaryGreen font-medium text-sm w-full sm:w-auto px-10 py-3 text-center border-primaryGreen border rounded hover:bg-blue-500 hover:text-white hover:border-transparent"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
