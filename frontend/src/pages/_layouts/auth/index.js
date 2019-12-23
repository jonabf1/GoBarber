import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from '~/styles';

export default function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
console.log(typeof children);
AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
