import { useContext } from 'react'
import './App.css'
import { Movie } from './Components/Movie'
import { MovieList } from './Components/MovieList'
import { MovieProvider } from './Components/Context'
import { ThemeProvider,ThemeContext } from './Components/Theme'
import styled from 'styled-components'
const Appdiv=styled.div`
  background-color:${(props)=>(props.$ison ? '#fff' : 'black')};
  color: ${(props) => (props.$ison ? '#000' : '#fff')};
  text-align: center;
`
const ThemeButton = styled.button`
  margin: 20px;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.$ison ? '#000' : '#fff')};
  color: ${(props) => (props.$ison ? '#fff' : '#000')};
  transition: all 0.3s ease;
`;
// function App() {
//   const { ison, change } = useContext(ThemeContext);
//   return (
//     <>
//       <ThemeProvider>
//        <MovieProvider>
//         <Appdiv $ison={ison}>
//           <h1>Movie Watchlist</h1>
//           <ThemeButton $ison={ison} onClick={change}>
//             Switch to {ison ? 'Dark' : 'Light'} Mode
//           </ThemeButton>
//           <Movie />
//           <MovieList />
//         </Appdiv>
//       </MovieProvider>
//     </ThemeProvider>
//     </>
//   )
// }
function AppContent() {
  const { ison, change } = useContext(ThemeContext);

  return (
    <Appdiv $ison={ison}>
      <h1> Movie Watchlist</h1>
      <ThemeButton $ison={ison} onClick={change}>
        Switch to {ison ? 'Dark' : 'Light'} Mode
      </ThemeButton>
      <Movie />
      <MovieList />
    </Appdiv>
  );
}
function App() {
  return (
    <ThemeProvider>
      <MovieProvider>
        <AppContent />
      </MovieProvider>
    </ThemeProvider>
  );
}
export default App
