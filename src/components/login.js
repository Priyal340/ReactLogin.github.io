import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom"

function Login() {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
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

    const adddata = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("userkey");
        console.log(getuserArr);

        const { email, password } = inpval;

        if (email === "" || password === "") {
            alert("All fiels are required here...");
        }
        else if (!email.includes("@")) {
            alert("Enter a valid email ID!!");
        }
        else if (password.length < 6) {
            alert("Enter valid password!!");
        }
        else {

            // if (getuserArr && getuserArr.length) {
            //     const userdata = JSON.parse(getuserArr);
            //     // const userdata = JSON.stringify([getuserArr]);

            //     if (Array.isArray(userdata)) {
            //       const userlogin = userdata.filter((el, k) => {
            //         return el.email === email && el.password === password;
            //       });

            //     } else {
            //       console.log('Error: userdata is not an array');
            //     }
            //     console.log(userdata);
            //   }
              

    //         original code
            // if (getuserArr && getuserArr.length) {
            //     const userdata = JSON.parse(getuserArr);
            //     const userlogin = userdata.filter((el, k) => {
            //         return el.email === email && el.password === password;
            //     });

            //     if (userlogin.length === 0) {
            //         alert("invalid details!!")
            //     } else {
            //         console.log("User loged in successfully.");

            //         localStorage.setItem("user_login", JSON.stringify(getuserArr));
            //         history("/details");
            //     }
            // }
       }
     }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justufy-content-between'>
                    <div className="left_data mt-3 " style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign IN</h3>
                        <div className="left_data"></div>

                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" onChange={getdata} placeholder="abc@gmail.com" />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={getdata} placeholder="" />
                            </Form.Group>

                            <Button variant="secondary" size="lg" active onClick={adddata}>Submit</Button>

                        </Form>

                        <p className='mt-3'>Already have an account? <span>SignIn</span></p>

                    </div>

                    <div className="right_data mt-3" style={{ width: "100%" }}>
                        <div className="sign_img mt-3">
                            <img src='./signup.png' style={{ maxWidth: 450 }} alt='Not Found!' />
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Login
