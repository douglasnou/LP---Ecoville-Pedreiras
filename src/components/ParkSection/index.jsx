import { Cards } from "../../arrays/Items";
import styled from "./style.module.scss";

export const ParkSection = () => {
    return (
        <section className={styled.ParkSection}>
            <div className={styled.List}>
                <ul>
                    {
                        Cards.map((item) => (
                            <li>
                                <div>
                                    <img src={item.img} alt="imagem do ecoville pedreiras" />
                                    <p className="icon-text">{item.text}</p>
                                    <div>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}