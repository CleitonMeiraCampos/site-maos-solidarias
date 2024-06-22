import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import LineBlue from '../../components/line-blue/line-blue';
import heart from "../../assets/heart_check_24dp_FILL0_wght400_GRAD0_opsz24 1.png";
import './receber-ajuda.css';

document.addEventListener('DOMContentLoaded', () => {receberAjuda})

function receberAjuda() {
    const handleSendMessageReceber = () => {
        // Function to handle sending a message via WhatsApp

        // Obtains values from form fields
        const nome = document.querySelector('input[name="nome-receber"]').value;
        const cpf = document.querySelector('input[name="cpf-receber"]').value;
        const email = document.querySelector('input[name="email-receber"]').value;
        const msg = document.querySelector('textarea[name="msg-receber"]').value;

        // Constructs the message to be sent
        const textAreaMsg =  `Nome: ${nome}\nCPF: ${cpf}\nEmail: ${email}\n${msg}`;
        
        // Defines the WhatsApp number
        const whatsappNumber = '5566996940375';
        
        // Constructs the URL to send the message via WhatsApp
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textAreaMsg)}`;
        
        // Opens the URL in a new tab
        window.open(url, '_blank');

        // Resets the form after sending the message
        document.querySelector('form').reset();
    };

    // JSX structure returned by the component
    return (
        <div>
            <Header></Header>
            <LineBlue></LineBlue>
            <div className='container-ajuda'>
                {/* Content of the help section */}
                <div className='header-text-ajuda'>
                    {/* Title and image */}
                    <div className='ajuda-img-h2'>
                        <h2>Receber Ajuda</h2>
                        <img src={heart} alt="coração" />
                    </div>
                    {/* Help description */}
                    <p>Estamos aqui para ajudar!
                        Se você ou sua família estão passando por
                        e precisam de alimentos, aqui podemos apoiar você.</p>
                </div>
                {/* Criteria for eligibility */}
                <div className='ajuda-quite'>
                    <h3>Critérios de elegibilidade</h3>
                    <LineBlue></LineBlue>
                    <p>Para receber ajuda, você deve atender a um ou mais dos seguintes critérios:</p>
                    <ul>
                        <li>Renda familiar mensal inferior a R$ 1412.</li>
                        <li>Desemprego ou emprego informal.</li>
                        <li>Idosos ou pessoas com deficiência sem suporte familiar.</li>
                        <li>Famílias monoparentais.</li>
                    </ul>
                </div>
                {/* Form section for application */}
                <div className='container-ajuda-form'>
                    <div className='form-text'>
                        <h3>Formulário de inscrição</h3>
                        <LineBlue></LineBlue>
                    </div>
                    {/* Actual form */}
                    <form>
                        <label htmlFor='nome-receber' >Nome Completo:</label>
                        <input type="text" name='nome-receber' />

                        <label htmlFor='cpf-receber'>CPF:</label>
                        <input type='text' name='cpf-receber'/>

                        <label htmlFor='endereco-receber'>Endereço:</label>
                        <input type="text" name="endereco-receber"/>

                        <label htmlFor="email-receber">Email:</label>
                        <input type="email" name='email-receber' />

                        <label htmlFor="msg-receber">Alguma mensagem para nós?</label>
                        <textarea name="msg-receber"></textarea>
                        
                        <input type="button" value="Enviar Inscrição" onClick={handleSendMessageReceber}/>
                    </form>
                </div>
            </div>
            <LineBlue></LineBlue>
            <Footer></Footer>
        </div>
    );
}

export default receberAjuda;
