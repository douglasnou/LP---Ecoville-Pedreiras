import styled from "./style.module.scss";

export const SecuritySection = () => {
    return (
        <section className={styled.SecuritySection}>
            <div className={styled.Nothing}>

            </div>

            <div className={styled.TextContainer}>
                <div>
                    <h2 className={`security-title`}>+ SEGURANÇA</h2>
                    <p className={`security-text`}>
                        Para garantir que você viva em um lugar tranquilo e protegido para toda a família, o Ecoville Pedreiras vai contar com um sistema de <span>monitoramento 24h</span> com <strong>câmeras de segurança</strong> em todo o bairro.
                    </p>
                </div>
            </div>
        </section>
    )
}