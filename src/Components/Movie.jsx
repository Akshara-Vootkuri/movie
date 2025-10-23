import { useContext,useId, useRef } from "react"
import { MovieContext } from "./Context"
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
`
const Button=styled.button`
  background-color: black;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`

export const Movie=()=>{
    const {add}=useContext(MovieContext)
    const titleref=useRef();
    const picref=useRef();
    const ratingref=useRef();
    const titleid=useId();
    const ratingid=useId();
    const picid= useId();

    const HandleSubmit=(e)=>{
        e.preventDefault();
        const title = titleref.current.value.trim();
        const rating = ratingref.current.value.trim();
        const pic = picref.current.value.trim();
        if (!title || !rating) return;
        add({ id: Date.now(),title, rating, pic });
        titleref.current.value = "";
        ratingref.current.value = "";
        picref.current.value = "";

    };

    return(
        <>
            <Form onSubmit={HandleSubmit}>
                <label htmlFor={titleid}>Title:</label>
                <input id={titleid} ref={titleref}/>
                <label htmlFor={ratingid}>Rating:</label>
                <input id={ratingid} ref={ratingref} />
                <label htmlFor={picid}>url:</label>
                <input id={picid} ref={picref} />
                <Button type="submit">Add Movie</Button>
            </Form>
        </>
    );
}