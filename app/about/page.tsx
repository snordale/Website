import { theme } from '@/lib/styles/theme';
import { ContentLayout } from '@/components/ui/content-layout';
import data from '@/lib/data.json';

export default function AboutPage() {
  const { intro, sections } = data.about;

  return (
    <ContentLayout>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 700,
        marginBottom: theme.space[8],
        color: theme.colors.foreground,
      }}>
        {intro.title}
      </h1>

      <div style={{
        color: theme.colors.foreground,
      }}>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: 1.6,
          marginBottom: theme.space[8],
          color: theme.colors.muted,
        }}>
          {intro.description}
        </p>

        {sections.map((section, index) => (
          <div key={section.title}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginTop: theme.space[8],
              marginBottom: theme.space[4],
              color: theme.colors.foreground,
            }}>
              {section.title}
            </h2>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.6,
              marginBottom: section.list ? theme.space[4] : theme.space[4],
              color: theme.colors.muted,
            }}>
              {section.content}
            </p>
            {section.list && (
              <ul style={{
                listStyle: 'disc',
                paddingLeft: theme.space[6],
                marginBottom: theme.space[4],
                color: theme.colors.muted,
              }}>
                {section.list.map((item) => (
                  <li 
                    key={item}
                    style={{ marginBottom: theme.space[2] }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </ContentLayout>
  );
}

