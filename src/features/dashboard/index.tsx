import { Modal } from "flowbite-react";
import Header from "./Header";
import MainContent from "./MainContent";
import { useEffect, useState } from "react";
import Login from "../login";

export default function Dashboard() {
    const [loginForm, setLoginForm] = useState(false)
    useEffect(() => {
        document.body.style.position = loginForm ? "fixed" : "relative"
    }, [loginForm])
    return <div >

        <Modal show={loginForm} onClose={() => setLoginForm(false)}>
            <Modal.Header>
                <div className="font-bold text-2xl text-center">Login</div>
            </Modal.Header>
            <Modal.Body>
                <Login closeForm={() => setLoginForm(false)} />
            </Modal.Body>
        </Modal>
        <div className=" min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500" id="dashboard">
            <Header handleLogin={() => setLoginForm(true)} />
            <MainContent />
        </div>
    </div>
}