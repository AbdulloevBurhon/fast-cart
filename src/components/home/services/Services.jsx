import Container from '../../ui/Container'

function Services() {
 const services = [
  {
   title: 'FREE AND FAST DELIVERY',
   desc: 'Free delivery for all orders over $140',
   icon: 'ser3.png' // Убедитесь, что пути к фото верны
  },
  {
   title: '24/7 CUSTOMER SERVICE',
   desc: 'Friendly 24/7 customer support',
   icon: 'ser1.png'
  },
  {
   title: 'MONEY BACK GUARANTEE',
   desc: 'We return money within 30 days',
   icon: 'ser2.png'
  }
 ]

 return (
  <section className="bg-white py-20">
   <Container>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 text-center">
     {services.map((item, index) => (
      <div key={index} className="flex flex-col items-center group">
       {/* Контейнер для иконки с двойным кругом */}
       <div className="mb-6 relative flex items-center justify-center">
        {/* Внешний светло-серый круг */}
        <div className="w-20 h-20 rounded-full bg-[#2F2E30]/30 flex items-center justify-center">
         {/* Внутренний черный круг */}
         <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
          <img
           src={item.icon}
           alt={item.title}
           className="w-10 h-10 object-contain invert" // invert если иконки черные, чтобы стали белыми
          />
         </div>
        </div>
       </div>

       {/* Заголовок (Верхний регистр) */}
       <h3 className="text-xl font-bold text-black mb-2 tracking-tight">
        {item.title}
       </h3>

       {/* Описание */}
       <p className="text-black text-sm font-normal leading-relaxed">
        {item.desc}
       </p>
      </div>
     ))}
    </div>
   </Container>
  </section>
 )
}

export default Services
