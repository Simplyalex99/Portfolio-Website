'use client';

import { CldVideoPlayer, CldVideoPlayerProps } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
export const CldVideo = (props: CldVideoPlayerProps) => {
  return <CldVideoPlayer {...props} />;
};

export default CldVideo;
