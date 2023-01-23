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
  const arrReviews: Review[] = [
    {
      name: "Alex",
      text: "bla bla",
    },
    {
      name: "nik",
      text: "bla bladfklfdlk",
    },
  ];

  const [reviews, setReviews] = useState<Review[]>(arrReviews);
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
  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview((prevState: Review) => ({
      ...prevState,
      text: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newReview.name === "" || newReview.text === "") {
    } else {
      setReviews((prevState: Review[]) => {
        return [...prevState, newReview];
      });
      setNewReview({
        name: "",
        text: "",
      });
    }
  };

  return (
    <>
      <Typography variant="h4" sx={{ margin: "50px 0" }}>
        Reviews
      </Typography>
      <div>
        {reviews.map(({ name, text }: Review, i) => (
          <Card variant="outlined">
            <CardContent>
              <div key={i}>
                name:{name}
                text:{text}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <h3>please leave a review</h3>
        <div>
          <TextField
            size="small"
            placeholder="your name"
            value={newReview.name}
            onChange={handleName}
          />
        </div>
        <div>
          <TextareaAutosize
            minRows={5}
            placeholder="your text"
            value={newReview.text}
            onChange={handleText}
          />
        </div>
        <Button type="submit" variant="outlined">
          Send
        </Button>
      </form>
    </>
  );
};
export default Reviews;
