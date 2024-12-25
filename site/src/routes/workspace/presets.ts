export const presets: {
  [preset: string]: object[];
} = {
  "int":
  [
    { id: "int-title-1", type: "text",
      text: "Integrity Integral Checker\nv1.0"
    },
    { id: "int-text-filler-1",
      latex: " "
    },
    { id: "int-text-antideriv", type: "text",
      text: "Type your antiderivative here:"
    },
    { id: "int-latex-antideriv",
      hidden: true,
      latex: String.raw`f\left(x\right) = `
    },
    { id: "int-text-integral", type: "text",
      text: "Type your integral here:"
    },
    { id: "int-latex-integral",
      latex: String.raw`g\left(x\right) = `
    },
    { id: "int-text-integral-2", type: "text",
      text: "(This should be the expression between ∫ and dx)"
    },
    { id: "int-text-filler-2",
      latex: " "
    },
    { id: "int-text-antideriv-deriv",
      latex: String.raw`f'\left(x\right)`
    },
    { id: "int-text-guide", type: "text",
      text: "If the graphs of f'(x) and g(x) match, then your antiderivative is correct!"
    },
  ]
}
