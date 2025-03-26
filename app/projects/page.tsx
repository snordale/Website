import { theme } from '@/lib/styles/theme';
import { ContentLayout } from '@/components/ui/content-layout';
import { ProjectCard } from '@/components/ui/project-card';
import data from '@/lib/data.json';

export default function ProjectsPage() {
  // Get projects data from data.json
  const { projects } = data;

  return (
    <ContentLayout maxWidth="800px">
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 700,
        marginBottom: theme.space[8],
        color: theme.colors.foreground,
      }}>
        Projects
      </h1>

      <p style={{
        fontSize: '1.1rem',
        lineHeight: 1.6,
        marginBottom: theme.space[12],
        color: theme.colors.muted,
      }}>
        A selection of projects I've worked on, ranging from personal websites to full-scale applications.
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: theme.space[6],
      }}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </ContentLayout>
  );
}

