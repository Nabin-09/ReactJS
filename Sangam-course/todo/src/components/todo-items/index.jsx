import { Card, CardContent, Typography } from "@mui/material";


export default function TodoItem({todo}){
    return <Card>
        <CardContent>
            <Typography>{todo?.todo}</Typography>
        </CardContent>
    </Card>
}