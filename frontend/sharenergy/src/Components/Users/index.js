import './users-style.css'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log('aqui')
        fetch("https://randomuser.me/api/?nat=br&results=40")
            .then(res => res.json())
            .then(res => {
                setUsers(res.results)
            })
    }, []);

    return (
        <div c="container-usuarios">
            <Container className='users-container' >
            {users.map(user => (
            <Card sx={{ maxWidth: 345 }} className="users-card">
                <CardMedia
                    sx={{ height: 240 }}
                    image={user.picture.large}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <p>{user.name?.first} {user.name.last} </p>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <p>idade: {user.dob?.age} </p>
                        <p>username: {user.login?.username} </p>
                        <p>e-mail: {user.email}</p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            ))}
        </Container>
        </div>
    )
}

export default Users