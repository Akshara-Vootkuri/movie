import { useContext, useId, useRef } from "react";
import { MovieContext } from "./Context";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 320px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 10px;
  box-sizing: border-box;


  @media (max-width: 768px) {
    width: 80%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 95%;
    gap: 10px;
    padding: 10px;
  }

 
`
const Button = styled.button`
  background-color: #222;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 14px;
  }
`;

export const Movie = () => {
  const { add } = useContext(MovieContext);
  const titleref = useRef();
  const picref = useRef();
  const ratingref = useRef();
  const titleid = useId();
  const ratingid = useId();
  const picid = useId();

  const HandleSubmit = (e) => {
    e.preventDefault();
    const title = titleref.current.value.trim();
    const rating = ratingref.current.value.trim();
    const pic = picref.current.value.trim();
    if (!title || !rating) return;
    add({ id: Date.now(), title, rating, pic });
    titleref.current.value = "";
    ratingref.current.value = "";
    picref.current.value = "";
  };

  return (
    <Form onSubmit={HandleSubmit}>
      <label htmlFor={titleid}>Title:</label>
      <input id={titleid} ref={titleref} />

      <label htmlFor={ratingid}>Rating:</label>
      <input id={ratingid} ref={ratingref} />

      <label htmlFor={picid}>URL:</label>
      <input id={picid} ref={picref} />

      <Button type="submit">Add Movie</Button>
    </Form>
  );
};
