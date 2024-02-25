import React from 'react'
import { Box, Button, Snackbar, Tooltip, } from "@mui/material";
import { useDispatch } from 'react-redux';
import { add } from "../Store/store"


export default function ImageBox({ data }) {
    let Dispatch = useDispatch()
    return (
        <Tooltip title="Add-To-Basket" arrow placement="top">
            <Button
                sx={{
                    padding: "50px 60px",
                    width: "33.33333%",
                    '@media (max-width: 885px)': {
                        width: '100%'
                    },
                    backgroundColor: "rgb(120,120,120,0.3)",
                    backgroundImage: `url(${data.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundRepeat: "no-repeat",
                    "&:hover": {
                        backgroundColor: "rgb(120,120,120,0.3)",
                    }
                }}

                disabled={data.added}
                onClick={() => {
                    Dispatch(add(data))
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        width: "100%", height: "100%",
                        background: "rgba(0, 0, 0, 0.33)",
                        "&:hover": {
                            backgroundColor: 'transparent'
                        }
                    }}
                ></Box>
                <Box
                    style={{ padding: "20px 30px", border: "5px solid white", color: "white" }}
                >
                    {data.title}
                </Box>
            </Button>
        </Tooltip>

    )
}
