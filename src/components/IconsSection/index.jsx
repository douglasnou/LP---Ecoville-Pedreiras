import Torneira from "../../assets/torneira.svg";
import Poste from "../../assets/poste.svg";
import Road from "../../assets/road.svg";
import Park from "../../assets/park.svg";
import Logo from "../../assets/logo-pedreiras.png";
import styled from "./style.module.scss";

export const IconSection = () => {
    return (
        <section className={styled.IconSection}>
            <div className={styled.Line}></div>
            <div className={styled.Container}>
                <div className={styled.IconsItems}>
                    <ul>
                        <li>
                            <img src={Torneira} />
                            <p className={`icon-text`}>
                                <strong>Água encanada</strong> com abastecimento garantido para todos os lotes.
                            </p>
                        </li>
                        <li>
                            <img src={Poste} />
                            <p className={`icon-text`}>
                                <strong>Rede elétrica</strong> moderna proporciona segurança e energia eficiente para todos os lotes.
                            </p>
                        </li>
                        <li>
                            <img src={Road} />
                            <p className={`icon-text`}>
                                <strong>Ruas asfaltadas</strong> facilitam o acesso seguro e confortável a todos os moradores.
                            </p>
                        </li>
                        <li>
                            <img src={Park} />
                            <p className={`icon-text`}>
                                <strong>Área de lazer</strong> com espaços recreativos para atividades e convivência social.
                            </p>
                        </li>
                    </ul>
                </div>

                <div className={styled.LogoSection}>
                    <img src={Logo} />
                    <p className={`icon-subtitle`}>
                        Bairro Maria Rita <strong>Pedreiras - MA</strong>
                    </p>
                </div>
            </div>
        </section>
    )
}