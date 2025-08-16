export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

const usesData = [
  {
    category: "Workspace",
    tools: [
      { name: "Collaborative Group Work", description: "In team-based academic settings, I worked on interdisciplinary projects requiring coordination across documentation, coding, and presentation tasks. These experiences helped me develop strong communication habits, a proactive mindset, and the ability to adapt to varying work styles while keeping quality and deadlines in focus." },
      { name: "Process Reflection & Iteration", description: "Continuous improvement has been central to my work style. I regularly review outcomes, gather feedback, and revise systems and workflows for clarity and effectiveness. This reflective practice ensures each iteration becomes more efficient, accessible, and aligned with user needs—whether in technical documentation, feature development, or portfolio work." },
      { name: "Team Accountability", description: "In multiple projects, I’ve taken initiative to fill in gaps when others struggled with time or quality. Rather than viewing this as a setback, I approached it as an opportunity to reinforce standards, support the team, and ensure we stayed aligned with our goals. It strengthened my skills in time management, leadership, and collaborative problem-solving." },
    ],
  },
  {
    category: "Development tools",
    tools: [
      { name: "Agile & Scrum Methodology", description: "I apply Agile principles like adaptability, simplicity, and iterative feedback in my workflow. Whether managing evolving project requirements or shifting priorities mid-sprint, I focus on delivering value quickly while maintaining flexibility. Prioritizing clarity, collaboration, and feedback loops allows teams to respond effectively to change without losing momentum." },
      { name: "Jira for Task Management", description: "Jira has been a key tool in managing sprint workflows, prioritizing features, and increasing transparency across teams. I’ve used boards to track user stories, manage backlog grooming, and clearly communicate progress. This structure helps teams stay accountable while allowing room for dynamic decision-making when priorities shift." },
      { name: "Git & GitHub", description: "I’m experienced in using Git for version control and GitHub for collaborative development. I follow structured commit practices, manage branches responsibly, and support clean pull request workflows. These habits contribute to code reliability, easier reviews, and reduced conflicts during merges." },
    ],
  },
  {
    category: "Design",
    tools: [
      { name: "Whimsical", description: "Used as a lightweight tool for early-stage planning, wireframing, and flowcharting. Helpful for mapping out ideas quickly during brainstorms or planning collaborative workflows." },
      { name: "Figma", description: " Figma is my go-to tool for visual planning, UI design, and prototyping. I use it to create wireframes, collaborate on layouts, and communicate design intent clearly before development begins—resulting in better alignment between design and functionality."},
    ],
  },

  {
    category: "Productivity",
    tools: [
      { name: "User-Centered Thinking", description: "Feedback is essential to my process. I prioritize user experience by testing designs and features with peers, iterating based on their responses, and refining systems for clarity and effectiveness. Whether working on backend logic or front-end design, I aim for simplicity, usability, and clarity." },
      { name: "Adaptability Under Change", description: "In fast-paced environments, plans can shift quickly. I&apos;ve learned to stay flexible—reprioritizing features, adjusting timelines, or adapting deliverables without compromising quality. This adaptability ensures teams stay focused on what matters most: delivering usable, valuable outcomes on time." },
      { name: "Clear Communication & Documentation", description: "Maintaining strong documentation and clear communication across teams is key to my workflow. Whether it&apos;s updating tickets in Jira, writing technical notes in GitHub, or clarifying scope in meetings, I prioritize transparency and shared understanding to keep projects on track." },
    ],
  },
];

export default function Uses() {
  return (
    <div className="flex flex-col p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        Software I use, gadgets I love,
        <br /> and other things I recommend.
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
        In both academic and team-based settings, I&apos;ve learned that building great software isn&apos;t just about writing code—it&apos;s about working well with others, staying organized, and focusing on the end user.
        This section highlights the tools and practices that help me do that, from using Agile and GitHub for collaboration to designing clear, user-friendly interfaces.
        These habits keep me adaptable, efficient, and focused on creating work that&apos;s both functional and easy to use.
      </p>

      <div className="flex flex-col gap-16">
        {usesData.map((section) => (
          <div
            key={section.category}
            className="flex flex-row justify-start gap-8 pl-4 border-l-2 border-gray-300 dark:border-gray-600"
          >
            <h2 className="m-0 text-lg font-bold min-w-32">{section.category}</h2>
            <div className="flex flex-col gap-8">
              {section.tools.map((tool, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{tool.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
