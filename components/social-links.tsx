import DribbbleIcon from '@/components/icons/dribbble';
import GithubIcon from '@/components/icons/github';
import XIcon from '@/components/icons/x';
import { ReadCVIcon } from './icons/readcv';

export function SocialLinks() {
  return (
    <ul className="flex items-center flex-wrap gap-2">
      <li>
        <a
          title="Github"
          className="transition-colors inline-flex text-sm hover:bg-neutral-100 py-1.5 px-2 rounded-lg dark:hover:bg-neutral-800 font-medium items-center gap-2"
          href="https://read.cv/romanslonov"
          target="_blank"
          rel="noreferrer"
        >
          <ReadCVIcon width={20} height={20} />
          <span className="font-medium text-sm">Read.cv</span>
        </a>
      </li>
      <li>
        <a
          title="Github"
          className="transition-colors inline-flex text-sm hover:bg-neutral-100 py-1.5 px-2 rounded-lg dark:hover:bg-neutral-800 font-medium items-center gap-2"
          href="https://github.com/romanslonov"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon width={18} height={18} />
          <span className="font-medium text-sm">Github</span>
        </a>
      </li>
      <li>
        <a
          title="Dribbble"
          className="transition-colors inline-flex text-sm hover:bg-neutral-100 py-1.5 px-2 rounded-lg dark:hover:bg-neutral-800 font-medium items-center gap-2"
          href="https://dribbble.com/romanslonov"
          target="_blank"
          rel="noreferrer"
        >
          <DribbbleIcon width={18} height={18} />
          <span className="font-medium text-sm">Dribbble</span>
        </a>
      </li>
      <li>
        <a
          title="X"
          className="transition-colors inline-flex text-sm hover:bg-neutral-100 py-1.5 px-2 rounded-lg dark:hover:bg-neutral-800 font-medium items-center gap-2"
          href="https://x.com/romanslonov"
          target="_blank"
          rel="noreferrer"
        >
          <XIcon width={18} height={18} />
          <span className="font-medium text-sm">Twitter</span>
        </a>
      </li>
    </ul>
  );
}
