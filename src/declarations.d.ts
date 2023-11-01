declare namespace JSX {
  interface IntrinsicElements {
    "lottie-player": LottiePlayerProps;
  }
}

type LottiePlayerProps = {
  id?: string;
  autoplay?: boolean;
  ref?: React.RefObject;
  loop?: boolean;
  mode?: string;
  src?: string;
  style?: React.CSSProperties;
};
