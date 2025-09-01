import ImageTrail from './ui/ImageTrail';

const HeroSection = () => {
  return (
    <>
      <div
        style={{ height: '100dvh', position: 'relative', overflow: 'hidden' }}
      >
        <h1 className='text-6xl absolute text-white top-1/2 left-1/2 z-200'>
          helllo
        </h1>
        <ImageTrail
          items={[
            'https://images.pexels.com/photos/33638020/pexels-photo-33638020.jpeg',
            'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg',
            'https://images.pexels.com/photos/415708/pexels-photo-415708.jpeg',
            'https://images.pexels.com/photos/4665370/pexels-photo-4665370.jpeg',
            'https://images.pexels.com/photos/14557186/pexels-photo-14557186.jpeg',
            'https://images.pexels.com/photos/20053245/pexels-photo-20053245.jpeg',
            'https://images.pexels.com/photos/6942782/pexels-photo-6942782.jpeg',
            'https://images.pexels.com/photos/10144918/pexels-photo-10144918.jpeg',
          ]}
          variant={7}
        />
      </div>
    </>
  );
};

export default HeroSection;
