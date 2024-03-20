import React from 'react'

// Styles
import styles from '../styles/Contact.module.css';

// Components 
import OpenMenu from '../components/OpenMenu';
import BackP5 from '../components/HomePage/Background';

// Material UI  
import TextField from '@mui/material/TextField';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';



export default function contact() {

    return (
        <>
            <div className={styles.background}>
                <BackP5 />
            </div>

            <div className={styles.page}>

                <OpenMenu />


                <div className={styles.inputs}>


                    <TextField
                        id="outlined-uncontrolled"
                        label="Nom"
                        defaultValue=""
                        className={styles.input}
                        variant="filled"
                    />

                    <TextField
                        id="outlined-uncontrolled"
                        label="Prénom"
                        defaultValue=""
                        variant="filled"
                        className={styles.input}
                    />



                    <TextField
                        id="outlined-uncontrolled"
                        label="Société"
                        defaultValue=""
                        variant="filled"
                        className={styles.input}
                    />

                    <TextField
                        id="outlined-uncontrolled"
                        label="Téléphone"
                        defaultValue=""
                        variant="filled"
                        className={styles.input}
                    />

                    <TextField
                        id="outlined-uncontrolled"
                        label="Mail"
                        defaultValue=""
                        variant="filled"
                        className={styles.input}
                    />



                    <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        maxRows={30}
                        rows={10}
                        variant="filled"
                        className={styles.input}
                    />

                </div>

                <div className={styles.links} >
                    <ArrowForwardRoundedIcon />
                </div>



            </div>


        </>
    )
}
