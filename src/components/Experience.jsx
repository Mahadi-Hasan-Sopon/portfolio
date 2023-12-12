import { FaCaretRight } from "react-icons/fa6";
import SectionTitle from "../utils/SectionTitle";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div className="py-20 max-w-4xl mx-auto ps-12">
      <SectionTitle number={2} title="Where I've Worked" />

      <div className="md:flex mt-10">
        <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          <li className="inline-flex font-notoSerif items-center px-6 py-3 text-primaryLiteSlate bg-[#1023417e] border-l border-l-primaryGreen active w-full">
            Comptech Solutions Ltd.
          </li>
        </ul>
        <div className="px-6 text-base w-full font-interFont">
          <h3 className="text-lg font-bold text-primaryLiteSlate mb-2">
            IT Executive{" "}
            <span className="text-primaryGreen">
              @{" "}
              <Link to={"http://comptech.solutions"} target="_blank">
                Comptech
              </Link>
            </span>
          </h3>
          <div className="mb-2 font-openSans flex gap-2">
            <FaCaretRight className="text-primaryGreen text-xs mt-2" />
            <p className="text-secondarySlate">
              <span className="font-bold mr-1">Technical Support: </span>
              <span className="font-medium font-openSans">
                Provide technical assistance and support for both internal
                office systems and external clients.Troubleshoot and resolve
                hardware, software, and network issues promptly to ensure
                minimal disruption to operations.
              </span>
            </p>
          </div>
          <div className="mb-2 font-openSans flex gap-2">
            <FaCaretRight className="text-primaryGreen text-xs mt-2" />
            <p className="text-secondarySlate">
              <span className="font-bold mr-1">Client Interaction: </span>
              <span className="font-medium font-openSans">
                Act as a primary point of contact for clients, understanding
                their IT needs and addressing their concerns.Negotiate with
                clients to understand their budget constraints and recommend
                cost-effective IT solutions.
              </span>
            </p>
          </div>
          <div className="mb-2 font-openSans flex gap-2">
            <FaCaretRight className="text-primaryGreen text-xs mt-2" />
            <p className="text-secondarySlate">
              <span className="font-bold mr-1">Team Collaboration: </span>
              <span className="font-medium font-openSans">
                Collaborate with IT teams and other departments to address
                cross-functional issues and implement IT projects.Provide
                training and support to employees on new technologies and
                systems.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
