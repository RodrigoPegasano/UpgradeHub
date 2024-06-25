import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import InputValidation from "../shared/InputValidation"

export default function SignupForm() {

    const [datos, setDatos] = useState({ email: "", password: "", name: "" })
    const navigate = useNavigate()

    function onSignup() {
        axios.post("http://localhost:3000/api/users/signup", datos)
            .then((response) => {
                navigate("/login")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white">Register</div>
                        <div className="card-body">
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        value={datos.name}
                                        onChange={(e) => setDatos({ ...datos, name: e.target.value })}
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <InputValidation
                                        rules={[
                                            {text: 'Email inválido', fn: (p) => p.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) !== null}
                                        ]}
                                        type="email"
                                        value={datos.email}
                                        onChange={(e) => setDatos({ ...datos, email: e.target.value })}
                                        placeholder="Enter email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <InputValidation
                                        rules={[
                                            {text: 'Contraseña no cumple con los requisitos', fn: (p) => p.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/) !== null}
                                            ]}
                                        type="password"
                                        value={datos.password}
                                        onChange={(e) => setDatos({ ...datos, password: e.target.value })}
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <button onClick={onSignup} type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}