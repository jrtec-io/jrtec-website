import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">Home</Link>
        </li>
        <li>
          <Link to="#0">About us</Link>
        </li>
        <li>
          <Link to="#0">Services</Link>
        </li>
        <li>
          <Link to="#0">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;