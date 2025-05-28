import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export const BASE_URL = `https://gsanextjs.vercel.app`;

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export const testimonials = [
  {
    id: 1,
    name: "Rajesh Verma",
    role: "Architect & Designer",
    content:
      "Global Stone Art's craftsmanship is unparalleled! The stone gazebo I ordered has completely transformed my garden into a luxurious retreat. Highly recommended for premium stone structures!",
    avatar: "/assets/others/users/user1.webp",
  },
  {
    id: 2,
    name: "Anjali Mehta",
    role: "Interior Designer",
    content:
      "The marble Ganesha murti I purchased is absolutely breathtaking. The detailing is so intricate, and the quality is outstanding. It has become the centerpiece of my home decor!",
    avatar: "/assets/others/users/user4.webp",
  },
  {
    id: 3,
    name: "Dr. Ramesh Iyer",
    role: "Landscaping Consultant",
    content:
      "As a landscaping expert, I can confidently say that Global Stone Art has the best selection of stone garden decor. My new stone gate adds an elegant and timeless charm to my farmhouse entrance!",
    avatar: "/assets/others/users/user3.webp",
  },
  {
    id: 4,
    name: "Mrs. Kavita Sharma",
    role: "Homeowner",
    content:
      "The stone sculptures I ordered are beautifully crafted. The only downside was that the delivery took a little longer than expected, but the wait was absolutely worth it for such exceptional artistry!",
    avatar: "/assets/others/users/user6.webp",
  },
  {
    id: 5,
    name: "Suresh Malhotra",
    role: "Entrepreneur",
    content:
      "I wanted a traditional stone urli for my courtyard, and Global Stone Art delivered beyond expectations. The craftsmanship is simply outstanding, and it adds an elegant touch to my space.",
    avatar: "/assets/others/users/user5.webp",
  },
  {
    id: 6,
    name: "Pandit Omprakash Tiwari",
    role: "Temple Architect",
    content:
      "The temple pillars crafted by Global Stone Art are an absolute masterpiece. The level of detail and authenticity in the carvings is rare to find. A perfect blend of tradition and excellence!",
    avatar: "/assets/others/users/user2.webp",
  },
];
