import './style.css'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MdOutlineRefresh } from "react-icons/md";
import { useState } from 'react'

export default function Dogs() {

    const [foto, setfoto] = useState('https://random.dog/1e8d7674-2889-498a-828d-161fd7ff372a.jpg');

    async function getDoggos() {
        const a = await fetch("https://random.dog/woof.json")
        const b = await a.json()
        setfoto(b.url)
    }

    return (
        <div className='my-container'>
            <Card sx={{ maxWidth: 500}}>
                <CardMedia
                    component="img"
                    alt="random doggo"
                    image={foto}
                    className="dog-img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Random Dog
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button size="small" onClick={getDoggos} >Refresh <MdOutlineRefresh /></Button>
                </CardActions>
            </Card>
        </div>
    );
}