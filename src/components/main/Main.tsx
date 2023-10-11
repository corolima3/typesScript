import {Link } from 'react-router-dom';
import { Flex} from '../styled.components';
import Carousel from './Carousel';
import Info from './Info';


const Main = ( ): JSX.Element => {
    return (
        <>
        <Flex>
            <Link to={'/detail:id'}>haz click</Link>
            <Carousel />
            <Info />
        </Flex>
            
        </>)
}
export default Main; 