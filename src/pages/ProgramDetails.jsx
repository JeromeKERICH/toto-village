import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProgramDetails() {
  const { programId } = useParams();

  // You can also fetch this dynamically from an API or context
  const programData = {
    "childcare": {
      title: "Partnerships for Affordable Childcare",
      content: "Full details about partnerships, goals, impact, counties involved, and how it works."
    },
    "on-site-childcare": {
      title: "On-site Childcare Centers",
      content: "Detailed explanation of how organizations benefit, case studies, testimonials, etc."
    },
    "workforce-development": {
      title: "Workforce Development",
      content: "Explanation of training programs, certifications, success stories, etc."
    },
    "community-engagement": {
      title: "Community Engagement",
      content: "How we work with communities, events, impact data, and partnerships."
    },
  };

  const program = programData[programId];

  if (!program) {
    return <div className="p-8 text-center text-red-600">Program not found</div>;
  }

  return (
    <section className="px-4 md:px-12 lg:px-24 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-4">{program.title}</h1>
        <p className="text-lg text-[#4a4a4a]">{program.content}</p>
      </div>
    </section>
  );
}
