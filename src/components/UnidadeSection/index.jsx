import styled from "./style.module.scss";

export const UnidadeSection = () => {
    return (
        <section className={styled.UnidadeSection}>
            <div>
                <h2 className={`unidade-title-1 ${styled.TitleOne}`}>UNIDADES LIMITADAS</h2>
                <div>
                    <h2 className={`unidade-title-2 ${styled.TitleTwo}`}>GARANTA SEU LOTE ANTECIPADO</h2>
                    <h2 className={`unidade-title-3 ${styled.TitleThree}`}>19 DE OUT. A 05 DE NOV.</h2>
                    <p className={`unidade-text ${styled.Text}`}>
                        Faça a reserva do seu lote antes do lançamento oficial com <strong>condições exclusivas!</strong>
                    </p>
                    <a className={`unidade-btn ${styled.Btn}`} href="https://wa.me/559888385253/?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Ecoville%20Pedreiras!%F0%9F%92%9A%F0%9F%A4%A9" target="blank">
                        QUERO GARANTIR MEU LOTE
                    </a>
                </div>
            </div>
        </section>
    )
}