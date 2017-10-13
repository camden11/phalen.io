import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddress } from '../actions/AddressBarActions';
import { resetTypedSectionIndex } from '../actions/TypedSectionActions';
import { setColor } from '../actions/ColorActions';
import { Link } from 'react-router-dom';
import TypedSection from '../components/TypedSection';
import ProjectPreview from '../components/ProjectPreview';
import { TypeIndexTracker } from '../lib/utils';
import { H1, L } from '../components/Tags';
import Div from '../components/TypedOutlineDiv'
import About from '../components/About';

const BASE_PATH = ['Camden Phalen'];
const BACKGROUND_COLOR = '#ffffff';
const TEXT_COLOR = '#272727';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(setAddress(BASE_PATH));
    dispatch(resetTypedSectionIndex());
    dispatch(setColor(BACKGROUND_COLOR, TEXT_COLOR));
    const scrollListener = () => this.handleScroll();
    this.setState({ scrollListener });
    window.addEventListener('scroll', scrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.state.scrollListener);
  }

  handleScroll() {
    const scroll = document.documentElement.scrollTop;
    const dividerLocation = document.getElementById('about').offsetTop - 62;
    const { inAboutSection } = this.state;
    const { dispatch } = this.props;
    if (scroll > dividerLocation) {
      if (!inAboutSection) {
        dispatch(setAddress(BASE_PATH.concat(['About'])));
        this.setState({ inAboutSection: true });
      }
    } else if (inAboutSection) {
      dispatch(setAddress(BASE_PATH));
      this.setState({inAboutSection: false})
    }
  }

  render() {
    const tracker = new TypeIndexTracker();
    return (
      <div className="home container">
        <H1 index={tracker.index()}>
          I combine clean code with design thinking to build distinctive user experiences.
        </H1>
        <ProjectPreview project="trailtag" tracker={tracker}/>
        <ProjectPreview project="hubspot" tracker={tracker} reverse={true}/>
        <L to="/work" index={tracker.index()} className="view-more-projects">
          View more
        </L>
        <Div index={tracker.index()} className="divider" id="about"></Div>
        <About tracker={tracker}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    textColor: state.color.textColor,
  }
}

export default connect(mapStateToProps)(Home);