import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function Event() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/events`).then((res) => {
      setData(res.data);
    });
  }, []);
  
  console.log(data)

  return (
    <div className="py-12 min-h-screen w-full max-h-full">
      <div className=" grid justify-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 ">
        {data.map((value) => {
          return (
            <div
              key={value.id}
              className="pt-10"
              
              onClick={() => {
                navigate(`/event/${value.id}`);
              }}
            >
              <div className="shadow-xl">
               
                <Card sx={value.disable ? { width: 345 ,opacity:"50%" } :{ width: 345}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="100"
                      image={value.url}
                      alt="green iguana"
                      sx={value.disable ? { height: 300 ,opacity:"50%" }: { height: 300}}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {value.event_name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        maxHeight={20}
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className="ml-2 mb-2 mt-2">
                    <Button size="small" color="primary" variant="contained" >
                      Daftar
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Event;
