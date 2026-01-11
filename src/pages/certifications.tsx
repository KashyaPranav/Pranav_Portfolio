'use client';

import { useStaggeredAnimation } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { ProjectsTile } from '../components/projects';

interface CertificationProps {
  title: string;
  subtitle: string;
  url: string;
  stack: string[];
  isCertified?: boolean;
}

const fetchCertifications = async (): Promise<CertificationProps[]> => {
  const response = await fetch('/certifications.json');
  if (!response.ok) {
    throw new Error('Failed to fetch certifications data');
  }
  return response.json();
};

export default function Certifications() {
  const [certifications, setCertifications] = useState<CertificationProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const certificationsAnimations = useStaggeredAnimation(certifications, 100);

  const handleEnter = useCallback(() => {
    router.push('/projects');
  }, [router]);

  const handleBackSpace = useCallback(() => {
    router.push('/achievements');
  }, [router]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Backspace') {
        handleBackSpace();
      }
      if (e.key === 'Enter') {
        handleEnter();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleEnter, handleBackSpace]);

  useEffect(() => {
    const loadCertifications = async () => {
      try {
        const data = await fetchCertifications();
        setCertifications(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    loadCertifications();
  }, []);

  if (loading) {
    return (
      <div className="flex gap-5 flex-col animate-fadeInUp pb-10">
        <h1 className="text-4xl font-bold leading-tight mb-3">
          <span className="text-zinc-300 px-5">certifications</span>
        </h1>
        <div className="flex justify-center items-center h-64">
          <div className="text-zinc-500">Loading certifications...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex gap-5 flex-col animate-fadeInUp pb-10">
        <h1 className="text-4xl font-bold leading-tight mb-3">
          <span className="text-zinc-300 px-5">certifications</span>
        </h1>
        <div className="flex justify-center items-center h-64">
          <p className="text-red-500 font-mono">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-5 flex-col animate-fadeInUp pb-10">
      <h1 className="text-4xl font-bold leading-tight mb-3">
        <span className="text-zinc-300 px-5">certifications</span>
      </h1>
      <div className="flex justify-center px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((item, index) => (
            <div
              key={index}
              style={certificationsAnimations[index].style}
              className={`${certificationsAnimations[index].className} w-full h-full`}
            >
              <ProjectsTile {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
