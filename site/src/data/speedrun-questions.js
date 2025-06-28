const _template = [
  {
    shard: "d25i-",
    difficulty: "",
    question: String.raw``,
    options: [
      
    ]
  },
];

export const derivatives = [
  {
    shard: "d25i-bd1",
    difficulty: "based",
    question: String.raw`e^{2025x}`,
    options: [
      String.raw`45^{2}\cdot e^{45^{2}\cdot x}`,
      String.raw`2025e^{2024x}`,
      String.raw`e^{2025x}`,
      String.raw`\frac{1}{2025}e^{2025x}`,
    ]
  }, {
    shard: "d25i-bd2",
    difficulty: "based",
    question: String.raw`\csc\left(x\right)^{4}`,
    options: [
      String.raw`4\csc\left(x\right)^{4}\cot\left(-x\right)`,
      String.raw`-4\csc\left(x\right)^{3}\cot\left(x\right)`,
      String.raw`4\csc\left(x\right)^{3}`,
      String.raw`\csc\left(x\right)^{3}`,
    ]
  }, {
    shard: "d25i-bd3",
    difficulty: "based",
    question: String.raw`e^{\left(x^{2}+1\right)}`,
    options: [
      String.raw`2exe^{\left(x^{2}\right)}`,
      String.raw`xe^{\left(x^{2}+1\right)}`,
      String.raw`\ln\left(2\right)e^{\left(x^{2}+1\right)}`,
      String.raw`\frac{1}{x^{2}+1}e^{\left(x^{2}+1\right)}`,
    ]
  }, {
    shard: "d25i-bd4",
    difficulty: "based",
    question: String.raw`\sqrt{1+x+x^{2}}`,
    options: [
      String.raw`\frac{x+1/2}{\sqrt{1+x+x^{2}}}`,
      String.raw`\frac{x+1}{\sqrt{1+x+x^{2}}}`,
      String.raw`\frac{1}{2\sqrt{1+x+x^{2}}}`,
      String.raw`\frac{2x}{\sqrt{1+x+x^{2}}}`,
    ]
  }, {
    shard: "d25i-bd5",
    difficulty: "based",
    question: String.raw`\sin\left(x\right)\cos\left(x\right)`,
    options: [
      String.raw`\cos2x`,
      String.raw`\frac{1}{2}\cos2x`,
      String.raw`2\cos2x`,
      String.raw`\sin^{2}x-\cos^{2}x`,
    ]
  }, {
    shard: "d25i-bd6",
    difficulty: "based",
    question: String.raw`\frac{e^{x}}{x}`,
    options: [
      String.raw`\frac{e^{x}}{x^{2}}\left(x-1\right)`,
      String.raw`e^{x}\left(\frac{1}{x}-1\right)`,
      String.raw`\frac{e^{x}}{x^{2}}-1`,
      String.raw`e^{x}\left(\frac{1}{x}+\frac{1}{x^{2}}\right)`,
    ]
  }, {
    shard: "d25i-bd7",
    difficulty: "based",
    question: String.raw`e^{e^{x}}`,
    options: [
      String.raw`e^{x+e^{x}}`,
      String.raw`e^{x}`,
      String.raw`e^{e^{e^{x}}}`,
      String.raw`xe^{x}e^{e^{x}}`,
    ]
  }, {
    shard: "d25i-bd8",
    difficulty: "based",
    question: String.raw`\sin\left(x+e^{x}\right)`,
    options: [
      String.raw`\cos\left(x+e^{x}\right)+e^{x}\cos\left(x+e^{x}\right)`,
      String.raw`\left(1+e^{x}\right)\sin\left(x+e^{x}\right)`,
      String.raw`e^{x}\cos\left(x+e^{x}\right)`,
      String.raw`\left(1+x\right)\cos\left(x+e^{x}\right)`,
    ]
  }, {
    shard: "d25i-bd9",
    difficulty: "based",
    question: String.raw`\tan^{2}x`,
    options: [
      String.raw`2\sec^{2}x\tan x`,
      String.raw`2\sec^{2}x\tan^{2}x`,
      String.raw`2\sec x\tan^{2}x`,
      String.raw`1-2\sec^{2}x\tan x`,
    ]
  }, {
    shard: "d25i-bd10",
    difficulty: "based",
    question: String.raw`\sec^{2}x`,
    options: [
      String.raw`2\sec^{2}x\tan x`,
      String.raw`\sec^{3}x`,
      String.raw`2\sec x\tan x`,
      String.raw`2\left(\sec x\right)\left(\sec x-1\right)`,
    ]
  }, {
    shard: "d25i-bd11",
    difficulty: "based",
    question: String.raw`\sec^{2}x-\tan^{2}x`,
    options: [
      String.raw`0`,
      String.raw`1`,
      String.raw`\sec x-\tan x`,
      String.raw`\sec x\left(\sec x-\tan x\right)`,
    ]
  }, {
    shard: "d25i-bd12",
    difficulty: "based",
    question: String.raw`\ln\left(\cos x\right)`,
    options: [
      String.raw`-\tan x`,
      String.raw`\tan x`,
      String.raw`\cot\left(\frac{1}{x}\right)`,
      String.raw`\frac{1}{\cot x}`,
    ]
  }, {
    shard: "d25i-bd13",
    difficulty: "based",
    question: String.raw`\sin x-\cos x`,
    options: [
      String.raw`\cos x+\sin x`,
      String.raw`\cos x-\sin x`,
      String.raw`\sin x-\cos x`,
      String.raw`-\sin x-\cos x`,
    ]
  }, {
    shard: "d25i-bd14",
    difficulty: "based",
    question: String.raw`\pi^{2}`,
    options: [
      String.raw`0`,
      String.raw`2\pi`,
      String.raw`\frac{1}{3}\pi^{3}`,
      String.raw`\pi+c`,
    ]
  }, {
    shard: "d25i-bd15",
    difficulty: "based",
    question: String.raw`x\ln x`,
    options: [
      String.raw`1+\ln x`,
      String.raw`\frac{1}{x}\left(1+\ln x\right)`,
      String.raw`\frac{1}{x}\left(x+1\right)`,
      String.raw`x+\ln x`,
    ]
  }, {
    shard: "d25i-bd16",
    difficulty: "based",
    question: String.raw`4x^{3}`,
    options: [
      String.raw`\frac{12x^{3}}{x}`,
      String.raw`16x^{2}`,
      String.raw`4x^{2}`,
      String.raw`x^{4}`,
    ]
  }, {
    shard: "d25i-bd17",
    difficulty: "based",
    question: String.raw`\frac{1}{1-x^{2}}`,
    options: [
      String.raw`\frac{2x}{\left(x^{2}-1\right)^{2}}`,
      String.raw`-\frac{2x}{\left(x^{2}-1\right)^{2}}`,
      String.raw`\frac{-2x}{1-x^{2}}`,
      String.raw`\frac{x}{-\left(1-x^{2}\right)^{2}}`,
    ]
  }, {
    shard: "d25i-bd18",
    difficulty: "based",
    question: String.raw`x-2x+3x-4x+5x`,
    options: [
      String.raw`3`,
      String.raw`1`,
      String.raw`-1`,
      String.raw`x`,
    ]
  }, {
    shard: "d25i-bd19",
    difficulty: "based",
    question: String.raw`e^{\left(\frac{1}{x^{2}}\right)}`,
    options: [
      String.raw`-2x^{-3}e^{\frac{1}{x^{2}}}`,
      String.raw`\frac{1}{x^{3}}e^{\frac{1}{x^{2}}}`,
      String.raw`-\frac{2}{x^{3}}e^{-\frac{1}{x^{2}}}`,
      String.raw`\pi`,
    ]
  }, {
    shard: "d25i-bd20",
    difficulty: "based",
    question: String.raw`\sin\left(2\pi x\right)`,
    options: [
      String.raw`2\pi\cos\left(2\pi x\right)`,
      String.raw`2\pi\sin\left(2\pi x\right)`,
      String.raw`\cos\left(2\pi x\right)`,
      String.raw`-2\pi\cos\left(2\pi x+2\pi\right)`,
    ]
  }, {
    shard: "d25i-bd21",
    difficulty: "based",
    question: String.raw`\tan\left(3x^{2}\right)`,
    options: [
      String.raw`6x\sec\left(3x^{2}\right)^{2}`,
      String.raw`x^{3}\tan\left(3x^{2}\right)`,
      String.raw`6x\sec\left(x^{3}\right)^{2}`,
      String.raw`x^{3}\sec\left(3x^{2}\right)^{2}`,
    ]
  }, {
    shard: "d25i-bd22",
    difficulty: "based",
    question: String.raw`\frac{1}{1-x}`,
    options: [
      String.raw`\frac{1}{\left(x-1\right)^{2}}`,
      String.raw`\frac{1}{2}\left(1-x\right)^{-2}`,
      String.raw`\frac{x}{\left(1-x\right)^{2}}`,
      String.raw`\frac{1+x}{\left(1-x\right)^{2}}`,
    ]
  },

  {
    shard: "d25i-ic1",
    difficulty: "incline",
    question: String.raw`\sec\left(\sec x\right)`,
    options: [
      String.raw`\sec\left(\sec x\right)\left(\tan x\right)\tan\left(\sec x\right)\left(\sec x\right)`,
      String.raw`\sec\left(\sec x\tan x\right)`,
      String.raw`\sec\left(\sec x\right)\tan\left(\sec x\right)`,
      String.raw`\tan^{2}\left(\sec x\right)\left(\sec x\right)\left(\tan x\right)`
    ]
  }, {
    shard: "d25i-ic2",
    difficulty: "incline",
    question: String.raw`\sin\left(\tan^{-1}x\right)`,
    options: [
      String.raw`\frac{\cos\left(\tan^{-1}x\right)}{x^{2}+1}`,
      String.raw`-\frac{\cos\left(\tan^{-1}x\right)}{1+x^{2}}`,
      String.raw`\sin\left(\tan^{-1}x\right)\sec^{2}x`,
      String.raw`\frac{1}{2}\sin\left(\tan^{-1}x\right)^{2}`
    ]
  }, {
    shard: "d25i-ic3",
    difficulty: "incline",
    question: String.raw`\frac{x+1}{x-1}`,
    options: [
      String.raw`-\frac{2}{\left(1-x\right)^{2}}`,
      String.raw`\frac{2}{\left(x-1\right)^{2}}`,
      String.raw`\frac{x+1}{\left(x-1\right)^{2}}`,
      String.raw`\frac{x}{\left(1-x\right)^{2}}`
    ]
  }, {
    shard: "d25i-ic4",
    difficulty: "incline",
    question: String.raw`\sqrt{x^{2}}`,
    options: [
      String.raw`\operatorname{sign}\left(x\right)`,
      String.raw`-\left|x\right|`,
      String.raw`1`,
      String.raw`\frac{1}{\sqrt{x^{2}}}`
    ]
  }, {
    shard: "d25i-ic5",
    difficulty: "incline",
    question: String.raw`\frac{d}{dx}\sec\left(x\right)\tan\left(x\right)`,
    options: [
      String.raw`\left(\sec x\right)\left(\tan^{2}x+\sec^{2}x\right)`,
      String.raw`\left(\sec x\right)^{2}\left(\tan x\right)^{2}`,
      String.raw`\left(\sec x\right)\left(\tan x\right)^{3}`,
      String.raw`\left(\tan x\right)\left(\sec x+\tan x\right)`
    ]
  }, {
    shard: "d25i-ic6",
    difficulty: "incline",
    question: String.raw`\tanh^{-1}\left(\sin x\right)`,
    options: [
      String.raw`\sec x`,
      String.raw`\sec^{2}x`,
      String.raw`\sin x`,
      String.raw`\tan x`
    ]
  }, {
    shard: "d25i-ic7",
    difficulty: "incline",
    question: String.raw`\ln\left(x\tan x\right)`,
    options: [
      String.raw`\frac{1}{x}+\frac{\sec x}{\sin x}`,
      String.raw`\frac{1}{x\tan x}`,
      String.raw`\frac{\sec^{2}x}{x\tan x}`,
      String.raw`\frac{x\tan x-x\sec^{2}x}{\tan x}`
    ]
  },

  {
    shard: "d25i-mf1",
    difficulty: "manifold",
    question: String.raw`x^{\left(x+1\right)}`,
    options: [
      String.raw`x^{\left(x+1\right)}\left(1+\ln x+\frac{1}{x}\right)`,
      String.raw`x^{\left(x+1\right)}\left(1+\frac{\ln x}{x}\right)`,
      String.raw`x^{\left(x+1\right)}\left(\ln x\right)\left(x+1\right)`,
      String.raw`x^{\left(x+1\right)}\left(1+x+\ln x\right)`
    ]
  }, {
    shard: "d25i-mf2",
    difficulty: "manifold",
    question: String.raw`\sin\left(x\right)\sin\left(2x\right)`,
    options: [
      String.raw`2\left(\left(\sin x\right)\left(\cos2x\right)+\left(\cos x\right)^{2}\left(\sin x\right)\right)`,
      String.raw`2\cos\left(x\right)\cos\left(2x\right)`,
      String.raw`\cos\left(x\right)\sin\left(2x\right)+\sin\left(x\right)\cos\left(2x\right)`,
      String.raw`2\left(\sin x\right)\left(\cos^{2}x-\sin^{2}x\right)`
    ]
  },
].map(q => {
  q.options = q.options.map((latex, index) => ({ index, latex }));
  return q;
});
