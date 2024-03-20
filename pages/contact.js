import React from 'react'

// Styles
import styles from '../styles/Contact.module.css';

// Components 
import OpenMenu from '../components/OpenMenu';
import BackP5 from '../components/HomePage/Background';

// Material UI  
import TextField from '@mui/material/TextField';


export default function contact() {

    return (
        <>
            <div className={styles.background}>
                <BackP5 />
            </div>

            <div className={styles.page}>
                
                <OpenMenu />


                <div className={styles.inputs}>

                    <div>
                        <TextField
                            id="outlined-uncontrolled"
                            label="Nom"
                            defaultValue=""
                            className={styles.input}
                        />

                        <TextField
                            id="outlined-uncontrolled"
                            label="Prénom"
                            defaultValue=""
                            className={styles.input}
                        />
                    </div>


                    <TextField
                        id="outlined-uncontrolled"
                        label="Société"
                        defaultValue=""
                        className={styles.input}
                    />
                    <div>
                        <TextField
                            id="outlined-uncontrolled"
                            label="Téléphone"
                            defaultValue=""
                            className={styles.input}
                        />

                        <TextField
                            id="outlined-uncontrolled"
                            label="Mail"
                            defaultValue=""
                            className={styles.input}
                        />
                    </div>


                    <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        maxRows={30}
                        rows={10}
                        className={styles.input}
                    />

                </div>



            </div>


        </>
    )
}
