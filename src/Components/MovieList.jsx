import { useContext } from "react";
import { MovieContext } from "./Context";
import styled from "styled-components";

export const MovieList = () => {
  const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 20px;
    justify-items: center;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      width: 90%;
      margin: 0 auto;
    }
  `

  const Card = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 250px;

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 8px;
    }

    @media (max-width: 768px) {
      width: 100%;
      img {
        height: 220px;
      }
    }

    @media (max-width: 480px) {
      img {
        height: 180px;
      }
      h3 {
        font-size: 16px;
      }
      p {
        font-size: 14px;
      }
    }
  `

  const Button = styled.button`
    background-color: red;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    color: white;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;

    @media (max-width: 480px) {
      padding: 8px 16px;
      font-size: 14px;
    }
  `

  const { movies, deletem } = useContext(MovieContext);

  return (
    <>
      {movies.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>No movies added</p>
      ) : (
        <Container>
          {movies.map((movie) => (
            <Card key={movie.id}>
              <img src={movie.pic} alt="" />
              <h3>{movie.title}</h3>
              <p>{movie.rating}</p>
              <Button onClick={() => deletem(movie.id)}>Delete</Button>
            </Card>
          ))}
        </Container>
      )}
    </>
  );
};
