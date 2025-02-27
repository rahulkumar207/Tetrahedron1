import Link from "next/link";
import { 
  FaCar, FaUtensils, FaTractor, FaBriefcaseMedical, FaShieldAlt, FaCapsules, 
  FaShippingFast, FaTv, FaPumpSoap, FaCube, FaIndustry, FaTshirt, 
  FaTools, FaShoePrints, FaFlask, FaGem, FaCogs, FaPrint, FaMicrochip, FaCouch 
} from "react-icons/fa";

const slidingItems = [
  { icon: <FaCar />, text: "Automotive & EV" },
  { icon: <FaUtensils />, text: "Food & Beverages" },
  { icon: <FaTractor />, text: "Farming Equipments" },
  { icon: <FaBriefcaseMedical />, text: "Medical Equipments" },
  { icon: <FaShieldAlt />, text: "Defense & P.S.E." },
  { icon: <FaCapsules />, text: "Pharmaceuticals" },
  { icon: <FaShippingFast />, text: "Logistics & Packaging" },
  { icon: <FaTv />, text: "Consumer Durables" },
  { icon: <FaPumpSoap />, text: "Personal Care & Body Products" },
  { icon: <FaCube />, text: "Plastics" },
  { icon: <FaIndustry />, text: "Steel & Steel Tube" },
  { icon: <FaTshirt />, text: "Textile & Garments" },
  { icon: <FaTools />, text: "Building Material" },
  { icon: <FaShoePrints />, text: "Leather Footwear" },
  { icon: <FaFlask />, text: "Chemical & Fertilizers" },
  { icon: <FaGem />, text: "Gems & Jewellery" },
  { icon: <FaCogs />, text: "Heavy Engineering" },
  { icon: <FaPrint />, text: "Printing & Publication" },
  { icon: <FaMicrochip />, text: "Electronics" },
  { icon: <FaCouch />, text: "Furniture HCP" },
];

export default function Slidingtext() {
  return (
    <section className="sliding-text sliding-text-two py-10">
      <div className="sliding-text__inner max-w-4xl mx-auto text-center">
        
        {/* Heading & Description */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          INDUSTRIES WE SERVE
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
          Our dedication is unwavering, ensuring that each industry receives tailored solutions and expertise.
          <br />
          Our commitment is to propel every sector forward, enhancing productivity and fostering innovation.
          <br />
          Your success is our mission.
        </p>

        {/* Sliding Text List */}
        <ul className="sliding-text__list marquee_mode flex justify-center space-x-6 mt-4">
          {slidingItems.map((item, index) => (
            <li key={index} className="sliding-text__item flex items-center space-x-2 text-gray-700 text-lg">
              <Link href="#" className="sliding-text__icon text-2xl text-blue-600 ml-2">
                {item.icon}
              </Link>
              <Link href="#" className="sliding-text__text">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
