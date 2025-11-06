export const studies = [
  {
    title: "B.S. in Computer Science (Software Engineering)",
    institution: "Universiti Tenaga Nasional (UNITEN)",
    description:
      "Core CS foundations: discrete structures, operating systems, networking, and databases.",
    tags: [
      "Operating Systems",
      "Databases",
      "Discrete Structures",
      "Data Communication and Computer Networks",
      "Software Engineering Principles",
    ],
  },
];

export type StudyItem = (typeof studies)[number];
