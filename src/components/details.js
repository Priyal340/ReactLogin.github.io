import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom"


const Details = () => {

    const [logindata, setLoginData] = useState([]);
    console.log(logindata);

    const history =useNavigate();

    const [show, setShow] = useState(false);

    var today = new Date().toISOString().slice(0, 10);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Date = () => {
        const getuser = localStorage.getItem("user_login");

        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            setLoginData(user);

            const userdate = logindata.map((el, k) => {
                return el.date === today
            });

            if (userdate) {
                setTimeout(() => {
                    handleShow();
                }, 3000);
            }
        }
    }

    const userlogout = ()=>{
        localStorage.removeItem("user_login");
        history("/");
    }

    useEffect(() => {
        Date();
    }, [])

    return (
        <>
            {
                logindata.length === 0 ? "error" :
                    <>
                        <h1>Details Page</h1>
                        <h3>{logindata[0].name}</h3>
                        <Button onClick={userlogout}>LogOut</Button>

                        {
                            logindata[0].date === today ?

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{logindata[0].name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Whish you a very Happy Birthday🎈 Have a grate day.</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>:""
                        }
                    </>
            }
        </>
    );
}

export default Details
