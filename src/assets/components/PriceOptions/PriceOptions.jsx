import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic",
          "price": 20,
          "currency": "USD",
          "features": [
            "Access to gym equipment",
            "Locker access",
            "Free water station",
            "Access during weekdays (8 AM - 8 PM)"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 40,
          "currency": "USD",
          "features": [
            "Access to gym equipment",
            "Locker and shower access",
            "Group classes (2 per week)",
            "Access during weekdays (6 AM - 10 PM)",
            "Free consultation with trainer (monthly)"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 70,
          "currency": "USD",
          "features": [
            "24/7 gym access",
            "Locker, shower, and sauna access",
            "Unlimited group classes",
            "Personal training sessions (2 per month)",
            "Access to pool and yoga studio",
            "Free guest pass (once a month)"
          ]
        },
        {
          "id": 4,
          "name": "VIP",
          "price": 100,
          "currency": "USD",
          "features": [
            "24/7 gym access",
            "Private locker and lounge access",
            "Unlimited personal training sessions",
            "Customized nutrition and fitness plan",
            "Priority booking for group classes",
            "Exclusive access to VIP-only events"
          ]
        }
      ]
      



    return (
        <div className="m-12">
            <h2 className="text-4xl">Best Prices in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;