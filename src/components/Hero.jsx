  import { motion } from 'framer-motion';
  import { Link } from 'react-router-dom';
  import { styles } from '../styles';
  import { navLinks } from '../constants';
  import { shaq, bwmap, worldmap } from '../assets';
  import { useTranslation } from 'react-i18next';
  import { useState, useEffect } from 'react';

  const Hero = () => {
    const { t } = useTranslation();
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
      // Reset the animation after it completes´
      const titleElement = document.getElementById('animatedTitle');

      const handleAnimationEnd = () => {
        setAnimate(false);
        setTimeout(() => {
          setAnimate(true);
        }, 200); // Adjust the delay as needed
      };

      titleElement.addEventListener('animationend', handleAnimationEnd);

      return () => {
        titleElement.removeEventListener('animationend', handleAnimationEnd);
      };
    }, []);

    const textVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const letterVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    const letters = t('hero.1').split('');

    const words = t('hero.1').split(' ');

    const handleAnimationComplete = () => {
      setAnimate(true);
    };

    return (
      <>
        <section
          className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
          sm:bg-hero bg-hero-mobile overflow-hidden">
          <div
            className={`absolute inset-0 sm:top-[250px] top-[150px] 
            lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
            max-w-7xl mx-auto flex flex-row items-start
            justify-between gap-3`}>
            <div className="flex flex-col justify-center items-center mt-5 ml-3">
              <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
              <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
            </div>

            <div>
  <h1
    id='animatedTitle'
    className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
  >
      <motion.span
          variants={textVariants}
          initial='hidden'
          animate={animate ? 'visible' : 'hidden'}
          onAnimationComplete={() => setAnimate(true)} // Reset animation loop
        >
          {words.map((word, wordIndex) => (
            <span key={wordIndex}>
              {word.split('').map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  variants={letterVariants}
                  initial='hidden'
                  animate='visible'
                  transition={{ delay: wordIndex * 0.5 + letterIndex * 0.1, duration: 0.5 }}
                  onAnimationComplete={handleAnimationComplete}
                >
                  {letter}
                </motion.span>
              ))}
              {wordIndex < words.length - 1 && ' '} {/* Add a space if it's not the last word */}
            </span>
          ))}
        </motion.span>
    <span
      className="sm:text-battleGray sm:text-[90px] 
      text-eerieBlack text-[50px] font-mova
      font-extrabold uppercase"
    >
      <br/> Júlio Gonçalves
    </span>
  </h1>
  <span className={`${styles.heroSubText}  sm:text-[90px] 
      text-eerieBlack text-[50px] font-mova
      font-extrabold uppercase`}>
    <motion.span
          variants={textVariants}
          initial='hidden'
          animate={animate ? 'visible' : 'hidden'}
          onAnimationComplete={() => setAnimate(true)} // Reset animation loop
        >
          {t('hero.2').split(' ').map((word, wordIndex) => (
            <span key={wordIndex}>
              {word.split('').map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  variants={letterVariants}
                  initial='hidden'
                  animate={["visible", "active"]}
                  transition={{ delay: wordIndex * 0.1 + letterIndex * 0.1, duration: 0.2 }}
                  onAnimationComplete={handleAnimationComplete}
                >
                  {letter}
                </motion.span>
              ))}
              {wordIndex < words.length - 1 && ' '} {/* Add a space if it's not the last word */}
            </span>
          ))}
        </motion.span>
  </span>
    </div>
            <div
              className="w-screen flex flex-col items-start 
              justify-center sm:-ml-[3rem] xxs:mt-4"></div>

            <div></div>
          </div>

          <div
            className="absolute xs:bottom-10 bottom-32 w-full 
            flex justify-center items-center">
            <a href="#about">
              <div
                className="w-[35px] h-[64px] rounded-3xl border-4 
              border-french border-dim flex
              justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  className="w-3 h-3 rounded-full bg-taupe mb-1"
                />
              </div>
            </a>
          </div>

          {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
          <div>
            <img
              className="absolute bottom-0 ml-[40vw] 
              lg:ml-[65vw] md:ml-[50vw] xmd:ml-[50vw] 2xl:ml-[58vw]
              sm:h-[90vh] md:h-[70vh] xl:h-[85vh]"
              src={shaq}
              alt="shaquille"
            />
          </div>
        </section>
      </>
    );
  };

  export default Hero;
