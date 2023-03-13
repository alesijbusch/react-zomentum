import React from "react";
import "./styles.scss";
import { ReactComponent as ServiceIcon } from "../../assets/icons/offer-service.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/offer-search.svg";
import { ReactComponent as DiagramIcon } from "../../assets/icons/offer-diagram.svg";

export const Offer = () => {
  return (
    <section>
      <div className="offer">
        <div className="offer__container container">
          <div className="offer__title">List. Sell. Grow</div>
          <div className="offer__container-inner">
            <div className="offer__card">
              <ServiceIcon />
              <h5 className="offer__card-text">
                Be a part of the only All-In-One platform for IT services
              </h5>
            </div>
            <div className="offer__card">
              <SearchIcon />
              <h5 className="offer__card-text">
                Come closer to finding your next customer
              </h5>
            </div>
            <div className="offer__card">
              <DiagramIcon />
              <h5 className="offer__card-text">
                Grow your business with a single click
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
