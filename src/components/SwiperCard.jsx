import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { MovCard } from "./MovieCard";
import { Link } from "react-router-dom";
export const SwiperCard = ({data}) => {
	return (
		<Swiper
			slidesPerView={6}
			spaceBetween={2}
			pagination={{
				clickable: true,
			}}
			breakpoints={{
				'@0.00': {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				'@0.75': {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				'@1.00': {
					slidesPerView: 4,
					spaceBetween: 40,
				},
				'@1.50': {
					slidesPerView: 6,
					spaceBetween: 50,
				},
			}}
			modules={[Pagination]}
			className="mySwiper"
		>
				{
					data?.map((movie, index) => {
						return(
						<SwiperSlide key={index}>
							<Link to="/detail-movie">
								<div className="w-fit mb-12">
									<MovCard
										title={movie.title}
										releaseDate={movie.release_date}
										posterPath={movie.poster_path}
										className={'h-fit w-48'}
									/>
								</div>
							</Link>
						</SwiperSlide>
						)
					})
				}
		</Swiper>
	)
}