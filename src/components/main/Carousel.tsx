
import { useEffect, useState } from 'react';
import { Movie, Item } from '../../interfaces/interfaces';
import { Container, AvatarContainer, Avatar, Degrade } from '../styled.components';
import BlackWidow from '../../assets/black-widow.png'

const Carousel = (): JSX.Element => {
    const [data, setData] = useState<Movie[]>([]); // inteface type Movie pero []
    //type <void> no retorna nada
    const getData = async (): Promise<void> => {
        const url = import.meta.env.VITE_BASE_URL;
        const items = await fetch(url);
        const response: any = await items.json(); //response es any
        const aItems = response.data.results.map((item: Item) => {
            const obj: Movie = {
                title: item.title,
                description: item.description,
                thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
            };
            return obj;
        })
        setData(aItems);
    }
    useEffect(() => {
        getData();
        console.log('....Iniciado')
    }, [])
    console.log(data)
    return (
        <>
            {data.length > 0 ? <>
                <Container height={50} src={data[5].thumbnail} />
                <AvatarContainer height={50}>
                    <Avatar height={50} src={BlackWidow} />
                </AvatarContainer>
                <Degrade height={50} />
            </> : <section className='loading'>Cargando...</section>
            }
        </>)
}
export default Carousel; 