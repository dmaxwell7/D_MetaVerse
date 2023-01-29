'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradiant-02 z-0 '/>
    <motion.div
      variant={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText  title=" | About D-MetaVerse" textstlyes='textcenter'/>
      <motion.p 
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
          <span className="font-extrabold text-white">D-Metaverse</span> is the new
        wave of the future, where you can enjoy the virtual worlds by feeling
        like it's the real world, you can feel what you feel in the metaverse
        world, because that is really the{' '}
        <span className="font-extrabold text-white">
          madness of the metaverse
        </span>{' '}
        world, using only{' '}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore any metaverse world you want, turn your dreams into
        reality. Let's{' '}
        <span className="font-extrabold text-white">explore</span> the madness
        of the <span className="font-extrabold text-white">metaverse</span> together.
      </motion.p>
      <motion.img 
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
);

export default About;
