import Button from './ui/Button';
import SplitText from './ui/welcomeText';

const HeroSection = () => {
  return (
    <>
      <div>
        <div className='h-[calc(100vh-20px)] flex items-center justify-center absolute '>
          <SplitText
            text='Journezy:Where AI guides your adventure!'
            className={`text-5xl md:text-7xl font-bold text-center leading-snug md:leading-normal `}
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
          <div className='absolute top-[85%]'>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
