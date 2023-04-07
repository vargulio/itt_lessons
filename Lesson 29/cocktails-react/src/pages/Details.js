import {useParams, useSearchParams} from 'react-router-dom';
import { useState } from 'react';

export default function DetailsPage () {
    // state in functional components
    //     getter  setter          initial value
    const [price, setPrice] = useState(100);

    const routeParams = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category');
    const key = searchParams.get('key');

    return <div>Details: {routeParams.id} Price: {price} 
    <button onClick={() => setPrice(110)}>ChangePrice</button> </div>;
}