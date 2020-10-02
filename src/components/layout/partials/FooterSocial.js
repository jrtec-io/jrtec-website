import React from 'react';
import classNames from 'classnames';
import { SiUpwork, SiLinkedin } from 'react-icons/si';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://www.upwork.com/o/companies/~0191fbd81be47ab018">
            <SiUpwork size={50}/>
          </a>
        </li>
        
        <li>
          <a href="https://www.linkedin.com/company/jrtec/">
              <SiLinkedin size={50}  />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;