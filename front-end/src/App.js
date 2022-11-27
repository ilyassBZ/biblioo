import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import NavBar from "./components/Navbar";
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <div className="page-container">
        <div className='content-wrap'>
          <NavBar />
        </div>
        <Footer />
      </div>
    </Container>
  );
}

export default App;
const Container = styled.div`
.page-container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;

}
.content-wrap{
  flex:1;
}

`;
