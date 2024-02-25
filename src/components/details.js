
import { Avatar, Box, CardHeader, Divider, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
// import Tooltip from '@mui/material/';
import { useDispatch } from "react-redux";
import { remove } from "../Store/store";


export default function Details({ data }) {
    let Dispatch = useDispatch()
    return (
        <Box>
            <CardHeader
                avatar={
                    <Avatar
                        aria-label="recipe"
                        sx={{
                            backgroundImage: `url(${data.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPositionX: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        {" "}
                    </Avatar>
                }
                action={
                    <Tooltip title="Delete" arrow placement="top">
                        <IconButton
                            aria-label="settings"
                            onClick={() => {
                                Dispatch(remove(data))
                            }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                }
                title={data.title}
                subheader={`£${data.price} —— ${data.description}`}
            />
            <Divider orientation="horizontal" variant="middle" />
        </Box>
    )
}
