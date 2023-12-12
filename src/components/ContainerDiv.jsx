/* eslint-disable react/prop-types */
const ContainerDiv = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto p-4 xl:p-0 relative w-full overflow-hidden">
      {children}
    </div>
  );
};

export default ContainerDiv;
