import { animated, useSpring } from '@react-spring/web';

interface AnimatedNumberProps {
  value: number;
}

const AnimatedNumber = ({ value }: AnimatedNumberProps) => {
  const { number } = useSpring({
    from: { number: 1 },
    to: { number: value },
    config: { duration: 1500 },
  });

  return (
    <animated.h2>{number.to((val: number) => Math.floor(val))}</animated.h2>
  );
};

export default AnimatedNumber;
