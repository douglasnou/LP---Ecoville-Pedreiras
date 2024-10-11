import { Items } from "../../arrays/Items";
import Park from '../../assets/Ecopark.png';
import styled from "./style.module.scss";

export const ParkSection = () => {
    return (
        <section className={styled.ParkSection}>
            <div className={styled.List}>
                <ul>
                    {
                        Items.map((item) => (
                            <li>
                                <p className={`park-text`}>{item}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={styled.ImgSection}>
                <img src={Park} />
            </div>
        </section>
    )
}