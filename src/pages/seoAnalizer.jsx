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
// import scraper from 'seo-scraper';


const SeoAnalizer = () => {

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

              

                try {
                    // scraper.scrape({ url: 'https://github.com/NachoSEO/seo-scraper' })
                    // .then(elements => console.log(elements))

                    let a = [];
                    // for (let i = 0; i <= 6; i++) {
                    //     if (response.data[`h${i}`] != undefined) {
                    //         if (response.data[`h${i}`].length = 1) {
                    //             a.push({ [`h${i}`]: `${response.data[`h${i}`]}` });

                    //         }
                    //     }
                    // }

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
            <div className='w-1/3'>
                <h2>Seo Analizer</h2>
                <p>Escribe una url</p>

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
            </div>

            {console.log(headings)}
{/* 
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
                                        <ListSubheader sx={{ bgcolor: '#bfbff1' }}>{Object.keys(heading)[0]}</ListSubheader>
                                        <ListItem key={`item-${Object.keys(heading)[0]}-list`}>
                                            <ListItemText primary={Object.values(heading)[0]} />
                                        </ListItem>
                                    </ul>
                                </li>
                            </>
                        ))}

                    </List>
                </>

            } */}

        </section >
    );
};

export default SeoAnalizer;