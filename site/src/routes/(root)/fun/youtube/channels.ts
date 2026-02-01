export interface YoutubeChannelData {
  name: string;
  capt?: string;
  icon: string;
  link: string;
  desc: string | string[];
}


const _template = [
  {
    name: "",
    capt: "",
    icon: undefined,
    link: "",
    desc:
      ``,
  },
]


export const channels: YoutubeChannelData[] = [
  {
    name: "2swap",
    capt: "emergence, Connect 4",
    icon: "2swap.jpg",
    link: "https://youtube.com/@twoswap",
    desc:
      `3Blue1Brown on steroids, with audiovisual effects, dramatic flourish, and a slightly more apparent interest in Connect 4. Guess what, he *also* wrote his own animation software 💀`,
  },
  {
    name: "3Blue1Brown",
    capt: "Essence of Calculus, machine learning, probability, physics, π",
    icon: "3b1b.png",
    link: "https://youtube.com/@3blue1brown",
    desc:
      `You’ve probably already seen most of his videos (I know I have!), but I can’t just *not* include Grant here. He explores maths (and CS) concepts, questions, problems, and other interesting avenues, with an emphasis of building understanding through intuition and discovery. You come away from his videos thinking, “wow, I could’ve invented that”. Beautiful animations and eloquent prose are icing on the cake. He creates his videos with animation software he developed himself called *manim*, which you may notice increasingly many maths creators on YouTube using!`,
  },
  {
    name: "Eyesomorphic",
    capt: "category theory, abstraction",
    icon: "eyesomorphic.jpg",
    link: "https://youtube.com/@Eyesomorphic",
    desc:
      `A calm and gentle introduction to category theory and abstract maths / logic / computer science. Not many videos right now, hoping he returns soon!`,
  },
  {
    name: "Marc Evanstein / music.py",
    capt: "maths and music",
    icon: "marc-evanstein.jpg",
    link: "https://www.youtube.com/@marcevanstein",
    desc:
      `Applying maths to music, the perfect combo.`,
  },
  {
    name: "CodeParade",
    capt: "maths and code",
    icon: "code-parade.jpg",
    link: "https://www.youtube.com/@CodeParade",
    desc:
      `For you mathematical programmers out there`,
  },
  {
    name: "Emergent Garden",
    capt: "emergence and complexity",
    icon: "emergent-garden.jpg",
    link: "https://www.youtube.com/@EmergentGarden",
    desc:
      `Questioning reality before bed`,
  },
  {
    name: "All Angles",
    capt: "much",
    icon: "all-angles.jpg",
    link: "https://www.youtube.com/@AllAnglesMath",
    desc:
      `Discovering myself!`,
  },
  {
    name: "Joseph Newton",
    capt: "cursed units and more",
    icon: "joseph-newton.jpg",
    link: "https://www.youtube.com/@josephnewton",
    desc:
      `Videos about maths!`,
  },
];
