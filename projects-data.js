/*
  Single data source for all 3D/CGI projects.
  To add or edit a project, just update this array — the homepage cards
  and each project page both read from here automatically.

  images: list the actual filenames you'll place in an /images/ folder
  next to these pages (e.g. images/cgi-01-1.jpg). Until real files are
  added, the gallery shows a clean placeholder instead of a broken image.
*/
const PROJECTS_3D = [
  {
    id: "cgi-01",
    title: "Nintendo Game Boy - 1989  ",
    category: "CGI",
    software: ["Autodesk Maya", "Substance Painter"],
    description: "A faithful recreation of the 1989 Nintendo Game Boy, modeled in Maya and textured in Substance Painter — Modeled in Maya and textured in Substance Painter, focusing on realistic material aging with scratches, dents, fingerprints, worn plastic, and a weathered monochrome LCD to capture the look of a well-used vintage handheld.",
    images: [
      "Images/GB1 (1).jpg",
      "Images/GB1 (2).jpg",
      "Images/GB1 (3).jpg",
      "Images/GB1 (4).jpg"
    ]
  },
  {
    id: "cgi-02",
    title: "The Bloody Sword ",
    category: "Game Ready Asset",
    software: ["Autodesk Maya","Substance Painter","ZBrush"],
    description: "A semi-stylized fantasy sword created as a personal project to demonstrate weapon modeling, sculpting, and PBR texturing workflows with a realistic visual style. — what it was for, your role, and the approach you took.",
    images: [
      "Images/SD (1).png",
      "Images/SD (2).png",
      "Images/SD (3).png",
      "Images/SD (4).png",
      "Images/SD (5).png"
    ]
  },
  {
    id: "cgi-03",
    title: "Abu Dhabi Civil Defence",
    category: "Vehicle Model",
    software: ["Autodesk Maya","Substance Painter"],
    description: " Commercial automotive visualization created for an official government project in Abu Dhabi. This project showcases my work in 3D modeling, PBR texturing, lighting, rendering, and final presentation while preserving the original vehicle design and official branding.  Disclaimer: This work is displayed solely for portfolio purposes to demonstrate my technical skills. All trademarks, logos, decals, and official Abu Dhabi Police branding are the property of their respective owners.",
    images: [
      "Images/Civildefenceposter.jpg",
      "Images/Ariel.png",
      "Images/Atigo.png",
      "Images/Silverado.png",
      "Images/Man truck.png",
      "Images/Scania.png",

    ]
  },
  {
    id: "cgi-04",
    title: "Abu Dhabi Police Patrol",
    category: "Vehicle Model",
    software: ["Autodesk Maya","Substance Painter"],
    description: "Abu Dhabi Police Vehicle Visualization 3D modeling, texturing, lighting, rendering, and presentation completed as part of a government project in Abu Dhabi. Shared for portfolio purposes only. All official branding, graphics, and intellectual property remain the property of the respective government authority.",
    images: [
      "Images/Policeposter.jpg",
      "Images/Abu Dhabi police.png",
      "Images/Policepatrol.png"
    ]
  },
  {
    id: "cgi-05",
    title: "Nissan Escape Room",
    category: "Exhibition Design",
    software: ["Autodesk Maya", "Vray"],
    description: "Nissan × UAE Ministry of Economy – Escape Room Exhibition Stand Designed and visualized an interactive exhibition experience featuring immersive product displays, branded engagement zones, and premium architectural visualization for a government event.",
    images: [
      "Images/Escaperoom1.png",
      "Images/Escaperoom2.png",
      "Images/Escaperoomside.png",
      "Images/Escaproomtop.png",
      "Images/Escaproom4.png"

    ]
  },
  {
    id: "cgi-06",
    title: "Abu Dhabi Police Game Stand",
    category: "Stand Design",
    software: ["Autodesk Maya", "Vray"],
    description: "Abu Dhabi Police – Interactive Game Launch Exhibition Stand Designed for an Abu Dhabi Police public engagement campaign, this interactive exhibition stand was created to promote a game launch experience within a modern retail environment. The project focuses on clean architectural design, immersive visitor interaction, and technology-driven engagement while maintaining the client's official branding and identity.",
    images: [
      "images/Stand1.png",
      "images/Stand2.png",
      "images/Gamel1.jpeg",
      "images/Gamel2.jpeg",
      "images/Gamel3.jpeg"
    ]
  }
];
