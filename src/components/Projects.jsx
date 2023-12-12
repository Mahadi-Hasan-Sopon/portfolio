import SectionTitle from "../utils/SectionTitle";
import "./styles/Projects.css";
import EncyclopaediaHomeImage from "../assets/Encyclopaedia/encyclopaedia-Home.png";
import AuthenticShopImage from "../assets/authentic-shop/authentic-shop-home.png";
import InventoryManagementHome from "../assets/Inventory-management/inventory-management-home.png";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto font-openSans my-20 ps-12 pr-4 relative">
      <SectionTitle number={3} title="Some Things I've Built" />
      <div className="project-1 grid md:grid-cols-12 py-10 relative">
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
        <div className="content md:col-start-6 md:col-end-12 w-full md:text-right md:absolute top-10 right-0 z-20 md:p-4 py-6">
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
          <div className="flex gap-3 items-center md:justify-end text-sm font-mono list-none text-secondarySlate md:text-right w-full my-5">
            <li>React</li>
            <li>Tailwind</li>
            <li>Firebase</li>
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
      <div className="project-2 grid md:grid-cols-12 py-10 relative">
        <div className="content md:col-start-1 md:col-end-7 w-full md:absolute top-10 right-0 z-20 py-6">
          <p className="text-primaryGreen text-base font-mono">
            Featured Project
          </p>
          <h1 className="text-2xl font-bold text-primaryLiteSlate mt-2 mb-5">
            Library Management
          </h1>
          <div className="box bg-lightNavyCard w-full shadow-lg">
            <p className="px-6 py-4 text-secondarySlate text-sm">
              Encyclopaedia is a modern Library Management Website that offers a
              streamlined user experience for exploring and managing books.
              Where user can read and borrow books online.
            </p>
          </div>
          <div className="flex gap-4 items-center text-sm font-mono list-none text-secondarySlate w-full my-5">
            <li>React</li>
            <li>Tailwind</li>
            <li>Firebase</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Axios</li>
          </div>
          <div className="flex gap-5 items-center text-sm font-mono list-none text-secondarySlate text-right w-full my-5">
            <li>
              <Link
                to={
                  "https://github.com/Mahadi-Hasan-Sopon/library-management-client"
                }
                target="_blank"
              >
                <FiGithub className="text-secondarySlate text-xl hover:text-primaryGreen" />
              </Link>
            </li>
            <li>
              <Link
                to={
                  "https://github.com/Mahadi-Hasan-Sopon/library-management-server"
                }
                target="_blank"
              >
                <FiGithub className="text-secondarySlate text-xl hover:text-primaryGreen" />
              </Link>
            </li>
            <Link to={"https://encyclopaedia-97061.web.app/"} target="_blank">
              <FiExternalLink className="text-secondarySlate text-xl hover:text-primaryGreen active:text-primaryGreen" />
            </Link>
          </div>
        </div>
        <div className="image md:col-start-6 md:col-end-12 w-9/12 md:w-full h-[500px] relative bg-primaryGreen">
          <div className="w-full h-full imageOverlay">
            <div className="imageDiv">
              <Link to={"https://encyclopaedia-97061.web.app"} target="_blank">
                <img
                  className="w-full h-[500px]"
                  src={EncyclopaediaHomeImage}
                  alt="Inventory Management Project Home Page"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="project-3 grid md:grid-cols-12 py-10 relative">
        <div className="image md:col-start-1 md:col-end-7 w-9/12 md:w-full h-[500px] relative bg-primaryGreen">
          <div className="w-full h-full imageOverlay">
            <div className="imageDiv">
              <Link to={"https://authentic-shop.surge.sh/"} target="_blank">
                <img
                  className="w-full h-[500px]"
                  src={AuthenticShopImage}
                  alt="Inventory Management Project Home Page"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="content md:col-start-6 md:col-end-12 w-full md:text-right md:absolute top-10 right-0 z-20 md:p-4 py-6">
          <p className="text-primaryGreen text-base font-mono">
            Featured Project
          </p>
          <h1 className="text-2xl font-bold text-primaryLiteSlate mt-2 mb-5">
            Authentic Shop
          </h1>
          <div className="box bg-lightNavyCard w-full shadow-lg">
            <p className="px-6 py-4 text-secondarySlate text-sm">
              This e-commerce website is designed to offer a seamless shopping
              experience with a wide range of features. From browsing brands,
              exploring products, and managing cart to adding products and
              handling authentication.
            </p>
          </div>
          <div className="flex gap-3 items-center md:justify-end text-sm font-mono list-none text-secondarySlate md:text-right w-full my-5">
            <li>React</li>
            <li>Tailwind</li>
            <li>Firebase</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Axios</li>
          </div>
          <div className="flex gap-5 items-center md:justify-end text-sm font-mono list-none text-secondarySlate text-right w-full my-5">
            <li>
              <Link
                to={
                  "https://github.com/Mahadi-Hasan-Sopon/authentic-shop-client"
                }
                target="_blank"
              >
                <FiGithub className="text-secondarySlate text-xl hover:text-primaryGreen" />
              </Link>
            </li>
            <li>
              <Link
                to={
                  "https://github.com/Mahadi-Hasan-Sopon/authentic-shop-server"
                }
                target="_blank"
              >
                <FiGithub className="text-secondarySlate text-xl hover:text-primaryGreen" />
              </Link>
            </li>
            <Link to={"https://authentic-shop.surge.sh/"} target="_blank">
              <FiExternalLink className="text-secondarySlate text-xl hover:text-primaryGreen active:text-primaryGreen" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
