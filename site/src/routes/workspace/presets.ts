export const presets: {
  [preset: string]: object[];
} = {
  "int": [
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
  ],
  "c-square": [
    { id: "c-square-title-1", type: "text",
      text: "Integrity Completing the Square Checker\nv1.0",
    },
    { id: "c-square-text-filler-1",
      latex: " "
    },
    { id: "c-square-text-quad", type: "text",
      text: "Type your original quadratic here:"
    },
    { id: "c-square-latex-quad",
      latex: String.raw`f\left(x\right) = x^{2} + x + 1`
    },
    { id: "c-square-text-complete", type: "text",
      text: "Type your quadratic in completed square form here:"
    },
    { id: "c-square-latex-complete",
      latex: String.raw`g\left(x\right) = \left(x - p\right)^{2} + q`
    },
    { id: "c-square-text-filler-2",
      latex: " "
    },
    { id: "c-square-text-guide", type: "text",
      text: "If the graphs of f(x) and g(x) match, then your solution is correct!"
    },
  ],
}
