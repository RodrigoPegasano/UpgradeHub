import { useContext, useState } from "react";
import axios from "axios";
import { SessionContext } from "../../context/SessionContext";
import { useForm } from "react-hook-form";

export default function LoginForm() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [datos, setDatos] = useState({ email: "", password: "" });
    const { login } = useContext(SessionContext);

    function doLogin(datos) {
        axios
            .post("http://localhost:3000/api/users/login", datos)
            .then((response) => {
                console.log(response.data);
                login({ email: datos.email, token: response.data.token });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white">Login</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(doLogin)}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        /* CON useForm */
                                        {...register('email', { required: true })}

                                        /* MANUAL */
                                        /* value={datos.email}
                                        onChange={(e) =>
                                            setDatos({ ...datos, email: e.target.value })
                                        } */
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter email"
                                    />
                                    {errors.email && <p>Campo obligatorio</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        /* CON useForm */
                                        {...register('password', { required: true })}

                                        /* MANUAL */
                                        /* value={datos.password}
                                        onChange={(e) =>
                                            setDatos({ ...datos, password: e.target.value })
                                        } */
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                    />
                                    {errors.password && <p>Campo obligatorio</p>}
                                </div>
                                <button
                                    /* MANUAL */
                                    /* onClick={doLogin} */
                                    type="submit"
                                    className="btn btn-primary"
                                >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
