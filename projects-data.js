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
      "images/SD (1).png",
      "images/SD (2).png",
      "images/SD (3).png",
      "images/SD (4).png",
      "images/SD (5).png"
    ]
  },
  {
    id: "cgi-03",
    title: "Escape from the Depths",
    category: "Unreal Engine",
    software: ["Qixel Bridge", "Unreal Engine"],
    description: "Escape from the Depths is a UE5 environment project featuring Megascans assets and a Mixamo character. Set within a dark cave system, the project follows a simple escape narrative, culminating in a dramatic emergence into a naturally lit cavern.",
    images: [
      "images/DC (1).jpg",
      "images/DC (2).jpg",
      "images/DC (3).jpg",
      "images/DC (4).jpg",
      "images/DC (5).jpg"
    ]
  },
  {
    id: "cgi-04",
    title: "Stylized Japanese Bell",
    category: "CGI",
    software: ["Autodesk Maya","Substance Painter","ZBrush"],
    description: "A stylized Japanese Bell created by modeling and UV unwrapping in Maya, sculpting in ZBrush, texturing in Substance Painter, and rendering in Maya. The workflow combines detailed sculpting with hand-painted materials for a polished final presentation.",
    images: [
      "images/JB (1).jpg",
      "images/JB (2).jpg",
      "images/JB (3).jpg"
    ]
  },
  {
    id: "cgi-05",
    title: "Project 05 — add your title",
    category: "Exhibition Design",
    software: ["Unreal Engine", "ZBrush"],
    description: "Add a short description of this project — what it was for, your role, and the approach you took.",
    images: [
      "images/cgi-05-1.jpg",
      "images/cgi-05-2.jpg",
      "images/cgi-05-3.jpg"
    ]
  },
  {
    id: "cgi-06",
    title: "Project 06 — add your title",
    category: "3D Event Design",
    software: ["Autodesk Maya", "Unreal Engine"],
    description: "Add a short description of this project — what it was for, your role, and the approach you took.",
    images: [
      "images/cgi-06-1.jpg",
      "images/cgi-06-2.jpg",
      "images/cgi-06-3.jpg"
    ]
  }
];
