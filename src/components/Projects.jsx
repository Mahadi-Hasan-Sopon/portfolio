import SectionTitle from "../utils/SectionTitle";
import AuthenticShopImage from "../assets/authentic-shop-home.png";

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto font-openSans my-20 ps-12 pr-4 relative">
      <SectionTitle number={3} title="Some Things I've Built" />
      <div className="grid md:grid-cols-12 mt-10 relative">
        <div className="col-start-1 col-end-7 bg-red-400 relative">
          <img
            className="w-full h-96"
            src={AuthenticShopImage}
            alt="Authentic Shop Project Image"
          />
        </div>
        <div className="col-start-6 col-end-12 w-full text-right absolute top-0 right-0 z-20 p-4">
          <p className="text-primaryGreen text-base font-mono">
            Featured Project
          </p>
          <h1 className="text-2xl font-bold text-primaryLiteSlate">
            Inventory Management
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
