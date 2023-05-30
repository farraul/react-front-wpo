import React, { useEffect, useState } from 'react';
import { SnackbarUtilities } from '@/utilities';
import {
    useQuery,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query'


const SeoAnalizer = () => {

    const [ricky, setRicky] = useState([]);

    const getRicky = async () => {
        return fetch('https://rickandmortyapi.com/api/character').then(res => res.json())
    }

    const { data: rickystate, isLoading, isError, error, status } = useQuery({
        queryKey: ['apiMorty'],
        queryFn: getRicky,
        //refetchOnWindowFocus: true,
        cacheTime: 10000, //tiempo almacenamiento en cache
        staleTime: 10000, //determina cuando tienen que actualizarse

    })

    console.log({ isLoading })
    console.log({ status })

    useEffect(() => {
        if (rickystate) {
            console.log({ rickystate })
            setRicky(rickystate.results)
            console.log({ ricky })
        }
    }, [rickystate])

    return (
        <section className="p-16">
            <div className='w-1/3'>

                {!isLoading && ricky.map(el => (
                    <h1>{el.name}</h1>
                ))}

            </div>
        </section >
    );
};

export default SeoAnalizer;