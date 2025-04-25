import './App.css'
import LimitedOfferBanner from './components/LimitedOfferBanner.jsx'
import Kodi from './assets/kodi.png'
import KodiPensando from './assets/kodi-pensando.png'
import KodiCarta from './assets/kodi-carta.png'
import KodiCel from './assets/kodi-cel1.png'
import Fondo from './assets/fondo.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from 'react'


import { useRef } from 'react';
// AQUII
import { Star, ShieldCheck, Truck, ShoppingCart, PackageSearch, Heart, Calendar, IdCard, PanelTop, PanelsTopLeft, Phone, FileVolume, Headset, FastForward, HandCoins } from 'lucide-react';

const icons = [Star, ShieldCheck, Truck, ShoppingCart, PackageSearch, Heart];

function App() {

  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1;
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 })
  }, [])

  return (
    <div>
    <nav className="bg-gradient-to-r from-teal-800 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 text-2xl font-bold tracking-wide">KODI</div>
            <ul className="hidden md:flex space-x-6 text-sm font-medium">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">About</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
              <li><a href="#" className="hover:text-gray-400">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className=" bg-[#76b8bc] text-white py-1 pt-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4"> ¿Quieres Aumentar tus Ventas?</h1>
          <p className="text-lg md:text-md mb-5 animate-fade-in-up">Agenda clientes, envía recordatorios, publicidad, paginas web y más.</p>
        </div>
      </header>

      {/* Placeholder de productos */}
      <section id="productos" className="pt-20 bg-[url('./assets/fondo.svg')] bg-cover bg-no-repeat bg-center">
        <div className="max-w-7xl mx-auto px-4">

          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Columna izquierda: productos */}

            
            <div className="md:w-1/2 w-full mr-10">

              {/* Título animado */}
              <h2 className="text-8xl font-extrabold text-gray-700 mb-6 text-left animate-fade-in-up">
                Descubre lo Mejor para Tu Negocio
              </h2>

              {/* Carrusel de iconos */}
              <div
                ref={carouselRef}
                className="flex overflow-x-auto no-scrollbar space-x-6 mb-10 px-2 py-6"
              >
                {icons.map((Icon, idx) => (
                  <div key={idx} className="min-w-[60px] h-16 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                    <Icon className="text-teal-600" size={28} />
                  </div>
                ))}
              </div>


              {/* Botones estratégicos */}
              <div className="flex justify-center gap-6 mt-8 animate-bounce">
                <button className="bg-white text-teal-800 px-6 py-3 rounded-lg transition shadow-md border border-teal-600 hover:bg-teal-50">
                  Conoce Más
                </button>
                <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition shadow-md">
                  Empieza Ahora
                </button>
              </div>
              </div>

            {/* Columna derecha: imagen */}
            <div data-aos="slide-up" className="md:w-1/2 w-full mt-10 md:mt-0 flex justify-end md:justify-end ml-10">
              <img
                src={Kodi}
                alt="Oferta especial"
                className="w-[137%] max-w-none relative left-[35%] animate-fade-in-up"
              />
            </div>


          </div>
        </div>
         <LimitedOfferBanner deadline="2025-04-30T23:59:59" /> 
      </section>

      <section id="productos" className="py-24 bg-[url('./assets/fondo5.svg')] bg-cover bg-no-repeat bg-center">

                <h6 className="text-4xl font-bold text-white pb-12 text-center">¿Por qué Elegirnos?</h6>

                {/* cards */}

                {/* AQUII */}

                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div data-aos="fade-up" className="bg-white rounded-lg shadow-lg p-6 text-center">
                      <div className='flex flex-col items-center'>
                        <HandCoins className="text-teal-600 mb-4" size={48} />
                        <h3 className="text-xl font-bold mb-2"> Precio Justo </h3>
                      </div>
                      <p className="text-gray-600"> Ofrecemos precios competitivos, justos y transparentes.</p>
                    </div>
                    <div data-aos="fade-up" className="bg-white rounded-lg shadow-lg p-6 text-center">
                      <div className='flex flex-col items-center'>
                        <FastForward className="text-teal-600 mb-4" size={48} />
                        <h3 className="text-xl font-bold mb-2"> Rapidez </h3>
                      </div>
                      <p className="text-gray-600"> Implementación rápida y eficiente de nuestros servicios.</p>
                    </div>
                    <div data-aos="fade-up" className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <div className='flex flex-col items-center'>
                          <Headset className="text-teal-600 mb-4" size={48} />
                        <h3 className="text-xl font-bold mb-2"> Soporte 24/7 </h3>
                      </div>
                      <p className="text-gray-600">Estamos aquí para ayudarte en cualquier momento.</p>
                    </div>
                  </div>
                </div>
                
                

      </section>








      <section className="bg-[url('./assets/fondo6.svg')] bg-cover bg-no-repeat bg-center py-14">

      <h2 className="text-6xl font-bold text-center text-gray-700 mb-4"> ¡Unete a la Revolución Digital! </h2>

      <div className="max-w-7xl mt-12 mx-auto flex flex-col md:flex-row items-center">
      

        {/* Imagen */}
        <div data-aos="slide-up" className="md:w-1/2 bg-gray-200 min-h-[600px] flex justify-center items-center min-w-[700px]">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Xtktav_BoCg?si=w3m3Zvne9osqAi1y" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" 
            className='shadow-xl rounded-lg'
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
        </div>

        {/* Contenido */}

        <div data-aos="slide-up" className="flex-1 h-full md:w-1/2 bg-gradient-to-r from-teal-800 to-indigo-600 text-white min-h-[600px] min-w-[700px] p-12">

        
          <h2 className="text-3xl font-bold mb-6"> AGENDA UNA DEMOSTRACION GRATIS </h2>
          <p className="text-lg mb-4"> ¿Aún no estás seguro? ¡No te preocupes! Agenda una demostración gratuita 
          y uno de nuestros expertos te contactará para mostrarte y asesorarte sobre como funcionan nuestros servicios.</p>
          <p className="text-2xl text-green-200 text-center mb-6 my-8"> ¡Totalmente gratis y sin compromiso! </p>

          <div className="flex justify-center">
            <img
              src={KodiCel}
              alt="Imagen ejemplo"
              className="w-[35%]"
            />
          </div>

          <div className="flex justify-center">
            <button className="bg-white text-teal-800 px-6 py-3 rounded-lg transition shadow-md border border-teal-600 hover:bg-teal-50">
              Agenda tu demostración
            </button>
          </div>

      
        </div>

      </div>
      </section>



      <section className="py-32 bg-[url('./assets/fondo7.svg')] bg-cover bg-no-repeat bg-center">
      <div className="max-w-7xl mx-auto px-4">
        {/* Contenedor principal con flex */}
        <div className="flex items-center justify-between gap-6">


          {/* Sección de imagen (mitad izquierda) */}
          <div data-aos="slide-right" className="w-1/3 flex justify-center">
            <img
              src={KodiPensando}
              alt="Imagen ejemplo"
              className="w-[150%] max-w-none"
            />
          </div>

          {/* Sección de contenido (mitad derecha) */}
          <div className="w-2/3 pl-24">
            <h2 className="text-6xl font-bold text-gray-700 mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 mb-6">Aprovecha nuestras soluciones personalizadas para acelerar el crecimiento de tu empresa.</p>

            {/* AQUII */}
            <div className="max-w-7xl mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div data-aos="slide-down" className="bg-white rounded-lg shadow-lg p-6 text-center hover:transition-transform hover:scale-105 hover:cursor-pointer">
                      <div className='flex flex-col items-center'>
                        <Calendar className="text-teal-600 mb-4" size={48} />
                        <h3 className="text-xl font-bold mb-2">Control de citas </h3>
                      </div>
                      <p className="text-gray-600"> Gestiona citas y envía recordatorios automáticos.</p>
                    </div>

                    <div data-aos="slide-down" className="bg-white rounded-lg shadow-lg p-6 text-center hover:transition-transform hover:scale-105 hover:cursor-pointer">
                      <div className='flex flex-col items-center'>
                        <IdCard className="text-teal-600 mb-4" size={48} />
                        <h3 className="text-xl font-bold mb-2"> Tarjeta de Fidelidad </h3>
                      </div>
                      <p className="text-gray-600"> Aumenta la lealtad de tus clientes con una tarjeta digital </p>
                    </div>

                    <div data-aos="slide-down" className="bg-white rounded-lg shadow-lg p-6 text-center hover:transition-transform hover:scale-105 hover:cursor-pointer">
                      <div className='flex flex-col items-center'>
                        <PanelTop className="text-teal-600 mb-4" size={48} />
                        <h3 className="text-xl font-bold mb-2"> Mini Web Pública </h3>
                      </div>
                      <p className="text-gray-600"> Pagina web con datos basicos de contacto para tu negocio.</p>
                    </div>

                    <div data-aos="slide-up" className="bg-white rounded-lg shadow-lg p-6 text-center hover:transition-transform hover:scale-105 hover:cursor-pointer">
                      <div className='flex flex-col items-center'>
                        <FileVolume className="text-teal-600 mb-4" size={48} />
                        <h3 className="text-xl font-bold mb-2"> Flyers y Publicidad </h3>
                      </div>
                      <p className="text-gray-600"> Promociones y ofertas a través de flyers digitales.</p>
                    </div>

                    <div data-aos="slide-up" className="bg-white rounded-lg shadow-lg p-6 text-center hover:transition-transform hover:scale-105 hover:cursor-pointer">
                      <div className='flex flex-col items-center'>
                        <Phone className="text-teal-600 mb-4" size={48} />
                        <h3 className="text-xl font-bold mb-2"> Chat Bot en WhatsApp </h3>
                      </div>
                      <p className="text-gray-600"> Responde preguntas frecuentes y agenda citas automáticamente.</p>
                    </div>



                    <div data-aos="slide-up" className="bg-white rounded-lg shadow-lg p-6 text-center hover:transition-transform hover:scale-105 hover:cursor-pointer">
                      <div className='flex flex-col items-center'>
                        <PanelsTopLeft className="text-teal-600 mb-4" size={48} />
                        <h3 className="text-xl font-bold mb-2"> Web Completa </h3>
                      </div>
                      <p className="text-gray-600"> Pagina web completamente a la medida.</p>
                    </div>


                  </div>
                </div>
          </div>

          
        </div>
      </div>
    </section>

    <section id="productos" className="py-32 bg-[url('./assets/fondo4.svg')] bg-cover bg-no-repeat bg-center">

                <h6 className="text-5xl font-bold text-white text-center"> SELECCIONA TU PAQUETE </h6>
                <p className="text-lg mb-4 text-center text-gray-300 pt-4 pb-12"> ¿Quieres un paquete a la medida? ¡Contáctanos y te ayudamos a crear el paquete perfecto para tu negocio!</p>

                {/* dividir en 2 columnas */}

                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div data-aos="slide-right" className="bg-white rounded-lg shadow-lg p-6 text-center border border-teal-600">

                    <h3 className="text-3xl text-teal-800 font-bold mb-6"> ¡PAQUETE ANIMES! </h3>

                    <ul className="text-gray-600 px-6 py-6 text-xl">
                      <li className="flex items-center mb-2">
                        <span>✔️ Control de citas </span>
                      </li>
                      <li className="flex items-center mb-2">
                        <span>✔️ Tarjeta de Fidelidad </span>
                      </li>
                      <li className="flex items-center mb-2">
                        <span>✔️ Mini web publica </span>
                      </li>
                      <li className="flex items-center mb-2">
                        <span>✔️ Flyers al mes </span>
                      </li>
                      <li className="flex items-center mb-2">
                        <span>✔️ Soporte limitado</span>
                      </li>
                    </ul>  

                    <div className="flex justify-center gap-3 mt-8">
                        <h3 className="text-3xl text-red-800 font-bold mb-6 line-through"> $ 2,500.00 </h3>
                        <h3 className="text-3xl text-green-500 font-bold mb-6"> $ 1,500.00 </h3>
                    </div>

                    </div>


                  {/* Lista con checkboxs */}

                    <div data-aos="slide-left" className="bg-white rounded-lg shadow-lg p-6 text-center border border-teal-600">

                      <h3 className="text-3xl text-teal-800 font-bold mb-6"> ¡PAQUETE LUZCAS! </h3>

                      <ul className="text-gray-600 px-6 py-6 text-xl">
                        <li className="flex items-center mb-2">
                          <span>✔️ Control de citas </span>
                        </li>
                        <li className="flex items-center mb-2">
                          <span>✔️ Tarjeta de Fidelidad </span>
                        </li>
                        <li className="flex items-center mb-2">
                          <span>✔️ Web a la medida </span>
                        </li>
                        <li className="flex items-center mb-2">
                          <span>✔️ Mini web publica </span>
                        </li>
                        <li className="flex items-center mb-2">
                          <span>✔️ 10 Flyers al mes </span>
                        </li>
                        <li className="flex items-center mb-2">
                          <span>✔️ 10 Flyers al mes </span>
                        </li>
                        <li className="flex items-center mb-2">
                          <span>✔️ Soporte 24/7</span>
                        </li>
                      </ul>  

                      <div className="flex justify-center gap-3 mt-8">
                        <h3 className="text-3xl text-red-800 font-bold mb-6 line-through"> $ 2,500.00 </h3>
                        <h3 className="text-3xl text-green-500 font-bold mb-6"> $ 1,500.00 </h3>
                      </div>

                    <div className='flex justify-center'>
                      <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg animate-bounce hover:bg-teal-700 transition shadow-md mt-4 flex items-center justify-center">
                      <ShoppingCart className="text-white mx-4" size={28} />
                        ¡Quiero este paquete!
                      </button>
                    </div>

                      </div>

                      </div>
                      
                      



                </div>


    </section>









    <section className=" bg-[url('./assets/fondo7.svg')] bg-cover bg-no-repeat bg-center py-32">
      <div className="max-w-7xl px-4 flex flex-col md:flex-row items-center gap-12 mx-auto">
        
        {/* Imagen */}
        <div data-aos="fade" className="w-full md:w-1/2">
          <img
            src={KodiCarta}
            alt="Contáctanos"
            className="w-[137%] max-w-none relative right-[30%]"
          />
        </div>

        {/* Formulario */}
        <div data-aos="slide-up" className="w-full md:w-1/2 bg-gray-100 p-8 rounded-xl shadow-lg">
          <h2 className="text-5xl font-bold text-gray-800 mb-12">Contáctanos</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
              <input
                type="email"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mensaje</label>
              <textarea
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Escribe tu mensaje"
              ></textarea>
            </div>
            <div className='flex justify-end'>
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition "
            >
              Enviar mensaje
            </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <footer className="bg-gray-700 text-white py-4">

      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">© 2023 Kodi. Todos los derechos reservados.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="#" className="hover:text-gray-400">Política de privacidad</a></li>
          <li><a href="#" className="hover:text-gray-400">Términos de servicio</a></li>
        </ul>


              </div>

    </footer>

      
    </div>
  )
}

export default App
