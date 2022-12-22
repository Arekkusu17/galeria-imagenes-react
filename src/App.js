import Header from "./components/Header";
import Card from "./components/Card";
import Footer from './components/Footer';
import "./App.css"


function App() {
  return (
    <div className="App">
        <Header titulo="Galeria de imagenes con React"/> 
        <div className='card-container'>
          <Card title="Por: Austin Neill" info="Vista al océano" url="https://picsum.photos/id/37/300" alt="árboles de hojas verdes junto a la orilla"/>
          <Card title="Por: Arvee Marie" info="Flor Frangipani" url="https://picsum.photos/id/106/300" alt="Foto de primer plano de la flor de pétalos de rosa"/>
          <Card title="Por: Tiago Gerken" info="Camino entre montañas" url="https://picsum.photos/id/251/300" alt="fotografía aérea de la carretera entre árboles bajo un cielo nublado blanco"/>
          <Card title="Por: Olivia Henry" info="Fotografía a olas rompiendo" url="https://picsum.photos/id/295/300" alt="olas del mar salpicando a través de la piedra"/>      
          <Card title="Por: Cas Cornelissen" info="Flor de pétalos rojo floreciendo" url="https://picsum.photos/id/360/300" alt="Foto en primer plano de una flor de pétalos rojo floreciendo"/>      
        </div>
        <Footer url="https://picsum.photos/images"/>
    </div>
  );
}

export default App;
