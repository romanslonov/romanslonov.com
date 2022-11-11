import tw from 'twin.macro';

import SpotifyIcon from '../Icons/Spotify';

export default function Spotify() {
  return (
    <div css={tw`flex items-center space-x-2`}>
      <span css={tw`text-[#1ed760]`}>
        <SpotifyIcon width={20} height={20} />
      </span>
      <span css={tw`font-medium`}>Not Playing</span>
      <span css={tw`text-gray-500 dark:text-gray-400`}>&#8212; Spotify</span>
    </div>
  );
}
