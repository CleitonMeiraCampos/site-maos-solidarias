import './contato.css'
import Header from '../../components/header/header';
import LineBlue from '../../components/line-blue/line-blue';
import Footer from '../../components/footer/footer';
import Img from '../../assets/Design sem nome (8) 1.png';
import coracao from '../../assets/heart_check_24dp_FILL0_wght400_GRAD0_opsz24 1.png';

function contato(){

    const handleSendMessage = () => {
        // Obtém os valores dos campos do formulário
        const nome = document.querySelector('input[name="nome"]').value;
        const sobrenome = document.querySelector('input[name="sobrenome"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const msg = document.querySelector('textarea[name="msg"]').value;

        // Monta a mensagem a ser enviada
        const textAreaMsg =  `Nome: ${nome} ${sobrenome}\nEmail: ${email}\n${msg}`
        
        // Define o número de telefone do WhatsApp
        const whatsappNumber = '5566996940375';
        
        // Monta a URL para enviar a mensagem
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textAreaMsg)}`;
        
        // Abre a URL em uma nova aba
        window.open(url, '_blank');

        document.querySelector('form').reset();

    };


    return (
        <div>
            <Header></Header>
            <LineBlue />
            <div className='container-contato'>
                <div className='container-form-contato'>
                    <h2>Entre em contato</h2>
                    <p>Pessoas carentes precisam de você</p>
                    <form>
                        <label htmlFor='nome' >Nome</label>
                        <input type="text" name='nome'/>
                        <label htmlFor='sobrenome' >Sobrenome</label>
                        <input type="text" name='sobrenome'/>
                        <label htmlFor='email' >Email</label>
                        <input type="email" name='email'/>
                        <label htmlFor="msg">Alguma mensagem para nós?</label>
                        <textarea name="msg"></textarea>
                        <input type="button" value="Enviar Mensagem" onClick={handleSendMessage}/>
                    </form>     
                </div>   
                <div className='img-contato'>
                    <img src={Img} />
                    <div className='container-text-img-contato'>
                        <h3>Juntos Contra a Fome</h3>
                        <img src={coracao}/>
                    </div>
                </div>    
            </div>    
            <LineBlue />
            <Footer />
        </div>
    )
}
export default contato;
    

