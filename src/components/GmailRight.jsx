const GmailRight = () => {
  return (
    <div className="relative max-w-7xl mx-auto z-40">
      <div
        className={`fixed right-6 xl:right-[calc((100vw-1280px)/2)] bottom-0 z-30`}
      >
        <div className="transform rotate-90 origin-right flex items-center gap-4 bg-bgNavy p-1">
          <a
            href="mailto:d.eng.mahadi.hasan@gmail.com"
            className="block text-[#a8b2d1] font-openSans text-sm"
          >
            d.eng.mahadi.hasan@gmail.com
          </a>
          <span className="w-24 h-px bg-primaryLiteSlate block"></span>
        </div>
      </div>
    </div>
  );
};

export default GmailRight;
