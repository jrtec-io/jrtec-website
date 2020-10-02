import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}


const sectionHeader = {
  title: 'Strengths',
  };

const Strenghts = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {




  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
        <SectionHeader data={sectionHeader} className="center-content" />
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="00">
           
              <Image
                className="has-shadow"
                src={require('./../../assets/images/tools.png')}
                alt="Hero"
                width={896}
                height={504} />
          </div>

        </div>
      </div>
    </section>
  );
}

Strenghts.propTypes = propTypes;
Strenghts.defaultProps = defaultProps;

export default Strenghts;