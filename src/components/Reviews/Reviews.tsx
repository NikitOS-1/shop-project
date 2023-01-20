import {
  Button,
  Card,
  CardContent,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

type Props = {};

type Review = {
  name: string;
  text: string;
};

const Reviews = (props: Props) => {
  const arrReviews = [
    {
      name: "Alex Redan",
      text: "До этого три с половиной года пользовался s9 , в котором все полностью устраивало, но умер экран. Спустя неделю пользования могу сказать следующее:хотелось бы немного тяжелее, на 20-30 грамм.",
    },
    {
      name: "Miha",
      text: "хотелось бы немного тяжелее, на 20-30 грамм.",
    },
  ];

  const [reviews, setRewievs] = useState<Review[]>(arrReviews);
  const [newReview, setNewReview] = useState<Review>({
    name: "",
    text: "",
  });

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewReview((prevState: Review) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          margin: "50px 0",
        }}>
        Revies
      </Typography>
      <div>
        {reviews.map(({ name, text }: Review, i) => (
          <Card variant="outlined" key={i} sx={{ margin: "20px 0" }}>
            <CardContent>
              <div>{name}</div>
              <div>{text}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <form>
        <h3>Please leave a review</h3>
        <div>
          <TextField
            size="small"
            placeholder="Your name"
            value={newReview.name}
            onChange={handleName}
          />
        </div>
        <div style={{ margin: "20px 0" }}>
          <TextareaAutosize
            minRows={5}
            placeholder="your text"
            value={newReview.text}
          />
        </div>
        <Button variant="outlined">Send</Button>
      </form>
    </>
  );
};

export default Reviews;
