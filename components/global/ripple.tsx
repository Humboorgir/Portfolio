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

const Ripple = ({ duration = 850, color = "#fff" }) => {
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
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-0"
      onMouseDown={addRipple}
    >
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              className="absolute scale-0 animate-ripple rounded-full bg-slate-200 opacity-75"
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
