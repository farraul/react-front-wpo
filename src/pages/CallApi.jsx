import React, { useEffect, useState } from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query'


const CallApi = () => {

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
            <div className='w-2/3'>
                <h1 className="text-3xl">Página para ver funcionamiento de una llamada con:  useQuery de @tanstack/react-query </h1>
                <div className='mt-10'>
                    {!isLoading && ricky.map(el => (
                        <p>{el.name}</p>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default CallApi;