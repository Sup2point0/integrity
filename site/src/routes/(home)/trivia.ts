export function pick_trivia(): Trivia
{
  let today = new Date();
  /* @ts-ignore */
  let delta = today - Date.UTC(today.getFullYear(), 0, 0);
  let t = Math.floor(delta / 24 / 60 / 60 / 1000);

  let total = trivia.length;
  let scale = 0.69 * total;
  let idx = (scale * t + 8) % total;

  return trivia[Math.round(idx)];
}


export interface Trivia {
  text: string;
  note?: string;
}


const _template = [
  {
    text: String.raw ``,
    note: String.raw ``,
  },
];


export const trivia = [
  {
    text: String.raw `Have we heard of the hairy ball theorem?`,
  },
  {
    text: String.raw `There are the same number of numbers between $0$ and $1$ as there are between $1$ and $\infin$.`,
    note: String.raw `Uncountably infinite!`,
  },
  {
    text: String.raw `$69^2$ and $69^3$ collectively use all the digits from $0$ to $9$ exactly once each.`,
  },
  {
    text: String.raw `The Riemann integral is not the only kind of integral 0.o`,
  },
  {
    text: String.raw `Differentiating an odd function gives an even function.`,
    note: String.raw `And vice versa!`,
  },
  {
    text: String.raw `A function can be continuous everywhere but differentiable nowhere...`,
  },
  {
    text: String.raw `$\displaystyle \int x \ dx - \int x \ dx$ is not $0$, it’s $c$ 😎`,
    note: String.raw `Always the pathological constant.`,
  },
  {
    text: String.raw `After $6$ and $28$, the next [perfect numbers](https://en.wikipedia.org/wiki/Perfect_number) are $496$ and $8128$.`,
    note: String.raw `Might be one of the fastest growing sequences :0`,
  },
  {
    text: String.raw `*Dual numbers* are like complex numbers. They take the form $p + q\epsilon$, where $\epsilon$ satisfies $\epsilon^2 = 0$. With $\epsilon \neq 0$.`,
    note: String.raw `Yeah, wack af.`,
  },

  {
    text: String.raw `I came up with the name *Integrity* in, like, 2 seconds.`,
    note: String.raw `Like I seriously didn’t put much thought into it, but I just instantly knew it was perfect.`,
  },
  {
    text: String.raw `I started working on *Integrity* to procrastinate from revising maths ;P`,
  },
  {
    text: String.raw `My friend iTechnical technically came up with the idea for [Speedrun](speedrun) before me. I forgot he did and came up with the exact same idea on my own 💀`,
  },
  {
    text: String.raw `Did you know *Integrity* has Differentiation questions? They’re exclusive to [Speedrun](speedrun) ;)`,
  },
  {
    text: String.raw `During brainstorming, some other names I came up with for difficulties were *INFINITESIMAL*, *NONTRIVIAL*, *CRITICAL* and *POLYMORPHIC*.`,
    note: String.raw `I think they lack the charm that the finalised difficulties do.`,
  },
  {
    text: String.raw `The [Desmos Library](desmos/library) used to reside in [*Assort*](https://sup2point0.github.io/Assort), until I finally realised *Integrity* would be the perfect place for it.`,
  },
  {
    text: String.raw `If I had a nickel for every time I’ve made a tiny bug fix or quality-of-life tweak to *Integrity*, I’d be drowning in nickels, which would probably suck.`,
    note: String.raw `It feels so good making these tiny changes. Just nearing perfection bit by bit.`,
  },
  {
    text: String.raw `*Integrity* is honestly my first experience maintaining and growing a long-term project.`,
  },
  {
    text: String.raw `When difficulties were introduced to *Integrity*, I went through all 300 integrals and manually assigned difficulties to them.`,
    note: String.raw `To be honest, that was probably a good thing, since me doing it all in one go was a lot more consistent than if I’d done them individually over time.`,
  },
  {
    text: String.raw `Coming up with a way to deterministically but uniformly randomly select one of these trivia to display was quite fun.`,

  },
  {
    text: String.raw `What starts with “f” and rhymes with *tractorise*?`,
  },
  {
    text: String.raw `What starts wih “c” and rhymes with *swear*?`,
  },
  {
    text: "So, d’you pronounce $\\ln()$ as `/ln/` or `/log/`?",
    note: String.raw `I’m firmly the latter.`,
  },
  {
    text: "Anyone else pronounce $\\cos()$ as `/kous/`?",
    note: String.raw `I mean, it’s short for cosine.`,
  },
  {
    text: String.raw `Anyone else know the international symbol of cross-multiplying?`,
    note: String.raw `Grab, pull, and cross.`,
  },
  {
    text: String.raw `*Quaternion* has got to be one of the coolest terms in all of mathematics.`,
  },
];
