import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import Input from '../components/Input'
import Submit from '../components/Submit'
import { login } from '../controllers/userController'

export default function Auth({ username, setUsername, password, setPassword, setUser, setToken, user }) {
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const res = await login({ username, password })
            setUser(res.user)
            setToken(res.token.token)
            localStorage.setItem('token', res.token.token)
            axios.defaults.headers.common['Authorization'] = `bearer ${ res.token.token }`
            navigate('/pannel')
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        user && navigate('/pannel')
    }, [])

    return (
        <div className='App'>
            <img src={logo} className='logo' />
            <form className='authForm'>
                <div className='formData'>
                    <Input type={'text'} name={'username'} placeholder={'Username'} value={username} setValue={setUsername} />
                    <Input type={'password'} name={'password'} placeholder={'Password'} value={password} setValue={setPassword} />
                </div>
                <div className='submitContainer'>
                    <Submit value={'Login'} run={handleLogin} />
                </div>
            </form>
        </div>
    )
}
