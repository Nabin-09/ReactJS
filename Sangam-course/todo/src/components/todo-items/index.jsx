import { Card, CardActions, CardContent, Typography , Button} from "@mui/material";


export default function TodoItem({todo}){
    return <Card sx={{
         maxWidth : 550,
         display : "flex",
         flexDirection : "direction",
         justifyContent : "space-between"

    }}>
        <CardContent>
            <Typography variant="h5" color={'text.secondary'}>{todo?.todo}</Typography>
        </CardContent>
        <CardActions>
            <Button sx= {{
                backgroundColor : '#000000',
                color : '#fff',
                opacity : '0.75',
                '&:hover' : {
                      backgroundColor : '#000000',
                    color : '#fff',
                    opacity : '1',
                }
            }}>Show Deatils</Button>
        </CardActions>
    </Card>
}