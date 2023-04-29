import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Button,
    TextField,
    Box,
} from '@mui/material';
import { SnackbarUtilities } from '@/utilities';


const Seo = () => {

    const [url, setUrl] = useState("");

    const handleChange = (e) => {
        setUrl(e.target.value);
        console.log({ url })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;


        (async () => {
            if(regex .test(url)) {
                const encodedParams = new URLSearchParams();
                encodedParams.set('url', url);

                const options = {
                    method: 'POST',
                    url: 'https://canssens-seo-extraction-v1.p.rapidapi.com/seo/api/',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'X-RapidAPI-Key': '7a852f3f31msh2d432bde9686feep1e9e9cjsn71666313ac78',
                        'X-RapidAPI-Host': 'canssens-seo-extraction-v1.p.rapidapi.com'
                    },
                    data: encodedParams,
                };

                try {
                    const response = await axios.request(options);
                    console.log(response.data);
                } catch (error) {
                    console.error(error);
                }
            }else{
                console.log("no es una url")
                SnackbarUtilities.error("Url inválida");
            }
        })()
    };



    return (
        <section className="p-16">
            <h2>Seo</h2>
            <p>Bienvenido a Seo</p>


            <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
                onSubmit={handleSubmit}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Escribe URL"
                    name="url"
                    autoComplete="url"
                    autoFocus
                    onChange={handleChange}
                    value={url.email}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Analizar
                </Button>
            </Box>
























        </section>
    );
};

export default Seo;