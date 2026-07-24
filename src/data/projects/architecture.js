import NoArch from "@assets/NoArchitecture.png";

export const architectureData = [
  {
    title: "No Architecture",
    image: NoArch,
  },
  {
    title: "MVC",
    image: "https://cdn.ozzu.com/uploads/1/post/610491/1/diagram-of-the-mvc-design-pattern.png",
  },
  {
    title: "Clean Architecture",
    image: "https://substackcdn.com/image/fetch/$s_!55Wm!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F40cb8f80-601f-4364-a5a0-a34db7a96c26_2250x2814.png",
  },
  {
    title: "CQRS",
    image: "https://miro.medium.com/v2/resize:fit:875/1*sDOCS6W0SxsNRS5KlQoYgQ.png",
  },
  {
    title: "DDD",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*hM-D6VPybtpA91-TzOwMAg.jpeg",
  },
  {
    title: "Modular",
    image: "https://miro.medium.com/v2/resize:fit:944/1*IHoJwlvsn4F89ScdpV8vAA.png",
  },
  {
    title: "Atomic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcSW4xSFTEAwJdMFMIrZHJ84ZeZ_8QVF2QkGjGrOEjMw&s=10",
  },
];

export const getArchitecture = (title) => {
  if (!title) return null;
  return architectureData.find((target) => target.title === title);
};
