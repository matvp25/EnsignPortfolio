'use client';
import { useState } from 'react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "BlackJack Game (Java GUI Project)",
      description: "A graphical version of Blackjack using Java Swing and OOP principles.",
      summary:
        "This project is a graphical version of the classic Blackjack card game, built using Java. It simulates a turn-based game between a player and a dealer with an interactive user interface. The program includes core components of the game: a deck of cards (BJDeck), player and dealer hands (BJHand), and a visually styled GUI interface using the PGame framework.",
      purpose:
        "The goal was to apply object-oriented programming principles to create a modular and functional game. I extended the starter code by integrating custom styling and UI configurations, ensuring the game was both playable and visually appealing. It was built in stages—starting with individual components like cards and decks—and then integrating them into a complete playable system.",
      skills: [
        "Java OOP: Implemented custom classes (BJCard, BJDeck, BJHand) with encapsulation and inheritance.",
        "GUI Design: Used Java Swing and PGame utilities to customize the interface.",
        "Testing: Integrated test files (CardTest, DeckTest, HandTest) to validate components.",
        "Modular Development: Built the game in phases and refined before integration.",
        "UI Personalization: Custom fonts, colors, and layout styling.",
      ],
      tools: ["Java", "Swing", "JUnit", "Object-Oriented Design"],
      logo: "BJ",
    },
    {
      name: "Dessert Shop (Java Console Application)",
      description: "A console-based dessert shop POS system with customer and order management.",
      summary:
        "Dessert Shop is a console-based point-of-sale (POS) application developed in Java. It allows users to build and manage dessert orders by selecting from a variety of items such as candy, cookies, ice cream, and sundaes. The system handles customer information, processes payments, tracks order history, and includes an admin module to view customer data and identify the most loyal customer.",
      purpose:
        "The goal was to practice OOP design in Java, create reusable and modular components, and build a functioning POS-style system with real-world features like input validation, customer tracking, and admin tools.",
      skills: [
        "Interactive Order System: Users can add multiple dessert items with real-time prompts.",
        "Customer Management: Tracks customer history and supports unique IDs.",
        "Admin Module: View customer list and top customers by order count.",
        "Payment Processing: Supports Cash, Card, and Phone with validation.",
        "Error Handling: Robust user input validation and exception safety.",
      ],
      tools: ["Java", "Console I/O", "Collections Framework (HashMap, ArrayList)", "Scanner Class", "Inheritance & Interfaces"],
      logo: "DS",
    },
    {
      name: "Real Estate Listings Console App",
      description: "Java console app to manage property listings and bids with an admin-style menu.",
      summary:
        "This is a Java-based console application that simulates a real estate listing and bidding system. It allows users to add property listings (houses and condos), view available properties, and place or review bids. An admin-style menu system lets users navigate between listing management and bid tracking with ease.",
      purpose:
        "This project helped me structure and build a multi-layered application from scratch. I learned how to organize logic cleanly using methods and apply real estate business rules through Java logic. It gave me confidence in handling complex user interactions and managing state across the app.",
      skills: [
        "Object-Oriented Programming (OOP): Modeled real-world entities using inheritance and encapsulation.",
        "Menu-Driven Interfaces: Created a clean, intuitive CLI menu experience.",
        "Data Structures: Used ArrayList and HashMap to manage listings and bids.",
        "Input Validation: Implemented error checking and logical branching.",
        "Code Reusability: Wrote modular methods for listings, bids, and test data.",
      ],
      tools: ["Java", "Console I/O", "ArrayList", "HashMap", "OOP"],
      logo: "RE",
    },
    {
  name: "Password Validator",
  description: "A Java console application for validating passwords with real-time user feedback.",
  summary:
    "This Java console application validates user passwords based on a set of security rules. It checks for common requirements like length, use of uppercase letters and special characters, and ensures that the new password is neither the same as the old one nor contains the username. The program keeps prompting the user until a valid password is entered.",
  purpose:
    "This project helped me understand how to apply validation logic and user feedback in real-world applications. I also improved my skills in string manipulation and writing clean, maintainable code.",
  skills: [
    "Input Handling: Collected and processed user input using Scanner.",
    "String Validation: Used regex and string methods to validate password rules.",
    "Looping & Control Flow: Ensured continued prompting until all criteria were met.",
    "Error Feedback: Gave specific error messages for each rule violation.",
    "Encapsulation: Used modular methods for rule printing and password changing.",
  ],
  tools: ["Java", "Console I/O", "Regex", "Scanner", "Modular Programming"],
  logo: "PV",
},

  ];

  return (
    <div className="min-h-screen py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Projects & Practical Applications
      </h1>
      <p className="max-w-3xl text-lg mb-12 text-gray-600 dark:text-gray-300">
        Here’s a collection of software projects I’ve developed to sharpen my programming skills, explore new technologies, and solve real-world problems.
        These projects range from Java-based console applications to full-stack web interfaces, reflecting my focus on clean architecture, problem-solving, and user-centered design.
        Each one was built with care to reinforce concepts like object-oriented programming, data structures, API integration, and user experience.
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="rounded-lg p-6 shadow-md bg-white dark:bg-gray-800 transition-colors duration-300"
          >
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-500 font-bold text-xl">
                {project.logo}
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{project.name}</h3>
            <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
            <button
              onClick={() => setSelectedProject(project)}
              className="text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300 transition"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-2xl w-full shadow-lg relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500 text-xl font-bold"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>

            {/* Modal Header */}
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-500 font-bold text-xl">
                {selectedProject.logo}
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              {selectedProject.name}
            </h2>

            {/* Summary */}
            <div className="mb-4">
              <h3 className="font-semibold text-lg mb-1 text-gray-800 dark:text-white">Project Summary:</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{selectedProject.summary}</p>
            </div>

            {/* Purpose & Outcome */}
            <div className="mb-4">
              <h3 className="font-semibold text-lg mb-1 text-gray-800 dark:text-white">Purpose & Outcome:</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{selectedProject.purpose}</p>
            </div>

            {/* Key Skills */}
            <div className="mb-4">
              <h3 className="font-semibold text-lg mb-1 text-gray-800 dark:text-white">Key Skills Demonstrated:</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                {selectedProject.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="font-semibold text-lg mb-1 text-gray-800 dark:text-white">Tools & Technologies:</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {selectedProject.tools.join(', ')}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
