import { connect } from 'react-redux';
import React, { Component } from 'react';

import { H1 } from '../components/Tags';
import ProjectPreview from '../components/ProjectPreview';

import { allProjects } from '../data/Projects';
import { resetTypedSection } from '../actions/TypedSectionActions';
import { setAddress } from '../actions/AddressBarActions';
import { setColor } from '../actions/ColorActions';
import { TypeIndexTracker, getNamePath } from '../lib/utils';

const BASE_PATH = [getNamePath(), 'Work'];
const BACKGROUND_COLOR = '#ffffff';
const TEXT_COLOR = '#272727';

class Work extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    const { resetTypedSection, setAddress, setColor } = this.props;
    resetTypedSection();
    setAddress(BASE_PATH);
    setColor(BACKGROUND_COLOR, TEXT_COLOR);
  }

  render() {
    const tracker = new TypeIndexTracker();
    return (
      <div className="work container">
        <H1 index={tracker.index()}>
          I've worked on a lot of cool projects. Here are a few of them.
        </H1>
        <div className="project-previews">
          { allProjects.map((project, index) => {
            return (
              <ProjectPreview
                project={project}
                tracker={tracker}
                reverse={ index % 2 === 1 }
                key={index}
              />
            );
          })}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAddress: (path) => dispatch(setAddress(path)),
    resetTypedSection: () => dispatch(resetTypedSection()),
    setColor: (backgroundColor, textColor) => dispatch(setColor(backgroundColor, textColor))
  }
}

export default connect(null, mapDispatchToProps)(Work);
