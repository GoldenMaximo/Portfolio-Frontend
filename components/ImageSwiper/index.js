import PropTypes from 'prop-types';
import * as S from './styles';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination]);

export const ImageSwiper = ({ project, onClose, initialSlide }) => (
    <S.ComponentContainer top={window.scrollY}>
        <S.Backdrop onClick={onClose} />
        <S.SwiperContainer>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: false }}
                initialSlide={initialSlide.current}
            >
                {
                    project.images.map((imageObj, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <S.FlexAlignment>
                                    <img src={imageObj.imageUrl} />
                                    <p>{imageObj.imageName}</p>
                                </S.FlexAlignment>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </S.SwiperContainer>
    </S.ComponentContainer>
);

ImageSwiper.propTypes = {
    project: PropTypes.shape({
        _id: PropTypes.string,
        slug: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        techStack: PropTypes.arrayOf(PropTypes.string),
        images: PropTypes.arrayOf(PropTypes.shape({
            imageName: PropTypes.string,
            imageUrl: PropTypes.string
        })),
        githubUrls: PropTypes.arrayOf(PropTypes.string),
        isMobile: PropTypes.bool,
        deployedAt: PropTypes.string,
    }),
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    initialSlide: PropTypes.shape({
        current: PropTypes.number
    })
};