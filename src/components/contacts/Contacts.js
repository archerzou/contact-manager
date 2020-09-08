import React, { Component } from 'react'
import Contact from './Contact';
import { connect } from 'react-redux';
import { getContacts } from '../../actions/contactActions';
import Sort from './Sort';


class Contacts extends Component {   
    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        const { contacts } = this.props;
        return (
            <div>
                <h1 className="display-4 mb-2">
                    <span className="text-primary">Contact</span> List
                </h1>
                <Sort/>
                {contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                ))}               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      contacts: state.contact.contacts
    }
  }

export default connect( mapStateToProps, { getContacts }) (Contacts);
