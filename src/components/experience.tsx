import { Badge } from './ui/badge';

interface ExperienceProps {
  tech: string[];
  organization: string;
  role: string;
  duration: string;
  url: string;
  location: string;
  description: string[];
}

const highlightKeywords = [
  'Jio Associate Verification System',
  'Node.js',
  'Express.js',
  'MongoDB',
  'OTP-based authentication',
  'JWT authorization',
  'AES-256 encryption',
  'GDPR',
  'Flutter',
  'modular architecture',
  '25%',
  'CI/CD',
  'OCR-driven document verification pipeline',
  'PyTorch-based document classification',
  'CNN and LayoutLM',
  'Multi-modal Biometric Security System',
  '98% blink detection',
  '97% speaker verification',
  'Agentic AI-powered interview evaluation',
  'Scalable distributed architectures',
  'System Design and Microservices',
  'Oracle Cloud Infrastructure Foundations Associate',
  'Computer vision and rule-based validation',
  'Logo detection and template matching',
  'Real-time automated speech-to-text processing',
  'Performance Optimization',
  'Docker and Kubernetes',
  '1st Prize Hackverse Hackathon 9.0',
  'SRM Hackathon 9.0 Winner',
  'Innovation Award for impactful innovation',
  'Production-grade application deployment',
  'Full-stack and machine learning systems at scale'
];

export const Experience = ({
  tech,
  organization,
  role,
  url,
  duration,
  location,
  description,
}: ExperienceProps) => {
  const highlightText = (text: string) => {
    let modifiedText = text;
    highlightKeywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      modifiedText = modifiedText.replace(
        regex,
        '<span class="font-bold text-white">$1</span>'
      );
    });
    return modifiedText;
  };
  const highlightDate = (text: string) => {
    let modifiedText = text;
    highlightKeywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      modifiedText = modifiedText.replace(
        regex,
        '<span class=" text-sky-300 font-bold">$1</span>'
      );
    });
    return modifiedText;
  };

  return (
    <div className='flex flex-col justify-center items-start font-mono transition-all ease-in-out duration-300 bg-[#30303030] md:bg-[#30303040] rounded-xl md:rounded-lg shadow-lg p-3 md:px-5 pt-4 w-full border-2 border-zinc-900'>
      <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-center'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2 flex-wrap w-full md:w-auto'>
          <span className='text-md md:text-md font-bold text-sky-200 opacity-95'>{role}</span>
          <span className='text-xs md:text-sm cursor-pointer text-sky-500 transition-all ease-in-out block md:hidden' onClick={() => window.open(url)}>
            {organization}
          </span>
          <span className='text-zinc-500 hidden md:inline'>|</span>
          <div className='flex flex-wrap gap-1 hidden md:flex'>
            {tech.map((item, index) => (
              <Badge key={index} variant='default' className='bg-zinc-800 text-zinc-300 text-xs'>
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-x-2 text-xs md:text-sm text-slate-400'>
          <span className='hidden md:inline'>{location}</span>
          <span className='hidden md:inline'>|</span>
          <span dangerouslySetInnerHTML={{ __html: highlightDate(duration) }}></span>
        </div>
      </div>

      <div
        className='text-xs md:text-sm cursor-pointer text-sky-500 transition-all ease-in-out hidden md:block'
        onClick={() => window.open(url)}
      >
        {organization}
      </div>

      <div className='p-2 mt-2 md:mt-0 md:p-3 gap-y-2 text-zinc-400 w-full md:w-6/7'>
        {description.map((desc, index) => (
          <li
            key={index}
            className='text-xs md:text-sm p-1'
            dangerouslySetInnerHTML={{ __html: highlightText(desc) }}
          />
        ))}
      </div>
    </div>
  );
};
