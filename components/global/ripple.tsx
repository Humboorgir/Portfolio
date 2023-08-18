import React, { useState, useLayoutEffect } from "react";

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: () => void,
) => {
  useLayoutEffect(() => {
    let bounce: any = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

interface Props {
  duration?: number;
  fast?: boolean;
}

const Ripple = ({ duration = 600, fast }: Props) => {
  interface Ripple {
    y: number;
    x: number;
    size: number;
  }

  const [rippleArray, setRippleArray] = useState<Ripple[]>([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event: any) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - scrollX - size / 2;
    const y = event.pageY - rippleContainer.y - scrollY - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    console.log(newRipple.y);
    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0" onClick={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          console.log(ripple);
          return (
            <span
              className={`absolute scale-0 ${
                fast ? "animate-rippleFast" : "animate-ripple"
              } rounded-full bg-slate-200 opacity-75`}
              key={"span" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </div>
  );
};

export default Ripple;
