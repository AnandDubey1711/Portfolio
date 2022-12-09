import React from 'react';
import {Pagination} from 'swiper';
import './testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'



const data = [
  {
    avatar:AVTR1,
    name:'Niya',
    review:'Id laboris aliquip cillum ullamco. Amet aliquip ipsum irure in dolore Lorem Lorem sunt aliquip.Quis deserunt dolore tempor in incididunt proident do voluptate ad ullamco. Ex in sint laborisex sit voluptate amet.'
  },
  {
    avatar:AVTR2,
    name:'Simon',
    review:'Id laboris aliquip cillum ullamco. Amet aliquip ipsum irure in dolore Lorem Lorem sunt aliquip.Quis deserunt dolore tempor in incididunt proident do voluptate ad ullamco. Ex in sint laborisex sit voluptate amet.'
  },
  {
    avatar:AVTR3,
    name:'Riley',
    review:'Id laboris aliquip cillum ullamco. Amet aliquip ipsum irure in dolore Lorem Lorem sunt aliquip.Quis deserunt dolore tempor in incididunt proident do voluptate ad ullamco. Ex in sint laborisex sit voluptate amet.'
  },
  {
    avatar:AVTR4,
    name:'Nana Ama',
    review:'Id laboris aliquip cillum ullamco. Amet aliquip ipsum irure in dolore Lorem Lorem sunt aliquip.Quis deserunt dolore tempor in incididunt proident do voluptate ad ullamco. Ex in sint laborisex sit voluptate amet.'
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={65}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {
        data.map(({avatar ,name, review}, index)=>{
          return(
          <SwiperSlide key={index} className='testimonial'>
          <div className='client__avatar'>
              <img src={avatar} alt='avt'/>
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
          )
        })
      }
      </Swiper>
      
    </section>
  )
}

export default Testimonials