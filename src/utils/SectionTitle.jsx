/* eslint-disable react/prop-types */

const SectionTitle = ({ number = 0, title = "" }) => {
  return (
    <h2 className="flex items-center flex-wrap gap-1">
      <span className="mr-1.5 text-primaryGreen font-semibold font-notoSerif text-2xl">
        {number.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
        })}
        .
      </span>
      <span className="text-xl sm:text-3xl font-openSans font-bold text-primaryLiteSlate">
        {title}
      </span>
      <span className="w-40 md:w-60 lg:80 h-px bg-[#233554] ms-4"></span>
    </h2>
  );
};

export default SectionTitle;
