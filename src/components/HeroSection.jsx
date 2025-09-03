import Button from './ui/Button';
import SplitText from './ui/welcomeText';
import HeroBg from '../assets/HeroBg.png';
import HeroBg2 from '../assets/HeroBg2.png';

const HeroSection = () => {
  return (
    <div className='relative'>
      <img
        src={HeroBg2}
        alt='Background Decoration Right'
        className='absolute bottom-0  w-full object-contain'
      />

      {/* Foreground Content */}
      <div className='h-[calc(100dvh-58px)] flex items-center justify-center overflow-hidden flex-col'>
        <SplitText
          text='Journezy: Where AI guides your adventure!'
          className='text-[40px] md:text-[80px] font-semibold  leading-snug md:leading-normal '
          delay={100}
          duration={0.6}
          ease='power3.out'
          splitType='chars'
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin='-100px'
          textAlign='center'
        />
        <div className='pt-20'>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
