import tw from 'twin.macro';
import SpotifyIcon from '../Icons/Spotify';

export default function Spotify () {
  return (
    <div css={tw`flex items-center space-x-2`}>
      <SpotifyIcon css={tw`text-[#1ed760]`} width='20' height='20' />
      <span css={tw`font-medium`}>Not Playing</span>
    </div>
  )
}