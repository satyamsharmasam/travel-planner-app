import SplitText from './ui/welcomeText';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
const HeroSection = () => {
  return (
    <>
      <div className='h-screen flex items-center justify-center '>
        <SplitText
          text='Journezy: Where AI guides your adventure!'
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
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
    </>
  );
};

export default HeroSection;
