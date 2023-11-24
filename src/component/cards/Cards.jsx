import { useEffect, useState } from 'react';
import Card from '../card/card';

const Cards = (props) => {
    console.log(props);
    const [data,setData] = useState([]);
    useEffect(()=>
    {
        fetch('https://raw.githubusercontent.com/ahsanulhoqueabir/blog-web-react/main/src/fakeData.json').then(res => res.json()).then(data => setData(data))
    },[]);
    return (
        <div>
            {
                data.map(data =>  <Card btn1={props} data={data} key={data.ID}></Card>)
            }
           
        </div>
    );
};

export default Cards;