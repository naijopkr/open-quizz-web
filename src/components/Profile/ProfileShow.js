import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import M from 'materialize-css'
import { saveProfile } from '../../store/actions/profile';
import ProfileForm from './ProfileForm';
import ProfileData from './ProfileData';

class ProfileShow extends Component {

  state = { editMode: false }

  componentDidUpdate = () => {
    if (this.state.editMode) {
      M.updateTextFields()
    }
  }

  saveProfile = (values) => {
    this.props.saveProfile(values);
    this.setState({ editMode: false });
  }

  render() {
    return this.state.editMode
      ? <ProfileForm 
          onCancel={() => this.setState({ editMode: false })} 
          onSubmit={this.saveProfile} 
        />
      : <ProfileData 
          auth={this.props.auth}
          onEdit={() => this.setState({ editMode: true })}
        />

  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  saveProfile
}

ProfileShow = reduxForm({
  form: 'profileEdit'
})(ProfileShow)

ProfileShow = connect(mapStateToProps, mapDispatchToProps)(ProfileShow);

export default ProfileShow