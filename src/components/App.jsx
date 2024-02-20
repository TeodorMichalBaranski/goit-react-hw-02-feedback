import { Component } from 'react';
import './App.css';
import Section from './Section';

export class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Section title={'Please leave feedback'}></Section>
      </div>
    );
  }
}
