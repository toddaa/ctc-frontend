import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
//import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  onClick: PropTypes.func,
  href: PropTypes.any,
};

const defaultProps = {
  tag: 'div',
};

class NavText extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let {
      className,
      cssModule,
      active,
      tag: Tag,
      innerRef,
      ...attributes
    } = this.props;

    /*const classes = mapToCssModules(classNames(
      className,
      'nav-text',
      {
        disabled: attributes.disabled,
        active: active
      }
    ), cssModule);*/
    className = "nav-text"

    return (
      <Tag {...attributes} ref={innerRef} className={className} />
    );
  }
}

NavText.propTypes = propTypes;
NavText.defaultProps = defaultProps;

export default NavText;