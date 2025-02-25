import PropTypes from "prop-types";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="text-left font-thin flex items-center"><IoIosCheckmarkCircle className="mr-2"></IoIosCheckmarkCircle>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;