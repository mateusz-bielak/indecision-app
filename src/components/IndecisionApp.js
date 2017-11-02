import React from 'react';
import Action from './Action.js';
import AddOption from './AddOption.js'
import Header from './Header.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    openModal: undefined,
    selectedOption: undefined
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      openModal: true,
      selectedOption: option
    }));
  };
  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }));
  };
  handleDeleteOption = (optionToDelete) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToDelete != option)
    }));
  };
  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item"
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists"
    }
    this.setState((prevState) => ({
      options: prevState.options.concat([option])
    }));
  };
  closeModal = () => {
    this.setState(() => ({
      openModal: false
    }));
    setTimeout(() => {
      this.setState(() => ({selectedOption: false}))}, 200);
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({
          options
        }));
      }
    } catch (e) {}

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  render() {
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={ subtitle } />
        <div className='container'>
          <Action hasOptions={ this.state.options.length > 0 } handlePick={ this.handlePick } />
          <div className='widget'>
            <Options options={ this.state.options } handleDeleteOptions={ this.handleDeleteOptions } handleDeleteOption={ this.handleDeleteOption } />
            <AddOption handleAddOption={ this.handleAddOption } />
          </div>
        </div>
        <OptionModal openModal={this.state.openModal} selectedOption={ this.state.selectedOption } closeModal={ this.closeModal } />
      </div>
    )
  }
}

export default IndecisionApp;