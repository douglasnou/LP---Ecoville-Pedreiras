import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from "./style.module.scss";
import { Carroussel } from "../../arrays/carrossel";


export const AboutSection = () => {
    return (
        <section className={styled.AboutSection}>
            <div className={styled.TextSection}>
                <h2 className="about-title">O BAIRRO PLANEJADO + COMPLETO E DESEJADO DA REGIÃO</h2>
                <p className="about-text">
                    No <strong>Ecoville Pedreiras</strong>, cada dia é uma nova oportunidade para criar lembranças inesquecíveis com a sua família.
                </p>
                <p className="about-text">
                    Temos <strong>+ de 20 itens</strong> de lazer com espaços pensados para seu viver e bem-estar. Com áreas verdes, espaço para seu pet, playgrounds para as crianças, áreas de vivência e qualidade de vida ao ar livre.
                </p>

                <a className="about-btn" href="https://wa.me/559888385253/?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Ecoville%20Pedreiras!%F0%9F%92%9A%F0%9F%A4%A9" target="_blank">
                    QUERO COMPRAR
                </a>
            </div>

            <div className={styled.AboutImg}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}>
                    {
                        Carroussel.map((item) => (
                            <SwiperSlide>
                                <img src={item} alt="Ecoville Pedreiras" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
};
