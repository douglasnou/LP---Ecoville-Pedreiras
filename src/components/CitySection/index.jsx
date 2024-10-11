import styled from "./style.module.scss";

export const Citysection = () => {
    return (
        <section className={styled.CitySection}>
            <div className={styled.CityText}>
                <div>
                    <div>
                        <h2 className={`city-title`}>A CIDADE</h2>
                        <p className={`city-text`}>
                            Pedreiras é uma cidade rica em cultura e história, localizada às margens do Rio Mearim. O nome da cidade se deve aos grandes blocos de pedras encontrados na região, que são uma marca característica do local. Conhecida como um polo da Região de Planejamento do Médio Mearim, Pedreiras é o lar de importantes figuras da música e da literatura, como João do Vale, um dos maiores nomes da música popular maranhense, reconhecido como o Maranhense do Século XX.
                        </p>
                        <p className={`city-text`}>
                            Com 104 anos de história, Pedreiras é um lugar repleto de belezas naturais e culturais, aguardando para ser ainda mais valorizado e reconhecido, e por isso nós estamos chegando!
                        </p>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </section>
    )
}