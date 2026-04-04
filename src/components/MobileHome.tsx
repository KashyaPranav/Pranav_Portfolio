import Image from 'next/image';
import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosAt } from 'react-icons/io';
import { Experience as ExperienceCard } from './experience';
import { ProjectsTile } from './projects';
import { Badge } from './ui/badge';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

interface ExperienceProps {
  tech: string[];
  organization: string;
  role: string;
  duration: string;
  url: string;
  location: string;
  description: string[];
}

interface ProjectsTileProps {
  title: string;
  subtitle: string;
  img1?: string;
  img2?: string;
  githubUrl?: string;
  url?: string;
  stack: string[];
  logo?: string;
  isCertified?: boolean;
}

export default function MobileHome() {
  const [experience, setExperience] = useState<ExperienceProps[]>([]);
  const [projects, setProjects] = useState<ProjectsTileProps[]>([]);
  const [achievements, setAchievements] = useState<ProjectsTileProps[]>([]);
  const [certifications, setCertifications] = useState<ProjectsTileProps[]>([]);
  const skills = {
    languages: ['C++', 'Python', 'JavaScript', 'C', 'SQL'],
    frameworks: ['Node.js', 'Express.js', 'REST APIs', 'React.js', 'PyTorch', 'OpenCV', 'FastAPI'],
    devops: ['AWS', 'Oracle Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
    ai: ['AI/ML', 'Multi-Agent Orchestration', 'Speech Recognition', 'Computer Vision', 'LLM Agents', 'Prompt Engineering', 'RAG', 'NLP'],
    core: ['Data Structures & Algorithms', 'OOP', 'System Design', 'Microservices', 'Agile Methodologies'],
  };

  useEffect(() => {
    fetch('/experience.json').then(res => res.json()).then(setExperience);
    fetch('/projects.json').then(res => res.json()).then(setProjects);
    fetch('/achievements.json').then(res => res.json()).then(setAchievements);
    fetch('/certifications.json').then(res => res.json()).then(setCertifications);
  }, []);

  const swipeHintStyle = (delay: number) =>
    ({ '--swipe-hint-delay': `${delay}ms` } as CSSProperties);

  return (
    <div className="block md:hidden w-full min-h-screen bg-black text-white px-2 pb-8 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center pt-6 pb-4">
        <Image src="/assets/avatar1.png" alt="avatar1" width={96} height={96} className="w-24 h-24 rounded-full object-cover mb-2" />
        <div className="text-xl font-bold text-zinc-200">Pranav Kumar Kashyap</div>
        <div className="text-sm text-zinc-400 mb-2 italic">Software Engineer</div>
        <a
          href="https://drive.google.com/file/d/1Kmk_M_1B_FgnIaYgS6XCSAIR1OL-s5wy/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900 text-white px-6 py-2 rounded-md text-xs font-semibold hover:bg-zinc-700 transition"
        >
          Resume
        </a>
      </div>

      <div className="mb-4 rounded-lg">
        <div className="text-lg font-bold text-zinc-300 mb-1">about</div>
        <ul className="text-zinc-400 text-xs mb-4 space-y-1 list-disc pl-5">
          <li>8th-semester CSE student at SRM IST, Chennai with a 9.2/10 CGPA</li>
          <li>Former SDE Intern at Reliance Jio Platforms Limited, RCP</li>
          <li>Former Project Trainee at Unisys, Bangalore</li>
          <li>Winner of 4 national-level hackathons</li>
        </ul>
        <div className="flex flex-col gap-1 mt-2">
          <a href="mailto:pranavkumarkashyap@gmail.com" className="flex items-center gap-2 text-blue-400 text-xs"><IoIosAt /> pranavkumarkashyap@gmail.com</a>
          <a href="https://github.com/KashyaPranav" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 text-xs"><FaGithub /> github.com/KashyaPranav</a>
          <a href="https://linkedin.com/in/pranavkkashyap" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 text-xs"><FaLinkedin /> linkedin.com/in/pranavkkashyap</a>
        </div>
      </div>

      <div className="mb-4 w-full rounded-lg">
        <div className="text-lg font-bold text-zinc-300 mb-2">skills</div>
        <div className="space-y-2 text-xs text-zinc-400">
          <div className="flex flex-nowrap items-start gap-2">
            <span className="w-36 shrink-0 whitespace-nowrap text-left font-semibold text-zinc-300">Languages:</span>
            <div className="flex flex-1 flex-wrap gap-1">
            {skills.languages.map(skill => (
              <Badge key={skill} className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800">
                {skill}
              </Badge>
            ))}
            </div>
          </div>
          <div className="flex flex-nowrap items-start gap-2">
            <span className="w-36 shrink-0 whitespace-nowrap text-left font-semibold text-zinc-300">Frameworks:</span>
            <div className="flex flex-1 flex-wrap gap-1">
            {skills.frameworks.map(skill => (
              <Badge key={skill} className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800">
                {skill}
              </Badge>
            ))}
            </div>
          </div>
          <div className="flex flex-nowrap items-start gap-2">
            <span className="w-36 shrink-0 whitespace-nowrap text-left font-semibold text-zinc-300">DevOps:</span>
            <div className="flex flex-1 flex-wrap gap-1">
            {skills.devops.map(skill => (
              <Badge key={skill} className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800">
                {skill}
              </Badge>
            ))}
            </div>
          </div>
          <div className="flex flex-nowrap items-start gap-2">
            <span className="w-36 shrink-0 whitespace-nowrap text-left font-semibold text-zinc-300">AI Systems:</span>
            <div className="flex flex-1 flex-wrap gap-1">
            {skills.ai.map(skill => (
              <Badge key={skill} className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800">
                {skill}
              </Badge>
            ))}
            </div>
          </div>
          <div className="flex flex-nowrap items-start gap-2">
            <span className="w-36 shrink-0 whitespace-nowrap text-left font-semibold text-zinc-300">Core:</span>
            <div className="flex flex-1 flex-wrap gap-1">
            {skills.core.map(skill => (
              <Badge key={skill} className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800">
                {skill}
              </Badge>
            ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 mb-2 flex flex-col items-center w-full">
        <div className="text-lg font-semibold text-zinc-200 ">Experience</div>
        <div className="text-xs text-zinc-400 mb-1">swipe left</div>
        <div className="w-full">
          <div className="animate-swipe-hint-left" style={swipeHintStyle(350)}>
            <Carousel className="w-full">
              <CarouselContent>
              {experience.map((exp, idx) => (
                <CarouselItem key={idx} className="px-2">
                  <div className="rounded-lg px-6 justify-end">
                    <ExperienceCard {...exp} />
                  </div>
                </CarouselItem>
              ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="text-lg font-semibold text-zinc-200">Projects</div>
        <div className="text-xs text-zinc-400 mb-1">swipe left</div>
        <div className="w-full">
          <div className="animate-swipe-hint-left" style={swipeHintStyle(650)}>
            <Carousel className="w-full">
              <CarouselContent>
              {projects.map((proj, idx) => (
                <CarouselItem key={idx} className="p-2">
                  <div className="rounded-lg px-6">
                    <ProjectsTile {...proj} />
                  </div>
                </CarouselItem>
              ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="text-lg font-semibold text-zinc-200">Achievements</div>
        <div className="text-xs text-zinc-400 mb-1">swipe left</div>
        <div className="w-full">
          <div className="animate-swipe-hint-left" style={swipeHintStyle(950)}>
            <Carousel className="w-full">
              <CarouselContent>
              {achievements.map((ach, idx) => (
                <CarouselItem key={idx} className="p-2">
                  <div className="rounded-lg px-6">
                    <ProjectsTile {...ach} />
                  </div>
                </CarouselItem>
              ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full mt-2">
        <div className="text-lg font-semibold text-zinc-200">Certifications</div>
        <div className="text-xs text-zinc-400 mb-1">swipe left</div>
        <div className="w-full">
          <div className="animate-swipe-hint-left" style={swipeHintStyle(1250)}>
            <Carousel className="w-full">
              <CarouselContent>
              {certifications.map((cert, idx) => (
                <CarouselItem key={idx} className="p-2">
                  <div className="rounded-lg px-6">
                    <ProjectsTile {...cert} />
                  </div>
                </CarouselItem>
              ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      <hr className="w-full mx-4 mb-4 mt-6 border-1 border-zinc-800" />
      <div className="flex flex-row items-center gap-2 mb-2">
        <div className="flex gap-2 text-xl">
          <a href="https://github.com/KashyaPranav" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/pranavkkashyap" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            <FaLinkedin />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1Kmk_M_1B_FgnIaYgS6XCSAIR1OL-s5wy/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white px-4 py-2 rounded-md text-xs font-semibold transition border border-zinc-700"
        >
          Resume
        </a>
      </div>
    </div>
  );
} 
