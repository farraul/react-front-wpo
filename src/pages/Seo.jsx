import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Button,
    TextField,
    Box,
} from '@mui/material';
import { SnackbarUtilities } from '@/utilities';


import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';


const Seo = () => {

    const [url, setUrl] = useState("");
    const [data, setData] = useState(null);
    const [headings, setHeadings] = useState(undefined);


    const handleChange = (e) => {
        setUrl(e.target.value);
        console.log({ url })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;


        (async () => {
            if (regex.test(url)) {
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
                    let a = [];
                    for (let i = 0; i <= 6; i++) {
                        if (response.data[`h${i}`] != undefined) {
                            if (response.data[`h${i}`].length = 1) {
                                a.push({ [`h${i}`]: `${response.data[`h${i}`]}` });

                            }
                        }
                    }

                    setHeadings(a);

                } catch (error) {
                    console.error(error);
                }
            } else {
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

            {console.log(headings)}

            {headings?.length > 0 &&
                <>
                    {console.log({ headings })}
                    <h2 className="text-2xl font-bold  mt-10 mb-5">Headings</h2>


                    < List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 700,
                            '& ul': { padding: 0 },
                            bgcolor: '#cbdaf3',
                        }}
                        subheader={<li />}
                    >
                        {headings.map((heading) => (
                            <>
                                <li key={`section-${Object.keys(heading)[0]}`}>
                                    <ul>
                                        <ListSubheader sx={{ bgcolor: 'blue', color: "white" }}>{Object.keys(heading)[0]}</ListSubheader>
                                        <ListItem key={`item-${heading}-list`}>
                                            <ListItemText primary={Object.values(heading)[0]} />
                                        </ListItem>
                                    </ul>
                                </li>
                            </>
                        ))}

                    </List>
                </>

            }

        </section >
    );
};

export default Seo;