import { Component } from 'react';
import './App.css';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  changeState = buttonName => {
    this.setState(
      prevState => ({
        [buttonName]: prevState[buttonName] + 1,
      }),
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <div className="wrapper">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.changeState}
          />
        </Section>
      </div>
    );
  }
}
