import React from 'react';
import './Pricing.scss'

const Pricing = () => {
  return (
    <div>
      <div className="pricing">
        <div className="container">
          <h1 className="display-4">PRICING PLANS</h1>
        </div>
      </div>

      <section>
        <div className="container">
          <h1 className="text-center">CHOOSE THAT OFFERS THAT SUITS YOU</h1>
          <div className="row">
            <div className="col-md-3 advance">
              <h4>Billed Monthly</h4>
              <h2>ADVANCE PLAN</h2>
              <h1>$140</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="/membership/form/advanced">
                <button>PURCHASE</button>
              </a>
            </div>
            <div className="col-md-3 basic">
              <h4>Billed Monthly</h4>
              <h2>BASIC PLAN</h2>
              <h1>$120</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="/membership/form/basic">
                <button>PURCHASE</button>
              </a>
            </div>
            <div className="col-md-3 beginner">
              <h4>Billed Monthly</h4>
              <h2>BEGINNERS</h2>
              <h1>$90</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="/membership/form/beginner">
                <button>PURCHASE</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
