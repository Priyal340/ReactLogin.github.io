import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'
import { NavLink } from 'react-router-dom'

const Home = () => {

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);

        const { value, name } = e.target;
        // console.log(value,name);

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const adddata = (e) => {
        e.preventDefault();

        const { name, email, date, password } = inpval;

        if (name === "" || email === "" || date === "" || password === "") {
            alert("All fiels are required here...");
        }
        else if (!email.includes("@")) {
            alert("Enter a valid email ID!!");
        }
        else if (password.length < 6) {
            alert("Enter valid password!!");
        }
        else {
            console.log("data added successfully.");

            localStorage.setItem("userkey", JSON.stringify({ ...data, inpval }));

            alert("Your Data Is Added Successfully.");
        //     <Modal show={show} onHide={handleClose}>
        //         <Modal.Header closeButton>
        //             <Modal.Title>Hurrayh!!</Modal.Title>
        //         </Modal.Header>
        //         <Modal.Body>Your Data Is Added Successfully.</Modal.Body>
        //         <Modal.Footer>
        //         <Button variant="secondary" onClick={handleClose}>
        //     Close
        //   </Button>
        //             <Button variant="primary" onClick={handleShow}>Continue </Button>
        //         </Modal.Footer>
        //     </Modal>

        }
    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justufy-content-between'>
                    <div className="left_data mt-3 " style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <div className="left_data"></div>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" name="name" onChange={getdata} />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" onChange={getdata} placeholder="abc@gmail.com" />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" name="date" onChange={getdata} />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={getdata} placeholder="" />
                            </Form.Group>

                            <Button variant="secondary" size="lg" active onClick={adddata}>Submit</Button>
                        </Form>

                        <p className='mt-3'>Already have an account? <span><NavLink to="/login" >SignIn</NavLink></span></p>
                    </div>

                    <div className="right_data mt-3" style={{ width: "100%" }}>
                        <div className="sign_img mt-3">
                            <img src='./signup.png' style={{ maxWidth: 450 }} alt='A picture was here...' />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
