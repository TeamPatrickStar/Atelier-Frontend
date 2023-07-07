import { Stack, Typography, Button } from '@mui/material';
import Item from "./Item.jsx";
import { useEffect, useState } from 'react';
import Slider from './Slider.jsx';
import OutfitAdd from './outfitAdd.jsx';
const ItemScroller = ({ setCurrent, current, title, items, type }) => {

  const [ outfit, setOutfit ] = useState([]);

  // useEffect(() => {
  //   console.log(outfit);
  // }, [outfit])

  return (
    <div style={{height: 'justify-content', width: '80%'}}>
      <Typography>{ title }</Typography>
      <br/>
      <Slider>
        {
          type === 1 ? <></> : <OutfitAdd setOutfit={setOutfit} current={current} outfit={outfit}></OutfitAdd>
        }
        {
          ( type === 1 ? items : outfit).map((item, index) => {
            return <Item setCurrent={setCurrent} type={type} current={current} item={item} key={index} setOutfit={setOutfit} outfit={outfit}></Item>
          })
        }
        </Slider>
    </div>
  )
};

export default ItemScroller;