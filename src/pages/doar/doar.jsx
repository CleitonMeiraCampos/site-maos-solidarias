import Header from '../../components/header/header'
import LineBlue from '../../components/line-blue/line-blue';
import Footer from '../../components/footer/footer';
import './doar.css';

function doar(){

    const handleSendMessageDoar = () => {
        // Obtém os valores dos campos do formulário
        const nome = document.querySelector('input[name="nome-doar"]').value;
        const sobrenome = document.querySelector('input[name="sobrenome-doar"]').value;
        const email = document.querySelector('input[name="email-doar"]').value;
        const msg = document.querySelector('textarea[name="msg-doar"]').value;

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

    return(
        <div>
        <Header></Header>
        <LineBlue />
        <div className='container-img-doar'>
            <div className='text-doar'>
                <h2>Ajudar uma pessoa carente que precisa
                de alimento é fazer o nosso mundo um lugar melhor.</h2>
            </div>
                <div className='container-form'>
                    <form>
                        <label htmlFor='nome-doar' >Nome</label>
                        <input type="text" name='nome-doar'/>

                        <label htmlFor='sobrenome-doar' >Sobrenome</label>
                        <input type="text" name='sobrenome-doar'/>

                        <label htmlFor='email-doar' >Email</label>
                        <input type="email" name='email-doar'/>

                        <label htmlFor="msg-doar">Alguma mensagem para nós?</label>
                        <textarea name="msg-doar"></textarea>

                        <input type="button" value="Doar" onClick={handleSendMessageDoar}/>
                    </form>
                </div>
        </div>
        <LineBlue />
        <Footer/>
    </div>
    )
}
export default doar;