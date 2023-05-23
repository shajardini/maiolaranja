import './imagem.css'


export default function Imagem(){
//let, const e var
    const urlImagem = 'https://pesqueira.pe.gov.br/wp-content/uploads/2023/05/image_processing20220522-2501-166tkht-1.jpeg'

    return(
        <div>
            <img src={urlImagem} alt="Imagem de uma flor amarela com o fundo laranja."></img>
        </div>

    )
}

