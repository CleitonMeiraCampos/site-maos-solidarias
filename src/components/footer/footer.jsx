import './footer.css';

function footer(){
    return (
        <footer>
            <div className='text-footer'>
                <div className='calback-footer'>
                    <h4>Sobre Nós</h4>
                    <p>A Mãos Solidarias combate a fome e apoia pessoas
                    em situação de vulnerabilidade,
                    levando esperança e dignidade a quem mais precisa.</p>
                </div>
                <div className='calback-footer'>
                    <h4>Voluntariado</h4>
                    <p>Participe como voluntário e ajude na organização,
                    distribuição de alimentos e apoio em eventos,
                    contribuindo diretamente para nossa comunidade.</p>
                </div>
                <div className='calback-footer'>
                <h4>Transparência</h4>
                <p>Valorizamos a transparência, publicando regularmente relatórios
                sobre o uso dos recursos arrecadados para apoiar famílias carentes.</p>
                </div>
            </div>
            <div className='footer-copyright'>
                <p>Copyright © 2024 Mãos Solidarias | Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
export default footer;