import React from 'react'
import { connect } from 'react-redux'
// import { addFoodAdvisor } from '../../actions/addFoodAdvisor'
import { Row, Form, Button } from 'react-bootstrap'
import RowStyles from '../styles/RowStyles'
import ButtonStyles from '../styles/ButtonStyles'

class FoodAdvisorInput extends React.Component {

  // state = {
  //   how_big_meals: null,
  //   how_much_snacked: null,
  //   how_healthy: null
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value    
  //   })
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.props.addFoodAdvisor(this.state)
  //   this.setState = ({
  //     how_big_meals: null,
  //     how_much_snacked: null,
  //     how_healthy: null
  //   })
  // }

  render(){
    return (
      <RowStyles>
        <ButtonStyles>

          <Row className='centered-row-form'>
              
            <Form>
              <Form.Label>
                <h5>
                  In general, how big were your meals?
                </h5>
              </Form.Label>
                {['radio'].map(type => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check label="large" type={type} id={`inline-${type}-1`} />
                    <Form.Check label="medium" type={type} id={`inline-${type}-2`} />
                    <Form.Check label="small" type={type} id={`inline-${type}-3`} />
                  </div>
                ))}

              <Form.Label>
                <h5>
                  How much did you snack?
                </h5>
              </Form.Label>
                {['radio'].map(type => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check label="a lot" type={type} id={`inline-${type}-1`} />
                    <Form.Check label="some" type={type} id={`inline-${type}-2`} />
                    <Form.Check label="a little" type={type} id={`inline-${type}-3`} />
                  </div>
                ))}

              <Form.Label>
                <h5>
                  In general, how healthy were your meals and snacks?
                </h5>
              </Form.Label>
                {['radio'].map(type => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check label="not healthy" type={type} id={`inline-${type}-1`} />
                    <Form.Check label="somewhat healthy" type={type} id={`inline-${type}-2`} />
                    <Form.Check label="very healthy" type={type} id={`inline-${type}-3`} />
                  </div>
                ))}
              <br></br>

              <Button className='btn-submit' type='submit'>
                Get Advice
              </Button>
            </Form>

          </Row>

        </ButtonStyles> 
      </RowStyles>
    )
  }
}

export default FoodAdvisorInput

// connect(null, {addFoodAdvisor})(FoodAdvisorInput)