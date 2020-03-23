import React from 'react';
import ReactModal from 'react-modal';

import Cart from './Cart'
import UserForm from '../forms/UserForm'

ReactModal.setAppElement('#root');


class DeskControl extends React.Component {
    constructor(props) {
      super(props);
      // This binding is necessary to make `this` work in the callback
     // this.handleAddClick = this.handleAddClick.bind(this);
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    };
    
    handleOpenModal () {
      this.setState({ showModal: true });
    };
    
    handleCloseModal () {
      this.setState({ showModal: false });
    };
  
    render() {
      let content;
      if (this.props.form_type === "user") {
        content = <UserForm/>;
      };
        return (
          <div className="desk">
            <div className="desk-header">{this.props.title}</div>
            <Cart/>
            <button className="add-btn" onClick={this.handleOpenModal}>Add</button>
            <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Create"
            >
            {content}
            <button onClick={this.handleCloseModal}>Close</button>
          </ReactModal>
          </div>
        )
    };
};


export default DeskControl;
