import { useState } from "react"
import { useDispatch } from "react-redux"

import { loginUser } from '../../store/actions/fetchActions'



export default function Login() {

    const dispatch = useDispatch()

    const [ loginForm, setLoginForm ] = useState({
        username: '',
        password: ''
    })


    function onChangeLoginForm(e) {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
    }

    function onSubmitLoginForm(e) {
        e.preventDefault()

        dispatch(loginUser(loginForm))

        setLoginForm({
            username: '',
            password: ''
        })
    }


    return (
        <form onSubmit={onSubmitLoginForm} style={{
            width: '30vw',
            margin: '40px auto'
        }}>
            <h2 className="text-center mb-5">Login</h2>
            <div className="form-group">
                <input 
                    type="text"
                    placeholder="Username"
                    className="form-control"
                    value={loginForm.username}
                    onChange={onChangeLoginForm}
                    name="username"
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    value={loginForm.password}
                    onChange={onChangeLoginForm}
                    name="password"
                />
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block">Login</button>
            </div>
        </form>
    )
}