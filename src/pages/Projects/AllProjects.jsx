import Img8 from "/src/assets/8.webp"
import Img4 from "/src/assets/4.webp"
import Img3 from "/src/assets/3.webp"
import Img2 from "/src/assets/2.webp"
import ImgNext from "/src/assets/next  portfolio.webp"
import ImgQuran from "/src/assets/quran.webp"
import ImgWeatherR from "/src/assets/wather-react-pwa.webp"
import ImgPorW from "/src/assets/wordpress-portfolio.webp"
import ImgGen from "/src/assets/generate-qr-code.webp"
import ImgCurr from "/src/assets/currencyconverter.webp"
import ImgMui from "/src/assets/portfolio-mui.webp"

const projects = [
    {
      category: 'React',
      title: 'Weather Website',
      description: 'React + vite + BOOTSTRAP + PWA',
      link: 'https://wather-react-pwa.vercel.app/',
      github:'https://github.com/Amine-Triki/wather-react-pwa',
      imageSrc: ImgWeatherR,
    },

    {
      category: 'JavaScript',
      title: 'Weather Website',
      description: 'JavaScript + BOOTSTRAP',
      link: 'https://amine-triki.github.io/Weather-js/',
      github:'https://github.com/Amine-Triki/Weather-js',
      imageSrc: Img8,
    },
    
    {
      category: 'Wordpress',
      title: 'personal website',
      description: 'WORDPRESS',
      link: 'https://aminetriki.com.tn/',
      imageSrc: ImgPorW,
    },
    {
      category: 'Wordpress',
      title: 'M.J.S.E website',
      description: 'WORDPRESS',
      link: 'https://mjses.com',
      imageSrc: Img4,
    },
    {
      category: 'JavaScript',
      title: 'personal website',
      description: 'JavaScript + BOOTSTRAP',
      link: 'https://amine-triki.github.io/portfolio/',
      github:'https://github.com/Amine-Triki/portfolio',
      imageSrc: Img3,
    },
    {
      category: 'JavaScript',
      title: 'personal website',
      description: 'JavaScript + BOOTSTRAP',
      link: 'https://amine-triki.github.io/',
      github:'https://github.com/Amine-Triki/Amine-Triki.github.io',
      imageSrc: Img2,
    },

    {
      category: 'React',
      title: 'quran with voice',
      description: 'React + vite + BOOTSTRAP + PWA',
      link: 'https://quran-with-voice.vercel.app/',
      github:'https://github.com/Amine-Triki/quran-with-voice',
      imageSrc: ImgQuran,
    },
    

    {
      category: 'React',
      title: 'personal website',
      description: 'Nextjs + Tailwind css + PWA',
      link: 'https://next-js-js-portfolio.vercel.app/',
      github:'https://github.com/Amine-Triki/nextJs-js-portfolio',
      imageSrc: ImgNext,
    },
    {
      category: 'React',
      title: 'generate qr code Website',
      description: 'React + Tailwind css',
      link: 'https://generate-qr-code-amine.vercel.app/',
      github:'https://github.com/Amine-Triki/generate-qr-code',
      imageSrc: ImgGen,
    },
    {
      category: 'React',
      title: 'Currency Converter Website',
      description: 'React + bootstrap',
      link: '',
      github:'https://github.com/Amine-Triki/CurrencyConverterJs',
      imageSrc: ImgCurr,
    },
    {
      category: 'React',
      title: 'personal website',
      description: 'React + Mui',
      link: 'https://portfolio-mui-delta.vercel.app/',
      github:'https://github.com/Amine-Triki/portfolio-mui',
      imageSrc: ImgMui,
    },
    // Add more projects as needed
  ];

  export default projects;