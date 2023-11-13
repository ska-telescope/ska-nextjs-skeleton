import * as React from 'react';

export interface Benefit_Item {
  title: string;
  description: string;
}

export interface Benefit {
  header: string;
  contents: Benefit_Item[];
}

export const benefits: Benefit[] = [
  {
    header: 'Next.js and TypeScript Synergy',
    contents: [
      {
        title: 'Server-Side Rendering (SSR)',
        description:
          'Harness the power of Next.js to achieve server-side rendering and initial page load performance',
      },
      {
        title: 'Static Site Generation (SSG)',
        description:
          'Combine SSG capabilities with TypeScript&quote;s static typing for safer, more predictable development and require lower cost hosting package',
      },
    ],
  },
  {
    header: 'Comprehensive Testing Suite',
    contents: [
      {
        title: 'Static Typing',
        description:
          "Benefit from TypeScript's static typing to catch errors at compile-time, enhancing code quality and maintainability and subsequently faster delivery",
      },
      {
        title: 'IntelliSense',
        description:
          "Leverage TypeScript's IntelliSense capabilities in modern code editors, reducing development time with auto-completion and type checking",
      },
    ],
  },
  {
    header: 'Optimized for Performance',
    contents: [
      {
        title: 'Production-Ready Configuration',
        description:
          'Pre-configured settings for production deployments, including code minification, compression, and caching strategies',
      },
      {
        title: 'Image Optimization',
        description:
          'Automatic image optimization ensures optimal performance by serving images in modern formats and sizes',
      },
    ],
  },
  {
    header: 'Developer-Friendly Tooling',
    contents: [
      {
        title: 'ESLint and Prettier Integration',
        description:
          'Maintain code consistency and cleanliness with ESLint and Prettier configurations pre-setup for clean and error-free code',
      },
      {
        title: 'Git Version Control',
        description:
          'Start your project with a Git repository and commit history, enabling collaborative development and version control',
      },
      {
        title: 'Customizable',
        description:
          'Tailor the template to your specific project requirements by easily adapting, adding or removing packages, libraries, and configurations',
      },
    ],
  },
  {
    header: 'Testing Automation',
    contents: [
      {
        title: 'Continuous Integration',
        description:
          'Integrate your project with GitHub CI/CD Actions to automate your testing and deployment processes.',
      },
    ],
  },
  {
    header: 'Documentation and Best Practices',
    contents: [
      {
        title: 'Documentation',
        description:
          'A comprehensive README file and inline code comments provide guidance on best practices for testing, TypeScript usage, and project structure',
      },
      {
        title: 'Best Practices',
        description:
          'Follow industry best practices for structuring your codebase, ensuring scalability and maintainability as your project grows',
      },
    ],
  },
];

function intro() {
  return (
    <div id="introduction">
      <h1>OSO Next.js skeleton project</h1>
      <h2>Overview</h2>
      <p>
        This skeleton project with TypeScript and Testing Template Project is a
        comprehensive and feature-rich starting point for our OSO developers
        team seeking to create robust, maintainable, and thoroughly tested web
        applications. Leveraging the power of Next.js and TypeScript, this
        template offers a solid foundation for building modern web experiences
        while ensuring code quality through unit tests, component tests, and
        integration tests. Whether you&apos;re a seasoned developer or just
        starting your journey, this template streamlines your development
        process and empowers out team to build web applications with confidence.
      </p>
      <h2>Key Benefits</h2>
      <ol>
        {benefits.map((benefit, index) => (
          <li key={index}>
            <h3>
              <b>{benefit.header}</b>
            </h3>
            <ul>
              {benefit.contents?.map((content, index2) => (
                <li key={index2}>
                  <b>{content.title}:</b>&nbsp;{content.description}.
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default intro;
