import React from 'react';
import {Form,Button, Row, Col} from 'react-bootstrap';
import PropTypes  from 'prop-types';
import "./add-ticket-form.style.css";


export const AddTicketForm = ({handleOnSubmit,handleOnChange,frmDt}) => {
    console.log(frmDt);

      return (
        <div className="p-5 mb-4 bg-light rounded-3 shadow">
            <h1 className='text-info text-center'>Add New Ticket</h1>
            <hr />
     <Form autoComplete='off' onSubmit={handleOnSubmit}>
                    <Form.Group as = {Row}>
                        <Form.Label column sm= {3}>
                            Subject
                        </Form.Label>
                        <Col sm ={9}>
                        <Form.Control
                        name ="subject"
                        value = {frmDt.subject}
                        onChange={handleOnChange}
                        placeholder="subject"
                        required
                        />
                        </Col>
                    </Form.Group><br />
                    <Form.Group as = {Row}><br />
                        <Form.Label column sm={3}>Issue found on</Form.Label>
                        <Col sm={9}>
                        <Form.Control
                        type ="date"
                        name ="issueDate"
                        value = {frmDt.issueDate}
                        onChange={handleOnChange}
                        required
                        />
                        </Col>
                       
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Details</Form.Label>
                        <Form.Control
                        as ="textarea"
                        name ="detail"
                        rows ="5"
                        value = {frmDt.detail}
                        onChange={handleOnChange}
                        required
                        />
                    </Form.Group>
                    <br />
                    <Button type ="submit" variant ="info" >
                        submit
                    </Button>
                </Form>
    </div>
  );
};

AddTicketForm.propTypes = {
    handleOnSubmit:PropTypes.func.isRequired,
    handleOnChange:PropTypes.func.isRequired,
    frmDt:PropTypes.object.isRequired,
}