const products = [
    /* --------------------------------- TABLETS -------------------------------- */
    { 
        id: '1', 
        name: 'Apple iPad (9ª generación) 10.2" Wi-Fi 64GB - Gris espacial', 
        price: 1475191, 
        category: 'tablet', 
        img:'https://http2.mlstatic.com/D_NQ_NP_938998-MLA71496726949_092023-O.webp', 
        stock: 10, 
        description:'Lleno de potencia, muy fácil de usar y versátil. El nuevo iPad viene con una espectacular pantalla Retina de 10.2 pulgadas, el potente chip A13 Bionic y una cámara frontal ultra gran angular con Encuadre Centrado. Además, es compatible con el Apple Pencil y el Smart Keyboard. Con el iPad, harás de todo como si nada. Y por menos de lo que imaginas.'
    },
    { 
        id: '2', 
        name: 'Lenovo Tab M10 Plus 3rd Gen TB125FU 10.61" 128GB storm gray y 4GB de memoria RAM', 
        price: 1179900, 
        category: 'tablet', 
        img:'https://http2.mlstatic.com/D_NQ_NP_794316-MLU70023978735_062023-O.webp', 
        stock: 15, 
        description:'Esta tablet es la combinación perfecta de rendimiento y versatilidad, ideal para acompañar cada una de tus actividades. Transferir, sincronizar y acceder a tus dispositivos las veces que quieras ahora es posible. Sus conexiones bluetooth, wi-fi, wi-fi direct, usb-c 2.0 te permiten potenciar sus funciones al máximo. Captura todos tus momentos al instante. Gracias a sus cámaras, con resoluciones de 8 Mpx y 8 Mpx, podrás hacer videollamadas o sacarte fotos en cualquier momento y lugar, con una excelente calidad de imagen. Nitidez, brillo y colores vibrantes harán que tus experiencias se reflejen de manera óptima.'
    },
    { 
        id: '3', 
        name: 'Samsung Galaxy Tab S S7 FE with S Pen SM-T733 12.4" 128GB mystic black y 6GB de memoria RAM', 
        price: 2749900, 
        category: 'tablet', 
        img:'https://http2.mlstatic.com/D_NQ_NP_729539-MLA48049063325_102021-O.webp', 
        stock: 20, 
        description:'Esta tablet Samsung es la compañera ideal, con capacidad de sobra para cada una de tus actividades. El diseño delgado, compacto y portátil, con facilidad para sostener en una mano, lo convierte en una combinación perfecta de rendimiento y versatilidad. Transferir, sincronizar y acceder a tus dispositivos las veces que quieras ahora es posible. Sus conexiones bluetooth, wi-fi, mu-mimo, usb-c, smart switch, wi-fi direct te permiten potenciar sus funciones al máximo. Captura todos tus momentos al instante Gracias a sus cámaras, con resoluciones de 8 Mpx y 5 Mpx, podrás hacer videollamadas o sacarte fotos en cualquier momento y lugar, con una excelente calidad de imagen. Nitidez, brillo y colores vibrantes harán que tus experiencias se reflejen de manera óptima.'
    },
    /* -------------------------------- NOTEBOOKS ------------------------------- */
    { 
        id: '4', 
        name: 'Asus E1504fa-nj474 Ryzen 5-7520u Ram 16gb Ssd 512gb', 
        price: 1939000, 
        category: 'notebook', 
        img:'https://http2.mlstatic.com/D_NQ_NP_758506-MLU69649769306_052023-O.webp', 
        stock: 15, 
        description:'Disfruta de la perfecta combinación de rendimiento y diseño con este ordenador Asus Vivobook 15 E1504FA-NJ474. Encontrarás en él una excelente herramienta para tus trabajos de todos los días y para tus momentos de entretenimiento. Aprovecha la experiencia extraordinaria que la marca tiene para ofrecerte y optimiza la calidad de tus imágenes y videos. Pantalla con gran impacto visual. Su pantalla LED de 15.6" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle. Eficiencia a tu alcance su procesador AMD de 4 núcleos, te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar. Potente disco sólido El disco sólido de 512 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.'
    },
    { 
        id: '5', 
        name: 'Lenovo IdeaPad 14ADA05 platinum gray 14", AMD Athlon Silver 3050U 8GB de RAM 256GB SSD, AMD Radeon RX Vega 2 1366x768px Windows 10 Home', 
        price: 1180000, 
        category: 'notebook', 
        img:'https://http2.mlstatic.com/D_NQ_NP_670935-MLA51988776838_102022-O.webp', 
        stock: 20, 
        description:'El ordenador Lenovo IdeaPad 3 fue pensado para hacer tu vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarlo, lo convertirá en tu PC favorita. Cualquier tarea que te propongas, ya sea en casa o en la oficina, la harás con facilidad gracias a su poderoso rendimiento. Pantalla con gran impacto visual, su pantalla de 14" y 1366x768 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle. Eficiencia a tu alcance, su procesador AMD Athlon Silver de 2 núcleos, te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar. Potente disco sólido, el disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.  Un procesador exclusivo para los gráficos, su tarjeta gráfica AMD Radeon RX Vega 2 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.'
    },
    { 
        id: '6', 
        name: 'Asus X415EA gris 14", Intel Core i3 1115G4 12GB de RAM 256GB SSD, Intel UHD Graphics Xe G4 48EUs 60 Hz 1920x1080px Linux Endless', 
        price: 1339000, 
        category: 'notebook', 
        img:'https://http2.mlstatic.com/D_NQ_NP_633646-MLA53601468472_022023-O.webp', 
        stock: 10, 
        description:'La laptop Asus X415EA es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina. Pantalla con gran impacto visual, su pantalla LED de 14" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle. Eficiencia a tu alcance, su procesador Intel Core i3 de 2 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. En base a esto, permite el desempeño necesario para la edición de fotografías o videos en programas básicos. Potente disco sólido, el disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas. Un procesador exclusivo para los gráficos, su tarjeta gráfica Intel UHD Graphics Xe G4 48EUs convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.'
    },
    /* -------------------------------- CELULARES ------------------------------- */
    { 
        id: '7', 
        name: 'Pocophone Poco X5 Pro 5G Dual SIM 256 GB negro 8 GB RAM 12', 
        price: 1214900, 
        category: 'celular', 
        img:'https://http2.mlstatic.com/D_NQ_NP_722574-MLU70044604036_062023-O.webp', 
        stock: 30, 
        description:'Descubre infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Pon a prueba tu creatividad y juega con la iluminación, diferentes planos y efectos para obtener grandes resultados. Además, el dispositivo cuenta con cámara frontal de 16 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Mira tus series y películas favoritas con la mejor definición a través de su pantalla AMOLED de 6.67". Disfruta de colores brillantes y detalles precisos en todos tus contenidos. Con su potente procesador y memoria RAM de 8 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras. Máxima seguridad para que solo tú puedas acceder al equipo. Podrás elegir entre el sensor de huella dactilar para habilitar el teléfono en un toque, o el reconocimiento facial que permite un desbloqueo hasta un 30% más rápido. ¡Desenchúfate! Con la súper batería de 5000 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas.'
    },
    { 
        id: '8', 
        name: 'Tecno Spark 10 Pro 256gb / 8ram / 50mp', 
        price: 589900, 
        category: 'celular', 
        img:'https://http2.mlstatic.com/D_NQ_NP_647638-MLA69922626252_062023-O.webp', 
        stock: 10, 
        description:'Con su potente procesador y memoria RAM de 8 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras. Olvídate de borrar. Con su memoria interna de 256 GB podrás descargar todos los archivos y aplicaciones que necesites, guardar fotos y almacenar tus películas, series y videos favoritos para reproducirlos cuando quieras.'
    },
    { 
        id: '9', 
        name: 'Xiaomi Redmi Note 12 Pro+ 5G Dual SIM 256 GB obsidian black 8 GB RAM', 
        price: 1354900, 
        category: 'celular', 
        img:'https://http2.mlstatic.com/D_NQ_NP_933725-MLA54384359928_032023-O.webp', 
        stock: 30, 
        description:'Descubre infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Pon a prueba tu creatividad y juega con la iluminación, diferentes planos y efectos para obtener grandes resultados. Además, el dispositivo cuenta con cámara frontal de 16 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Mira tus series y películas favoritas con la mejor definición a través de su pantalla AMOLED de 6.67". Disfruta de colores brillantes y detalles precisos en todos tus contenidos. Con su potente procesador y memoria RAM de 8 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras. Con el sensor de huella digital, el acceso es seguro y podrás desbloquearlo automáticamente con un toque. ¡Desenchúfate! Con la súper batería de 5000 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas.'
    },
    /* ------------------------------- SMARTWATCH ------------------------------- */
    { 
        id: '10', 
        name: 'Xiaomi Lite Redmi Watch 2 Lite Sport 1.55" caja de abs black, malla black de tpu silicona y bisel negro de plástico', 
        price: 229900, 
        category: 'smartwatch', 
        img:'https://http2.mlstatic.com/D_NQ_NP_863961-MLA49011508089_022022-O.webp', 
        stock: 20, 
        description:'Con 10 años de trayectoria, Xiaomi se posiciona como uno de los líderes indiscutidos en el mercado de los smartwatches. Sus productos se destacan por la calidad, el diseño sencillo y muy buenas prestaciones. La Mi Band tiene todo lo necesario para acompañarte en tu rutina. El nivel de oxígeno en sangre es un indicador muy importante para determinar el bienestar general. Podrás controlar este dato desde tu muñeca y evaluar tu condición física mientras realices tus actividades diarias o en sesiones de entrenamiento intenso. Gracias a la función de monitoreo del sueño podrás aprender más acerca de tus hábitos por las noches y la calidad de tu descanso para que puedas rendir mejor al día siguiente. Esta función da seguimiento al ciclo menstrual y las fases de ovulación. Además de almacenar los datos, brinda recordatorios con anticipación de acuerdo a los registros realizados y permite que accedas a las estadísticas para un mayor conocimiento de tu salud. Registra todos tus recorridos en tiempo real gracias al módulo GPS incorporado en el smartwatch. Desafía tus límites con los datos que te proporciona en tiempo real como la distancia, la velocidad y el ritmo. ¡Entrena todos los días! Su batería tiene una duración de hasta 10 días, dependiendo de la intensidad del uso. Tendrás energía suficiente para acompañar tus entrenamientos diarios y llevarlos a otro nivel.'
    },
    { 
        id: '11', 
        name: 'Apple Watch Series 8 GPS - Caja de aluminio medianoche 45 mm - Correa deportiva medianoche - Patrón', 
        price: 2080000, 
        category: 'smartwatch', 
        img:'https://http2.mlstatic.com/D_NQ_NP_710273-MLA52127704169_102022-O.webp', 
        stock: 15, 
        description:'El Apple Watch Series 8 viene con apps y sensores de salud avanzados con los que puedes hacerte un electrocardiograma, medir tu frecuencia cardiaca y nivel de oxígeno en la sangre, y registrar cambios de temperatura para obtener información relevante sobre tu ciclo menstrual. Además, incluye Detección de Choques, datos sobre las fases del sueño y métricas avanzadas de entrenamiento para ayudarte a llevar una vida más activa, saludable, segura y conectada. Tu compañero ideal para llevar una vida saludable se volvió aún más poderoso. Sus sensores avanzados brindan información que te ayudará a entender mejor tu salud. Las nuevas funcionalidades de seguridad pueden pedir ayuda por ti cuando más la necesitas. Y en su brillante pantalla Retina siempre activa todo es fácil de leer, incluso cuando tienes el brazo en reposo. Disponible en diferentes tamaños y materiales, con un mundo de correas para elegir y carátulas con complicaciones hechas a la medida de tus intereses. Detección de Choques y Detección de Caídas pueden comunicarse automáticamente con los servicios de emergencia en caso de que tengas un accidente de auto grave o una caída fuerte. Y Emergencia SOS te permite pedir asistencia urgente con tan solo presionar un botón. Obtén información relevante sobre la salud de la mujer gracias al revolucionario sensor de temperatura. Monitorea tu nivel de oxígeno en sangre. Hazte un electrocardiograma. Recibe notificaciones si tienes un ritmo cardiaco irregular. Y descubre cuánto tiempo pasas en cada fase del sueño: MOR, sueño ligero y sueño profundo. Funciona a la perfección con tus dispositivos y servicios de Apple: desbloquea tu Mac de forma automática, encuentra tus dispositivos con un toque y haz pagos con Apple Pay. El Apple Watch requiere un iPhone 8 o posterior con la última versión de iOS. Tiene mucho aguante. Es resistente a los golpes, tiene una certificación IP6X de resistencia al polvo y fue diseñado para nadar, con una resistencia al agua hasta 50 metros. La mejorada app Entrenamiento incluye nuevas formas de entrenar y métricas avanzadas que te dan más información sobre tu rendimiento. Además, el Apple Watch viene con tres meses gratis de Apple Fitness+. Con acceso a miles de apps del App Store al alcance de tu mano, el Apple Watch es el dispositivo personal perfecto para todo lo que te apasiona.'
    },
    { 
        id: '12', 
        name: 'Samsung Galaxy Watch5 Pro (Bluetooth) 1.4" caja 45mm de titanio gris titanio, malla gris titanio y bisel gris titanio SM-R920', 
        price: 1479900, 
        category: 'smartwatch', 
        img:'https://http2.mlstatic.com/D_NQ_NP_824722-MLA51453668020_092022-O.webp', 
        stock: 15, 
        description:'Samsung es sinónimo de calidad y evolución tecnológica. Su sistema de navegación intuitivo y la buena integración con otros dispositivos hacen de los relojes inteligentes de esta marca una opción siempre confiable. Además, posee muchas opciones de personalización para que encuentres el estilo que va con vos. Gracias a la función de monitoreo del sueño podrás aprender más acerca de tus hábitos por las noches y la calidad de tu descanso para que puedas rendir mejor al día siguiente. Registra todos tus recorridos en tiempo real gracias al módulo GPS incorporado en el smartwatch. Desafía tus límites con los datos que te proporciona en tiempo real como la distancia, la velocidad y el ritmo.'
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}