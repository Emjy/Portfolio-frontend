import React, { useState } from 'react'

// Styles
import styles from '../styles/Contact.module.css';

// Components 
import OpenMenu from '../components/OpenMenu';
import BackP5 from '../components/HomePage/Background';

// Material UI  
import TextField from '@mui/material/TextField';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';



export default function contact() {

    const [errorMessage, setErrorMessage] = useState('')

    const [name, setName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [society, setSociety] = useState('')
    const [tel, setTel] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')

    const handleSendMessage = () => {

        if (name && firstName && society && tel && mail && message) {
            fetch('https://portfolio-backend-zeta-sandy.vercel.app/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, firstName, society, tel, mail, message }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.result) {
                        setName('')
                        setFirstName('')
                        setSociety('')
                        setTel('')
                        setMail('')
                        setMessage('')
                        setErrorMessage('Message envoyé')
                        console.log('Message envoyé')

                    } else {
                        console.log('Message non envoyé')
                    }
                });
        } else {
            setErrorMessage('Formulaire incomplet')
        }

    }


    return (
        <>
            <div className={styles.background}>
                <BackP5 />
            </div>

            <div className={styles.page}>

                <OpenMenu />

                <div className={styles.title}>
                    {'Contact'}
                </div>

                <div className={styles.separateur}>
                    {' '}
                </div>


                <div className={styles.inputs}>

                    <TextField
                        id="outlined-uncontrolled"
                        label="Nom"
                        defaultValue=""
                        className={styles.input}
                        variant="filled"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <TextField
                        id="outlined-uncontrolled"
                        label="Prénom"
                        defaultValue=""
                        variant="filled"
                        className={styles.input}
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />

                    <TextField
                        id="outlined-uncontrolled"
                        label="Société"
                        defaultValue=""
                        variant="filled"
                        className={styles.input}
                        onChange={(e) => setSociety(e.target.value)}
                        value={society}
                    />

                    <TextField
                        id="outlined-uncontrolled"
                        label="Téléphone"
                        defaultValue=""
                        variant="filled"
                        className={styles.input}
                        onChange={(e) => setTel(e.target.value)}
                        value={tel}
                    />

                    <TextField
                        id="outlined-uncontrolled"
                        label="Mail"
                        defaultValue=""
                        variant="filled"
                        className={styles.input}
                        onChange={(e) => setMail(e.target.value)}
                        value={mail}
                    />



                    <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        maxRows={30}
                        rows={10}
                        variant="filled"
                        className={styles.input}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />

                </div>

                <div className={styles.links} >
                    <ArrowForwardRoundedIcon onClick={() => handleSendMessage()} />
                </div>

                <div className={styles.errormessage} >
                    {errorMessage}
                </div>



            </div>


        </>
    )
}
