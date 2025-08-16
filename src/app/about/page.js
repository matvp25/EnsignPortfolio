export default function About() {
  return (
    <div className="container mx-auto mt-8 px-4 max-w-7xl mb-12 text-gray-900 dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left column - Text content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            <p>I&apos;m a software engineer</p>

          </h1>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            My journey into software engineering hasn’t been traditional, but that’s what makes it meaningful.
            I grew up working in my family’s business, where I learned early on how to communicate with people, solve problems, and take ownership of my work.
            Later, I spent two years in Ecuador on a volunteer mission, where I led teams, trained others, and learned the value of patience and adaptability.
             These experiences shaped my love for working with people and finding practical solutions—something that naturally led me into tech.
          </p>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            When I moved to the U.S., I had to start fresh—new language, new culture, new goals.
            I studied business first, then found my way into software engineering and finance, where I could combine strategy with creativity.
            Through school and work, I’ve built skills in data analysis, system troubleshooting, and project management.
            At my current job, I support thousands of users across North and South America, helping them navigate financial systems, resolve technical issues, and adopt new technologies.
            It’s fast-paced and complex, but I love the challenge.
          </p>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            What I’ve come to realize is that technology is never just about the code—it’s about people.
            Whether I’m debugging a process or leading a training session, I approach every task with empathy and a drive to make things easier and more efficient for others.
             I’m especially drawn to projects where I can blend analytical thinking with collaboration and real-world impact.
          </p>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            As I continue growing in the software engineering field, I bring with me not just technical knowledge, but a genuine passion for learning and connecting.
             I’m someone who asks questions, listens carefully, and cares about the details that make a difference.
              And above all, I’m excited about the future—both the problems I’ll get to solve and the people I’ll get to solve them with.
          </p>
        </div>

        {/* Right column - Profile image and social links */}
        <div className="flex flex-col items-center lg:items-start space-y-6">
          <img
             src="/Mateo.JPG"
             alt="Mateo's Profile"
             className="w-full max-w-sm rounded-lg shadow-lg"
          />

          {/* Social links */}
          <div className="space-y-3 w-full max-w-sm">
            <a
              href="https://x.com/"
              className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <span>Follow me on X</span>
            </a>

            <a
              href="https://github.com/matvp25"
              className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Follow me on GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mateov%C3%A9lezpedraza/"
              className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>Follow me on LinkedIn</span>
            </a>

            <a
              href="mailto:mateo@email.com"
              className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
              </svg>
              <span>mateo@email.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
