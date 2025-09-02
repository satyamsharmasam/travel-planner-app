import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';

const Button = () => {
  const navigate = useNavigate();
  const [animating, setAnimating] = useState(false);
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // ✅ Mobile screen animation
    mm.add('(max-width: 768px)', () => {
      const tl = gsap.timeline();
      tl.fromTo(
        buttonRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      )
        .fromTo(
          circleRef.current,
          { scale: 0 },
          { scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
          '-=0.3'
        )
        .fromTo(
          textRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
          '-=0.2'
        );
    });

    // ✅ Desktop screen animation
    mm.add('(min-width: 769px)', () => {
      const tl = gsap.timeline();
      tl.fromTo(
        circleRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }
      )
        .fromTo(
          arrowRef.current,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          textRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
          '-=0.2'
        );
    });

    return () => mm.revert();
  }, []);

  const handleClick = () => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      navigate('/plantrip');
    }, 500);
  };

  return (
    <StyledWrapper>
      <button
        ref={buttonRef}
        className={`learn-more ${animating ? 'hovered' : ''}`}
        onClick={handleClick}
      >
        <span className='circle' aria-hidden='true' ref={circleRef}>
          <span className='icon arrow' ref={arrowRef} />
        </span>
        <span className='button-text' ref={textRef}>
          Plan my Trip
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
  }

  button.learn-more {
    width: 12rem;
    height: auto;
  }

  button.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #282936;
    border-radius: 1.625rem;
  }

  button.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
  }

  button.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }

  button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: '';
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
  }

  button.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #282936;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  button.learn-more.hovered .circle {
    width: 100%;
  }

  button.learn-more.hovered .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
  }

  button.learn-more.hovered .button-text {
    color: #fff;
  }

  button.learn-more:hover .circle {
    width: 100%;
  }

  button.learn-more:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
  }

  button.learn-more:hover .button-text {
    color: #fff;
  }
`;

export default Button;
