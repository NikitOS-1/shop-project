import {
  Button,
  Card,
  CardContent,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

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
      <form>
        <h3>please leave a review</h3>
        <div>
          <TextField size="small" placeholder="your name" />
        </div>
        <div>
          <TextareaAutosize minRows={5} placeholder="your text" />
        </div>
        <Button variant="outlined">Send</Button>
      </form>
    </>
  );
};
export default Reviews;
