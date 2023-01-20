import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { toast } from 'react-toastify'
import './style.css'
const Cats = () => {
    const [img, setImg] = useState('https://http.cat/200');
    const [cod, setCod] = useState('');

    const handleCod = (e) => {
        const { value } = e.target
        setCod(value.substring(0, 3))
    }

    async function getcat() {
        if (cod > 599 || cod <= 0) {
            setImg('https://http.cat/404')
            toast.error('Código inexistente!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            
        } else {
            setImg(`https://http.cat/${cod}`)
        }
    }

    return (
        <>
            <Container maxWidth="xl" className='cat-cont' >
                <div className='cat-container'>
                    <div className='cat-cont-cont'>
                        <TextField id="outlined-basic" label="Código de Status" variant="outlined" className='cat-input' onChange={handleCod} value={cod} />
                        <Button variant="contained" onClick={getcat} >Pesquisar</Button>
                    </div>
                </div>
                <div className='img-div'>
                    <img src={img} alt="HTTP cat" className='cat-img' />
                </div>
            </Container>
        </>
    )
}

export default Cats