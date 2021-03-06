import React from 'react'
import Formsy from 'formsy-react'
import FormsyText from 'formsy-material-ui/lib/FormsyText'
import RaisedButton from 'material-ui/lib/raised-button'
import Paper from 'material-ui/lib/paper'

const style = {
  height: 250,
  width: 300,
  textAlign: 'center',
  display: 'inline-block',
  margin: 30
}

const RegisterForm = React.createClass({

  getInitialState: function() {
    return {
      canSubmit: false
    }
  },

  errorMessages: {
    wordsError: 'Please only use letters'
  },

  enableButton: function() {
    this.setState({
      canSubmit: true
    })
  },

  disableButton: function() {
    this.setState({
      canSubmit: false
    })
  },

  submitForm: function(model) {
    // Submit your validated form
    console.log('Model: ', model)
  },

  render: function() {
    let { wordsError } = this.errorMessages

    return (
      <div className='row center-xs'>
        <div className='col-xs-12 col-sm-6'>
          <Paper style={style} zDepth={2}>
            <Formsy.Form onValid={this.enableButton} onInvalid={this.disableButton} onValidSubmit={this.submitForm}>
              <FormsyText
                name='name'
                validations='isWords'
                validationError={wordsError}
                required
                hintText='What is your name?'
                value='Bob'
                floatingLabelText='Name'/>
              <FormsyText
                name='name'
                type='password'
                validations='isWords'
                validationError={wordsError}
                required
                hintText='What is your password?'
                value=''
                floatingLabelText='Password'/>
              <RaisedButton type='submit' label='Registrarse' secondary={true} />
              <RaisedButton
                type='submit'
                label='Entrar'
                disabled={!this.state.canSubmit}
                primary={true} />
              <p><a href='prueba'>He olvidado mi contraseña</a></p>
            </Formsy.Form>
          </Paper>
        </div>
      </div>
    )
  }
})

export default RegisterForm
