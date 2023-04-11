import React, { useState } from 'react';
import { Container, Row, Col, Form, Image, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfilePic, changeUserName } from '../store/profileSlice';
import "./Profile.scss";

const ProfilePage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [sex, setSex] = useState('');
    const profilePic = useSelector(state => state.profile.profilePic);
    const username = useSelector(state => state.profile.username);

    const dispatch = useDispatch();

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            const base64String = reader.result;
            // dispatch informs the store for a given action
            dispatch(changeProfilePic(base64String));
        };

        reader.onerror = (error) => {
            console.error('Error converting file to base64:', error);
        };
    };


    return (
        <Container>
            <Row>
                <Col>
                    <label htmlFor="hiddenFileInput" style={{ cursor: 'pointer' }}>
                        <Image
                            src={profilePic}
                            alt="Profile"
                            roundedCircle
                            width={150}
                            height={150}
                            className="profilePic"
                        />                        
                        <input
                            type="file"
                            id="hiddenFileInput"
                            onChange={handleFileInputChange}
                            style={{ display: 'none' }}
                        />
                    </label>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter email"
                            value={username}
                            onChange={(e) => dispatch(changeUserName((e.target.value)))}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formDateOfBirth">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                            type="date"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formSex">
                        <Form.Label>Sex</Form.Label>
                        <Form.Control
                            as="select"
                            value={sex}
                            onChange={(e) => setSex(e.target.value)}
                        >
                            <option value="">Select...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;
