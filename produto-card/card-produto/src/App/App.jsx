import ContainerDescricao from '../components/ContainerDescricao'
import Subcategoria from '../components/Subcategoria'
import Titulo from '../components/Titulo';
import Descricao from '../components/Descricao';
import Preco from '../components/Preco';

const App = () => {
    return (
    
        <ContainerDescricao>
            <Subcategoria texto={"perfume"} />

            <Titulo texto={"gabrielle essence eau de perfum"} />

            <Descricao texto={"A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."} />
            
            <Preco precoAtual={149.99} precoAnterior={169.99} desconto="" />
        </ContainerDescricao>
    

    )
}

export default App;