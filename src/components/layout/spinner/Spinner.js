import React from 'react';
import spinner from '../../../assets/icons/svg/spinner.svg';
import './Spinner.scss';

const Spinner = (props) => {
  return (
    <React.Fragment>
    <div className={'spinner-wrapper u-margin-bottom-big'}>
      <img
        src={spinner}
        alt="Loading..."
        className={'spinner'}
      />
    </div>
    <h3 className="u-center-text highlight">{props.message}</h3>
    </React.Fragment>
  );
};
export default Spinner;
