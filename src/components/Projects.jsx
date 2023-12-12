import SectionTitle from "../utils/SectionTitle";
import "./styles/Projects.css";

// import AuthenticShopImage from "../assets/authentic-shop/authentic-shop-home.png";
import InventoryManagementHome from "../assets/Inventory-management/inventory-management-home.png";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto font-openSans my-20 ps-12 pr-4 relative">
      <SectionTitle number={3} title="Some Things I've Built" />
      <div className="grid md:grid-cols-12 mt-10 relative">
        <div className="image md:col-start-1 md:col-end-7 w-9/12 md:w-full h-[500px] relative bg-primaryGreen">
          <div className="w-full h-full imageOverlay">
            <div className="imageDiv">
              <Link
                to={"https://inventory-management-design.web.app"}
                target="_blank"
              >
                <img
                  className="w-full h-[500px]"
                  src={InventoryManagementHome}
                  alt="Inventory Management Project Home Page"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="content md:col-start-6 md:col-end-12 w-full md:text-right md:absolute top-0 right-0 z-20 md:p-4 py-6">
          <p className="text-primaryGreen text-base font-mono">
            Featured Project
          </p>
          <h1 className="text-2xl font-bold text-primaryLiteSlate mt-2 mb-5">
            Inventory Management
          </h1>
          <div className="box bg-lightNavyCard w-full shadow-lg">
            <p className="px-6 py-4 text-secondarySlate text-sm">
              A web app for managing your inventory effortlessly, Users can
              easily sign up, create shops, manage products. Shop managers
              benefit from intuitive product management and a comprehensive
              dashboard, providing real-time insights.
            </p>
          </div>
          <div className="flex gap-4 items-center md:justify-end text-sm font-mono list-none text-secondarySlate md:text-right w-full my-5">
            <li>React</li>
            <li>Tailwind</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Stripe</li>
          </div>
          <div className="flex gap-5 items-center md:justify-end text-sm font-mono list-none text-secondarySlate text-right w-full my-5">
            <li>
              <Link
                to={
                  "https://github.com/Mahadi-Hasan-Sopon/inventory-management-client"
                }
                target="_blank"
              >
                <FiGithub className="text-secondarySlate text-xl hover:text-primaryGreen" />
              </Link>
            </li>
            <li>
              <Link
                to={
                  "https://github.com/Mahadi-Hasan-Sopon/inventory-management-server"
                }
                target="_blank"
              >
                <FiGithub className="text-secondarySlate text-xl hover:text-primaryGreen" />
              </Link>
            </li>
            <Link
              to={"https://inventory-management-design.web.app"}
              target="_blank"
            >
              <FiExternalLink className="text-secondarySlate text-xl hover:text-primaryGreen active:text-primaryGreen" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
