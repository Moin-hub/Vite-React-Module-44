import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="flex flex-col bg-blue-600 font-bold rounded-2xl p-4 text-white">
            <h2 className="text-center">
                <span className="text-7xl">{price}</span>
                <span className="text-sm">/month</span>
            </h2>
            <h4 className="text-3xl my-4">{name}</h4>
            <div className="pl-6 flex-grow">
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className="mt-6">Buy Now</button>
        </div>
    );
};


PriceOption.prototypes = {
    option: PropTypes.object
}
export default PriceOption;