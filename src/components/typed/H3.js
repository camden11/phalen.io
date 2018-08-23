import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TypedSection from '../TypedSection';

import mapStateToProps from './mapStateToProps';

const createClass = template => {
  const StyledComponent = styled.h3`
    ${template};
  `;
  class Heading3 extends Component {
    static extend(template) {
      return createClass(template);
    }

    render() {
      const { children, index, className, color } = this.props;
      return (
        <StyledComponent className={className} style={{ color }}>
          <TypedSection index={index}>{children}</TypedSection>
        </StyledComponent>
      );
    }
  }
  return connect(mapStateToProps)(Heading3);
};

const Base = createClass``;
export default Base;
