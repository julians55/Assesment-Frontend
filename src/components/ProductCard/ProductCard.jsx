import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';
import './ProductCard.css';

function ProductCard({ id, title, image }) {
  const [countdown, setCountdown] = useState(true);
  const handlerFinished = () => {
    setCountdown(false);
  };
  return (
    <div className="container">
      <div className="card">
        <img className="image" src={image} alt="" />
        <h1 className="title">{title}</h1>
        <div className="down">
          <Countdown className="countdown" date={Date.now() + parseInt((Math.random() * (30000)), 10)} onComplete={handlerFinished} />
          <Link disabled={!countdown} dclassName={countdown ? 'article_active' : 'article_inactive'} to={`/ProductDetail/${id}`}>
            <button
              disabled={!countdown}
              className={countdown ? 'productcard__button--disabled' : 'productcard__button'}
              type="button"
            >
              Go to details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
};

ProductCard.defaultProps = {
  id: 0,
  title: '',
  image: '',
};

export default ProductCard;
