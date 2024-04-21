import DribbbleIcon from '@/components/icons/dribbble';
import GithubIcon from '@/components/icons/github';
import XIcon from '@/components/icons/x';
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon';

export function SocialLinks() {
  return (
    <ul className="flex items-center space-x-4">
      <li>
        <a
          title="Github"
          className="transition-colors duration-300 hover:text-neutral-400 inline-flex items-center gap-2"
          href="https://read.cv/romanslonov"
          target="_blank"
          rel="noreferrer"
        >
          <DocumentTextIcon width={18} height={18} />
          <span className="font-medium text-sm">Read.cv</span>
        </a>
      </li>
      <li>
        <a
          title="Github"
          className="transition-colors duration-300 hover:text-neutral-400 inline-flex items-center gap-2"
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
          className="transition-colors duration-300 hover:text-[#ea4c89] inline-flex items-center gap-2"
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
          className="transition-colors duration-300 hover:text-neutral-400 inline-flex items-center gap-2"
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
