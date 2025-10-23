import { useContext } from "react";
import { MovieContext } from "./Context";
import styled from "styled-components";
export const MovieList=()=>{
    const Container=styled.div`
     display:grid;
     grid-template-columns:repeat(3,1fr);
     width:250px;
     height:250px
     margin-top:10px;
     gap:30px;
    `
    const Card=styled.div`
    margin-top:10px;
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    `
    const Button=styled.button`
        background-color:red;
        padding:10px 20px;
        border-radius:20px;
    `
     const { movies, deletem} = useContext(MovieContext);
     return(
        <>
            {movies.length===0?<p>No movies added</p>:
                <Container>
                {movies.map((movie)=>(
                    <Card key={movie.id}>
                        <img src={movie.pic} alt="" width="250px" height="250px"/>
                        <h3>{movie.title}</h3>
                        <p>{movie.rating}</p>
                        <Button onClick={()=>deletem(movie.id)}>Delete</Button>
                    </Card>

                ))}
                </Container>
            }
        </>
     )
}