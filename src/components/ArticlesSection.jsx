"use client";

import { useState } from "react";

export default function ArticlesSection() {
  const [openArticle, setOpenArticle] = useState(null);

  const articles = [
    {
      id: 1,
      date: "Jan 25, 2024",
      title: "Creating a BlackJack Game in Java 🎮 ",
      description:
        "As part of my Java learning journey, I built a fully functional BlackJack game with a simple GUI. The goal was to apply OOP principles and explore game logic and user interaction.",
      fullContent: (
        <>
          <p>
            One of my favorite projects to build was a fully functional Blackjack game using Java&apos;s graphical user interface (GUI) tools.
            This project was both a fun challenge and a great way to deepen my understanding of event-driven programming and GUI design.
            Blackjack, also known as 21, is a popular card game where players try to get a hand value as close to 21 as possible without going over.
            My implementation offers a user-friendly interface where players can:

            <ul className="list-disc ml-6">
              <li>Deal cards,</li>
              <li>Hit (draw additional cards),</li>
              <li>Stand (keep their current hand),</li>
              <li>See the dealer&apos;s actions,</li>
              <li>And get real-time feedback on wins, losses, or ties.</li>
            </ul>
          </p>
          <p>
            To personalize the game, I modified the interface colors, fonts, and text using Java&apos;s Color and Font classes. It was my first time customizing a GUI, and I learned how small changes can greatly enhance usability.
          </p>
          <p>
            More than just a card game, this project gave me hands-on experience with:
            <ul className="list-disc ml-6">
              <li>Class inheritance and encapsulation</li>
              <li>Java Swing-style interface control</li>
              <li>Game flow logic (turns, scoring, outcomes)</li>
            </ul>
          </p>
          <p>
            Overall, this project was a fun and practical way to combine Java fundamentals with interactive design, and it helped solidify my understanding of how code and user experience come together in application development.
          </p>
        </>
      ),
    },
    {
      id: 2,
      date: "Feb 10, 2024",
      title: "Building a Secure Password Validator in Java",
      description:
        "I developed a Password Validator app in Java that helps users create strong passwords by enforcing essential security rules in a console-based interface.",
      fullContent: (
        <>
          <p>
            Key features include:
            <ul className="list-disc ml-6">
              <li>Password length validation: at least 8 characters.</li>
              <li>Uppercase character requirement: at least one uppercase letter.</li>
              <li>Special characters inclusion: !@#$%^&* etc.</li>
              <li>Username exclusion: password cannot contain username.</li>
              <li>Difference from old password: new password must differ.</li>
            </ul>
          </p>
          <p>
            Users are prompted repeatedly until all criteria are met, with detailed feedback.
          </p>
          <p>
            From a development perspective, this was a great exercise in input validation, loops, conditional logic, and user feedback.
          </p>
          <p>
            This project demonstrates my ability to build practical tools focused on security and usability.
          </p>
        </>
      ),
    },
    {
      id: 3,
      date: "Mar 5, 2024",
      title: "Bringing the Classic Blackjack Game to Life with Java GUI",
      description:
        "I built a fully functional Blackjack game using Java Swing, deepening my skills in event-driven programming and GUI design.",
      fullContent: (
        <>
          <p>
            Blackjack, or 21, involves players trying to get a hand value close to 21 without going over. My app lets players:
            <ul className="list-disc ml-6">
              <li>Deal cards,</li>
              <li>Hit (draw cards),</li>
              <li>Stand,</li>
              <li>See dealer&apos;s actions,</li>
              <li>Get real-time win/loss feedback.</li>
            </ul>
          </p>
          <p>
            Key features & skills:
            <ul className="list-disc ml-6">
              <li>Java Swing/AWT GUI design with buttons and panels</li>
              <li>Game logic handling card values and dealer AI</li>
              <li>Event handling and real-time UI updates</li>
              <li>OOP design for cards, decks, and players</li>
              <li>Randomized deck shuffling</li>
            </ul>
          </p>
          <p>
            This project enhanced my skills in managing app state, handling user events, and creating interactive user experiences.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="lg:col-span-2 space-y-8">
        {articles.map(({ id, date, title, description }) => (
          <article
            key={id}
            className="pb-8 border-b border-gray-200 dark:border-gray-700"
          >
            <time className="text-sm text-gray-500 dark:text-gray-400">{date}</time>
            <h2 className="text-xl font-semibold mt-2 mb-3 text-gray-900 dark:text-white">{title}</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
            <button
              onClick={() => setOpenArticle(id)}
              className="text-teal-500 hover:text-teal-600 font-medium"
            >
              Read article →
            </button>
          </article>
        ))}
      </div>

      {/* Modal */}
      {openArticle && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setOpenArticle(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 p-6 rounded max-w-3xl max-h-[80vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()} // prevent modal close on content click
          >
            <button
              onClick={() => setOpenArticle(null)}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-bold text-xl"
              aria-label="Close modal"
            >
              &times;
            </button>

            {articles.find((a) => a.id === openArticle)?.fullContent}
          </div>
        </div>
      )}
    </>
  );
}
