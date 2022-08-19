import './App.css';

const Plan = ({stylingType, no_of_admins, no_of_doctors, plan_price, feature_type, feature1, feature2, feature3}) => {

  //For 'stylingType' parameter, use integer value 0 for highlighted styling or integer value 1 for normal styling

  return(
    <div className={stylingType ? 'PlanContainer' : 'PlanContainerAlternate'}>
      <div className= {stylingType ? 'PlanContainerPart1' : 'PlanContainerPart1Alternate'}>
        <h1 className={stylingType ? 'AdminsDoctors' : 'AdminsDoctorsAlternate'}>{no_of_admins} Admin(s) . {no_of_doctors} Doctor(s)</h1>
        <h1 className={stylingType ? 'PlanPrice' : 'PlanPriceAlternate'}>₹{plan_price} / Annum</h1>
        <button className={stylingType ? 'ButtonStyle' : 'ButtonStyleAlternate'}>Sign Up Now</button>
      </div>
      <div className='PlanContainerPart2'>
        <h1 className={stylingType ? 'FeatureTypeText' : 'FeatureTypeTextAlternate'}>{feature_type}</h1>
        <h1 className={stylingType ? 'FeatureText' : 'FeatureTextAlternate'}>{feature1}</h1>
        <h1 className={stylingType ? 'FeatureText' : 'FeatureTextAlternate'}>{feature2}</h1>
        <h1 className={stylingType ? 'FeatureText' : 'FeatureTextAlternate'}>{feature3}</h1>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <h1 className='Title'>Pricing</h1>
      <h1 className='Subtitle'>Additional user - 1000 /Annum/User Additional clinic- 5000 /Annum/Additional Clinic </h1>
      <div className='PlanContainerFlexbox'>
        <Plan 
        stylingType={1}
        no_of_admins={1} 
        no_of_doctors={2} 
        plan_price={6000} 
        feature_type={"Basic"} 
        feature1={"Client Management Toolkit"}
        feature2={"SMS Service"}
        feature3={"24/7 Customer Support"}
        />
        <Plan 
        stylingType={0}
        no_of_admins={2} 
        no_of_doctors={2} 
        plan_price={6000}
        feature_type={"Basic"} 
        feature1={"Client Management Toolkit"}
        feature2={"SMS Service"}
        feature3={"24/7 Customer Support"}
        />
        <Plan 
        stylingType={1}
        no_of_admins={3} 
        no_of_doctors={2} 
        plan_price={6000}
        feature_type={"Basic"} 
        feature1={"Client Management Toolkit"}
        feature2={"SMS Service"}
        feature3={"24/7 Customer Support"}
        />
                <Plan 
        stylingType={1}
        no_of_admins={3} 
        no_of_doctors={2} 
        plan_price={6000}
        feature_type={"Basic"} 
        feature1={"Client Management Toolkit"}
        feature2={"SMS Service"}
        feature3={"24/7 Customer Support"}
        />
                <Plan 
        stylingType={0}
        no_of_admins={3} 
        no_of_doctors={2} 
        plan_price={6000}
        feature_type={"Basic"} 
        feature1={"Client Management Toolkit"}
        feature2={"SMS Service"}
        feature3={"24/7 Customer Support"}
        />
      </div>
    </div>
  );
}

export default App;
