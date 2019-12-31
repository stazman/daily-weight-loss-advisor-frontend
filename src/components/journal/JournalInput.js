import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addJournalEntry } from '../../actions/addJournalEntry'
import { Row, Form, Button } from 'react-bootstrap'
import RowStyles from '../styles/RowStyles'
import ButtonStyles from '../styles/ButtonStyles'
import TextStyles from '../styles/TextStyles'

class JournalInput extends Component {

  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addJournalEntry(this.state);
    this.setState({
      content: ''
    })
  }

  render(){
    return (
      <RowStyles>
        <ButtonStyles>
          <TextStyles>
          
            <Row className='left-justified-row-form'>

              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId='formJournalEntryl'>
                  <Form.Label>Add a Journal Entry</Form.Label>
                  <br></br>
                  <Form.Control 
                    as='textarea' 
                    type='textarea'
                    rows='6'
                    cols='110'
                    placeholder='Write your journal entry here ...'
                    onChange={e => this.handleChange(e)}
                    value={this.state.content}
                  />
                  <Form.Text>                
                    Keep note of your progress and thoughts!
                  </Form.Text>
                </Form.Group>
                <Button className='btn-submit' type='submit'>
                  Submit
                </Button>
              </Form>
            </Row>

          </TextStyles>
        </ButtonStyles>
      </RowStyles>
    )
  }
}

export default connect(null, {addJournalEntry})(JournalInput);