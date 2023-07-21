import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export type CounterProps = { from: string | number; to: string | number };

export const Counter = ({ from, to }: CounterProps) => {
  const _from = parseInt(`${from}`.replace(/\D/g, ""));
  const _to = parseInt(`${to}`.replace(/\D/g, ""));
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(_from, _to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [_from, _to, inView]);

  return <span ref={nodeRef} />;
};
