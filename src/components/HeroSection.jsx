import Button from './ui/Button';
import SplitText from './ui/welcomeText';

const HeroSection = () => {
  return (
    <>
      <div className='h-[calc(100dvh-60px)] my-auto flex items-center justify-center  flex-wrap '>
        <SplitText
          text='Journezy:Where AI guides your  adventure!'
          className={`text-[40px] md:text-7xl font-semibold text-center leading-snug md:leading-normal `}
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
        <div className='absolute top-[90%]'>
          <Button />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
