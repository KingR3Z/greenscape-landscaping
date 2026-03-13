export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  location: string;
  budget?: string;
  designTime: string;
  installationTime: string;
  image: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "kensington-courtyard",
    title: "kensington courtyard",
    description:
      "A neglected courtyard transformed into an intimate outdoor living room. Complete with a custom water feature, bespoke planters and atmospheric lighting, this space is designed for quiet mornings and elegant evening gatherings.",
    location: "Kensington, London",
    budget: "£45-50K",
    designTime: "3 months",
    installationTime: "5 months",
    image: "/images/projects/project-01.jpg", // [PLACEHOLDER]
  },
  {
    id: "surrey-estate",
    title: "surrey estate retreat",
    description:
      "This sprawling estate required a landscape that matched the grandeur of the home. Featuring a natural swimming pool, sunken fire pit and sculptured hedging, every corner offers a new experience.",
    location: "Surrey",
    budget: "£120-150K",
    designTime: "4 months",
    installationTime: "8 months",
    image: "/images/projects/project-02.jpg", // [PLACEHOLDER]
  },
  {
    id: "hampstead-modern",
    title: "hampstead modern",
    description:
      "A contemporary garden to complement a newly renovated Victorian terrace. Clean lines, architectural planting and a seamless indoor-outdoor flow define this sophisticated urban garden.",
    location: "Hampstead, London",
    budget: "£65-70K",
    designTime: "3 months",
    installationTime: "4 months",
    image: "/images/projects/project-03.jpg", // [PLACEHOLDER]
  },
  {
    id: "cotswolds-haven",
    title: "cotswolds country haven",
    description:
      "Blending rustic charm with modern outdoor luxury, this Cotswolds property was transformed into a fully realised family resort. Thoughtfully designed, engineered and built in-house.",
    location: "Cotswolds",
    budget: "£200K+",
    designTime: "5 months",
    installationTime: "12 months",
    image: "/images/projects/project-04.jpg", // [PLACEHOLDER]
  },
  {
    id: "richmond-revival",
    title: "richmond revival",
    description:
      "Balancing the character of this Edwardian home with the ease of modern outdoor living, this project is an elegant blend of heritage and innovation. Step into the perfect backyard escape.",
    location: "Richmond, London",
    budget: "£80K",
    designTime: "4 months",
    installationTime: "6 months",
    image: "/images/projects/project-05.jpg", // [PLACEHOLDER]
  },
  {
    id: "chelsea-terrace",
    title: "chelsea terrace garden",
    description:
      "Made for vibrant gatherings and quiet moments, every space of this urban retreat serves a purpose. A contemporary oasis blending stunning modern amenities with family-oriented zones.",
    location: "Chelsea, London",
    budget: "£55K",
    designTime: "3 months",
    installationTime: "4 months",
    image: "/images/projects/project-06.jpg", // [PLACEHOLDER]
  },
  {
    id: "kent-woodland",
    title: "kent woodland escape",
    description:
      "This modern retreat merges the home's architectural integrity with attractive natural spaces. From the front entrance to the woodland edge, this project incorporates the best of landscape design.",
    location: "Kent",
    budget: "£90K",
    designTime: "3 months",
    installationTime: "7 months",
    image: "/images/projects/project-07.jpg", // [PLACEHOLDER]
  },
  {
    id: "buckinghamshire-manor",
    title: "buckinghamshire manor",
    description:
      "Tucked away from the noise of the city, this landscape features a classic English style with contemporary touches. With expansive lawns and intimate garden rooms, relaxation is never far away.",
    location: "Buckinghamshire",
    budget: "£150K",
    designTime: "5 months",
    installationTime: "10 months",
    image: "/images/projects/project-08.jpg", // [PLACEHOLDER]
  },
];
