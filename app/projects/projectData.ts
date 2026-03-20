export type Project = {
  slug: string;
  name: string;
  location: string;
  fullAddress: string;
  type: string;
  cover?: string;
  hero?: string;
  beforeImage?: string;
  afterImage?: string;
  gallery: string[];
  highlights: string[];
  summary: string;
};

export const projects: Project[] = [
  {
    slug: "328-concord",
    name: "328 Concord Ave",
    location: "Oceanside, NY 11572",
    fullAddress: "328 Concord Ave, Oceanside, NY 11572",
    type: "Full Home Transformation",
    cover: "/project-images/328-concord/Front.JPG",
    hero: "/project-images/328-concord/Front.JPG",
    beforeImage: "/project-images/328-concord/Before.JPG",
    afterImage: "/project-images/328-concord/Front.JPG",
    gallery: [
      "/project-images/328-concord/Front.JPG",
      "/project-images/328-concord/Back.JPG",
      "/project-images/328-concord/Kitchen.JPG",
      "/project-images/328-concord/Kitchen2.JPG",
      "/project-images/328-concord/Kitchen3.JPG",
      "/project-images/328-concord/Bathroom.JPG",
      "/project-images/328-concord/Bathroom2.JPG",
      "/project-images/328-concord/Fireplace.JPG",
      "/project-images/328-concord/Stairs.JPG",
    ],
    highlights: [
      "Complete exterior transformation",
      "Open concept kitchen with waterfall island",
      "Modern bathrooms with illuminated mirrors",
      "Custom fireplace feature wall",
      "Updated staircase and refined interior finishes",
    ],
    summary:
      "This Oceanside property underwent a complete exterior and interior transformation. The project included a redesigned facade, modern open concept kitchen with waterfall island, upgraded bathrooms, a custom fireplace feature wall, and refined finishes throughout the home.",
  },
  {
    slug: "3811-illona",
    name: "3811 Illona Lane",
    location: "Oceanside, NY 11572",
    fullAddress: "3811 Illona Lane, Oceanside, NY 11572",
    type: "Full Home Transformation",
    cover: "/project-images/3811-illona/Front.jpeg",
    hero: "/project-images/3811-illona/Front.jpeg",
    beforeImage: "/project-images/3811-illona/Before.jpeg",
    afterImage: "/project-images/3811-illona/After.jpeg",
    gallery: [
      "/project-images/3811-illona/Front.jpeg",
      "/project-images/3811-illona/After.jpeg",
      "/project-images/3811-illona/FrontCorner.jpeg",
      "/project-images/3811-illona/FrontClose.jpeg",
      "/project-images/3811-illona/FrontClose2.jpeg",
      "/project-images/3811-illona/Door.jpeg",
      "/project-images/3811-illona/Kitchen.jpeg",
      "/project-images/3811-illona/Kitchen2.jpeg",
      "/project-images/3811-illona/Bathroom.jpeg",
      "/project-images/3811-illona/Fireplace.jpeg",
      "/project-images/3811-illona/Terrace.jpeg",
      "/project-images/3811-illona/Back.jpeg",
      "/project-images/3811-illona/BackStairs.jpeg",
      "/project-images/3811-illona/FrontNight.jpeg",
      "/project-images/3811-illona/FrontNight2.jpeg",
      "/project-images/3811-illona/FrontNight3.jpeg",
    ],
    highlights: [
      "Complete exterior transformation with modern stucco and dark wood facade",
      "Custom ornamental iron front door with sidelights",
      "Open concept kitchen with marble waterfall island and pendant lighting",
      "Black marble feature fireplace wall",
      "Marble tile bathrooms with LED backlit mirrors",
      "New elevated composite deck with stamped concrete patio below",
      "Custom geometric iron railings throughout",
    ],
    summary:
      "3811 Illona Lane underwent a dramatic full home transformation from a dated colonial into a striking modern residence. The project featured a complete exterior redesign, a custom ornamental iron entry door, an open concept kitchen with a marble waterfall island, a black marble fireplace feature wall, marble tile bathrooms, and a new elevated deck with a stamped concrete patio, finished with custom iron railings and refined details throughout.",
  },
  {
    slug: "3446-frederick",
    name: "3446 Frederick St",
    location: "Second Story Addition",
    fullAddress: "3446 Frederick St",
    type: "Full Home Transformation",
    cover: "/project-images/3446-frederick/Front.JPG",
    hero: "/project-images/3446-frederick/Front.JPG",
    beforeImage: "/project-images/3446-frederick/Before.JPG",
    afterImage: "/project-images/3446-frederick/Front.JPG",
    gallery: [
      "/project-images/3446-frederick/Front.JPG",
      "/project-images/3446-frederick/Before.JPG",
      "/project-images/3446-frederick/Back-before.JPG",
      "/project-images/3446-frederick/Back.JPG",
      "/project-images/3446-frederick/Back2.JPG",
      "/project-images/3446-frederick/Interior.JPG",
      "/project-images/3446-frederick/Bathroom.JPG",
      "/project-images/3446-frederick/Bathroom2.JPG",
      "/project-images/3446-frederick/Bathroom3.JPG",
    ],
    highlights: [
      "Added a full second story to expand the home's footprint",
      "Completely reworked the front and rear elevation to support the new level",
      "Updated interior spaces and bathrooms as part of the full transformation",
      "Integrated the addition into the existing home with a cohesive finished look",
    ],
    summary:
      "3446 Frederick St involved a major transformation centered on the addition of a full second story. The project expanded the home vertically while reworking the overall exterior presence and updating key interior spaces to create a much larger, more refined finished home.",
  },
  {
    slug: "487-links",
    name: "487 Links Dr E",
    location: "Oceanside, NY 11572",
    fullAddress: "487 Links Dr E, Oceanside, NY 11572",
    type: "Full Home Transformation — In Progress",
    cover: "/project-images/487-links/After.JPEG",
    hero: "/project-images/487-links/After.JPEG",
    beforeImage: "/project-images/487-links/Before.JPG",
    afterImage: "/project-images/487-links/After.JPEG",
    gallery: [
      "/project-images/487-links/Before.JPG",
      "/project-images/487-links/After.JPEG",
    ],
    highlights: [
      "Complete exterior redesign with modern architectural styling",
      "Full structural expansion with contemporary roofline and floor-to-ceiling windows",
      "New driveway and landscaping with tropical-inspired hardscape",
      "Mixed material facade with stucco, wood accents, and black framing",
      "Attached garage with modern flush panel door",
      "Construction currently in progress",
    ],
    summary:
      "487 Links Dr E is an ambitious full home transformation currently under construction. The project takes a dated single-story residence and reimagines it as a striking contemporary home with bold architectural lines, expansive glass, mixed material finishes, and a completely redesigned exterior with new landscaping and hardscaping. This project is actively being built and will be updated as construction progresses.",
  },
];
