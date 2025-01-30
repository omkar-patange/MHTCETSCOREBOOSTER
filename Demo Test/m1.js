

// ************ Questions **************



let questions = [
    {
    numb: 1,
    question: "Q1:  $$\\int_\\frac{- \\pi}{8} ^\\frac{\\pi}{8} log\\frac{(2 -sinx)}{(2 +sinx)} dx =  $$  ",
    answer: "4",
    options: [
      "$$ \\frac{\\pi}{8} $$",
      "$$ \\frac{\\pi}{2} $$",
      "$$ \\frac{\\pi}{4} $$",
      "0"
    ]
  },
  {
    numb: 2,
    question: "Q2: For which values of x is the matrix  $$\\begin{bmatrix}  3 & -1+x & 2 \\newline  3 & -1 & x+2 \\newline  x+3 & -1 & 2  \\end{bmatrix}$$ non-invertible",
    answer: "1",
    options: [
      "-4, 0",
      "2, 0",
      "4, 0",
      "-2, 0"
    ]
  },
  {
    numb: 3,
    question: "Q3: If A(1, 3, 2), B(a, b, -4) & C(5, 1, c) are the vertices of triangle ABC & G(3, b, c) is its centroid, then",
    answer: "3",
    options: [
    "a = $$\\frac{1}{2}$$, b = 1, c = 2",
    "a = 3, b = -1, c = $$\\frac{1}{3}$$",
    "a = 3, b = 2, c = -1",
    "a = $$\\frac{1}{2}$$, b = 2, c = -1"
    ]
  },
  {
    numb: 4,
    question: "Q4: If $$sin^{-1}$$x = $$\\frac{\\pi}{10}$$, for some x \\epsilon [-1, 1], then the value of $$cos^{-1}$$ x is",
    answer: "2",
    options: [
  "$$\\frac{\\pi}{10}$$",
  "$$\\frac{2\\pi}{5}$$",
  "$$\\frac{4\\pi}{5}$$",
  "$$\\frac{7\\pi}{10}$$"
  ]
  },
  {
    numb: 5,
    question: "Q5: The direction ratios of the line 2x - 1 = 3y + 2 = z - 2 are",
    answer: "1",
    options: [
  "3, 2, 6",
  "3, 2, -6",
  "3, -1, -6",
  "-3, 1, 6"
  ]
  },
  {
    numb: 6,
    question: "Q6: $$\\int e^x  \\Biggl( \\frac{ \\sqrt{1-x^2}\\cdot sin^{-1} +1}{\\sqrt{1-x^2}} \\Biggr)$$ dx = ",
    answer: "3",
    options: [
  "$$e^x\\sqrt{1-x^2}$$ + c",
  "$$\\frac{e^x}{\\sqrt{1-x^2}}$$ + c",
  "$$e^x sin^{-1}x + c$$",
  "$$e^x cos^{-1}x + c$$"
  ]
  },
  {
    numb: 7,
    question: "Q7: Area bounded by the curve 7xy - 7x - 7y - 2 = 0, X-axis and the lines x = 2, x = 3 is",
    answer: "4",
    options: [
  "1 - $$\\frac{7}{9}$$ log 2 sq. units",
  "1 + $$\\frac{7}{9}$$ log 2 sq. units",
  "1 - $$\\frac{9}{7}$$ log 2 sq. units",
  "1 + $$\\frac{9}{7}$$ log 2 sq. units"
  ]
  },
  {
    numb: 8,
    question: "Q8: $$cos^{-1} \\Biggl( cos\\frac{4\\pi}{3} \\Biggr)$$ = ",
    answer: "4",
    options: [
  "$$\\frac{5\\pi}{6}$$",
  "$$\\frac{\\pi}{3}$$",
  "$$\\frac{4\\pi}{3}$$",
  "$$\\frac{2\\pi}{3}$$"
  ]
  },
  {
    numb: 9,
    question: "Q9: If a is a $$3\\times3$$ matrix and |A| = 2, then the matrix represented by A (adjA) is equal to",
    answer: "2",
    options: [
  "$$\\begin{bmatrix}  1 & 0 & 0 \\newline  0 & 1 & 0 \\newline  0 & 0 & 1  \\end{bmatrix}$$",
  "$$\\begin{bmatrix}  2 & 0 & 0 \\newline  0 & 2 & 0 \\newline  0 & 0 & 2  \\end{bmatrix}$$",
  "$$\\begin{bmatrix}  0 & 0 & \\frac{1}{2} \\newline  0 & \\frac{1}{2} & 0 \\newline  0 & 0 & \\frac{1}{2}  \\end{bmatrix}$$",
  "$$\\begin{bmatrix}  0 & 2 & 0 \\newline  2 & 0 & 0 \\newline  2 & 0 & 0  \\end{bmatrix}$$"
  ]
  },
  {
    numb: 10,
    question: "Q10: The volume of tetrahedron whose vertices are A(3, 7, 4), B(5, -2, 3), C(-4, 5, 6), D(1, 2, 3) is",
    answer: "3",
    options: [
  "$$\\frac{43}{6}$$ cu.units",
  "43 cu.units",
  "$$\\frac{43}{3}$$ cu.units",
  "$$\\frac{6}{43}$$ cu.units"
  ]
  },
  {
    numb: 11,
    question: "Q11: $$\\int \\frac{cosx + xsinx}{x(x+cosx)} dx = $$",
    answer: "2",
    options: [
  "$$log \\left \\lvert \\frac{1}{x+cosx}  \\right \\rvert$$ + c",
  "$$log \\Bigg | \\frac{x}{x+cosx} \\Bigg | $$ + c",
  "$$log \\Bigg | \\frac{1}{x+sinx} \\Bigg | $$ + c",
  "$$log \\Bigg | \\frac{x}{x+sinx} \\Bigg | $$ + c"
  ]
  },
  {
    numb: 12,
    question: "Q12: $$\\int_0^\\frac{\\pi}{4} \\frac{sec^2x}{(1+tanx)(2+tanx)} dx =   $$",
    answer: "2",
    options: [
  "$$log\\bigl( \\frac{8}{3} \\bigr)$$",
  "$$log\\bigl( \\frac{4}{3} \\bigr)$$",
  "$$\\frac{1}{2}log\\bigl( \\frac{8}{3} \\bigr)$$",
  "$$\\frac{1}{2}log\\bigl( \\frac{4}{3} \\bigr)$$"
  ]
  },
  {
    numb: 13,
    question: "Q13: The value of $$tan57^ \\circ - tan12^\\circ - (tan57^ \\circ \\cdot tan12^ \\circ) $$ is",
    answer: "2",
    options: [
  "$$tan69^\\circ$$",
  "$$tan45^\\circ$$",
  "0",
  "$$tan57^\\circ$$"
  ]
  },
  {
    numb: 14,
    question: "Q14: The XZ plane divides the line segment joining the points (3, 2, b) & (a, -4, 3) in the ratio ",
    answer: "1",
    options: [
  "1 : 2",
  "2 : 3",
  "3 : 1",
  "4 : 3"
  ]
  },
  {
    numb: 15,
    question: "Q15: If $$(\\bar{a}+2\\bar{b}-\\bar{c})\\cdot \\Big[ (\\bar{a} - \\bar{b}) \\times (\\bar{a} - \\bar{b}-\\bar{c}) \\Big] = k \\Big [ \\bar{a} \\quad \\bar{b} \\quad \\bar{c} \\Big]$$, then the value of k is ",
    answer: "3",
    options: [
  "1",
  "2",
  "3",
  "4"
  ]
  },
   {
    numb: 16,
    question: "Q16: In a $$\\Delta $$ABC, $$a(cos^2B+cos^2C) +cosA(c\\:cosC +b\\:cosB) =$$",
    answer: "2",
    options: [
  "0",
  "a",
  "b",
  "c"
  ]
  },
   {
    numb: 17,
    question: "Q17: Find k, if the slope of one of the lines given by $$kx^2+8xy+y^2=0$$ exceeds the slope of the other by 6.",
    answer: "2",
    options: [
  "6",
  "7",
  "-6",
  "-7"
  ]
  },
   {
    numb: 18,
    question: "Q18: $$\\int \\frac{1}{sin x \\cdot cosx} dx = $$",
    answer: "3",
    options: [
  "$$ log|sinx|+c $$",
  "$$ log|cosx|+c $$",
  "$$ log|tanx|+c $$",
  "$$ log|secx|+c $$"
  ]
  },
   {
    numb: 19,
    question: "Q19: The equation of circle whose diameter lies on 3x + 5y = -7 and 2x - y = 4 which passes through $$\\Big( -5 \\:, \\frac{1}{2} \\Big)$$ is",
    answer: "2",
    options: [
  "$$x^2+y^2-2x+4y=14\\:9$$",
  "$$x^2+y^2-2x+4y=\\frac{14\\:9}{4}$$",
  "$$x^2+y^2+2x-4y=14\\:9$$",
  "$$x^2+y^2+2x-4y=\\frac{14\\:9}{4}$$"
  ]
  },
   {
    numb: 20,
    question: "Q20: The length of the perpendicular from(0, 2, 3) to the line $$\\frac{x+3}{5} = \\frac{y-1}{2} = \\frac{z+4}{3}$$ is",
    answer: "2",
    options: [
  "4",
  "$$\\sqrt{21}$$",
  "$$\\sqrt{41}$$",
  "7"
  ]
  },
  {
    numb: 21,
    question: "Q21: The combined equation of the pair of lines through origin such that one is parallel to 3x + 2y = 3 and the other is perpendicular to 6x + 3y +17 = 0 is",
    answer: "2",
    options: [
  "$$3x^2+4xy+4y^2 = 0$$",
  "$$3x^2-4xy-4y^2 = 0$$",
  "$$3x^2-4xy+4y^2 = 0$$",
  "$$3x^2-8xy+4y^2 = 0$$"
  ]
  },
  {
    numb: 22,
    question: "Q22: If $$\\big| \\bar{a} = 10 \\big |,\\big| \\bar{b} = 2 \\big |, then \\sqrt{\\big| \\bar{a} \\times \\bar{b} \\big| + \\big| \\bar{a} \\cdot \\bar{b} \\big|^2} =$$",
    answer: "2",
    options: [
  "10",
  "20",
  "40",
  "50"
  ]
  },
  {
    numb: 23,
    question: "Q23: The area bounded by the curve y = f(x), X-axis and ordinates x = 1 and x = a is (a - 1)cos(2a + 7), then f(x) is",
    answer: "1",
    options: [
  "2(1 - x)sin(2x + 7) + cos(2x + 7)",
  "(a - 1)sin(2x + 7) + 2cos(2x + 7)",
  "(1 - a)cos(2x + 7) + 3sin(2x + 7)",
  "2(1 - x)cos(2x + 7) + sin(2x + 7)"
  ]
  },
  {
    numb: 24,
    question: "Q24: In $$\\Delta$$ABC, if (a + b - c)(a + b + c) = 3ab, then",
    answer: "3",
    options: [
  "$$\\angle A+ \\angle B= 60^\\circ $$",
  "$$\\angle A+ \\angle B= 90^\\circ $$",
  "$$\\angle A+ \\angle B= 120^\\circ $$",
  "$$\\angle A+ \\angle B= 150^\\circ $$"
  ]
  },
  {
    numb: 25,
    question: "Q25: A plane passes through (1, -2, 1) and is perpendicular to two planes 2x - 2y + z = 0 and x - y + 2z = 4. The distance of the plane from the point (1, 2, 2) is",
    answer: "4",
    options: [
  "0",
  "1",
  "$$\\sqrt{2}$$",
  "$$2\\sqrt{2}$$"
  ]
  },
  {
    numb: 26,
    question: "Q26: $$\\lim_{x \\rightarrow 1} \\frac{x^2-3x+2}{x^2-1}=$$",
    answer: "2",
    options: [
  "0",
  "$$\\frac{-1}{2}$$",
  "$$\\frac{-7}{3}$$",
  "$$\\frac{-5}{2}$$"
  ]
  },
  {
    numb: 27,
    question: "Q27: $$x =\\begin{cases}\\frac{1}{k} & x = 0,1,2,3,4,5;k>0 \\\0 & ,otherwise\\end{cases}$$, <br> is p.m.f. of a r.v. X Then $$\\frac{1}{k}$$ is equal to",
    answer: "3",
    options: [
  "16",
  "$$\\frac{1}{16}$$",
  "$$\\frac{1}{32}$$",
  "32"
  ]
  },
  {
    numb: 28,
    question: "Q28: Let A (2, 3), B (3, -6), C (5 ,-7) be three points. If P is a point satisfying the condition $$PA^2+PB^2+=PC^2$$ , then a point that lies on the locus of P is",
    answer: "4",
    options: [
  "(2, -5)",
  "(-2, 5)",
  "(13, 10)",
  "(-13, -10)"
  ]
  },
  {
    numb: 29,
    question: "Q29: Degree of the given differential equation<br> $$\\Biggl(  \\frac{d^3y}{dx^3} \\Biggr)^{2} = \\Biggl( 1+ \\frac{dy}{dx} \\Biggr)^{\\frac{1}{3}}$$",
    answer: "4",
    options: [
  "2",
  "3",
  "$$\\frac{1}{2}$$",
  "6"
  ]
  },
  {
    numb: 30,
    question: "Q30: Let g(x) be the inverse of the function f(x) and f'(x) = $$\\frac{2}{x^2+3}$$, then 2g'(x) is equal to",
    answer: "3",
    options: [
  "$$\\frac{1}{3+[\\:g(x)\\:]^2}$$",
  "$$\\frac{1}{3+[\\:f(x)\\:]^2}$$",
  "$$3+[\\: g(x) \\:]^2$$",
  "$$3+[\\: f(x) \\:]^2$$"
  ]
  },
   {
    numb: 31,
    question: "Q31: If $$z\\neq1$$ and $$\\frac{z^2}{z-1}$$ is real, then the npoint represented by the complex number z lies",
    answer: "1",
    options: [
  "either on the real axis or on a circle passing through the origin",
  "on a circle with centre at the origin",
  "either on the real axis or on a circle not passing through the origin",
  "on the imaginary axis"
  ]
  },
   {
    numb: 32,
    question: "Q32: If p : Every natural number is a real number.<br>q:Every integer is a complex number. The truth values of $$p\\rightarrow q$$ and $$p \\leftrightarrow q$$ are _____ and _____ respectively.",
    answer: "4",
    options: [
  "F, F",
  "T, F",
  "F, T",
  "T, T"
  ]
  },
   {
    numb: 33,
    question: "Q33: The differential equation having $$y= (cos^{-1}x)^2+P(sin^{-1}x)+Q$$ as its general solution, where P and Q are arbitraty constants, is",
    answer: "2",
    options: [
  "$$(1-x^2) \\frac{d^2y}{dx^2}+x\\frac{dy}{dx}=2$$",
  "$$(1-x^2) \\frac{d^2y}{dx^2}-x\\frac{dy}{dx}=2$$",
  "$$(1-x^2) \\frac{d^2y}{dx^2}+x\\frac{dy}{dx}=2y$$",
  "None of these"
  ]
  },
   {
    numb: 34,
    question: "Q34: The number of discontinuties of the greatest integer function <br>$$f(x)=[x], x \\:\\epsilon \\Big( \\frac{-7}{2},100 \\Big)$$ is equal to",
    answer: "4",
    options: [
  "104",
  "100",
  "102",
  "103"
  ]
  },
   {
    numb: 35,
    question: "Q35: The maximum value of $$P= 7x+6y$$ subject to constraints $$x+2y\\leq 24,\\:2x+y\\leq 30$$ and $$x\\geq0,y\\geq0$$ is",
    answer: "2",
    options: [
  "90",
  "120",
  "96",
  "240"
  ]
  },
  {
    numb: 36,
    question: "Q36: The inverse of the function <br>$$y= \\frac{16^x-16^{-x}}{16^x+16^{-x}}$$ is",
    answer: "2",
    options: [
  "$$log_{16}(2-x)$$",
  "$$\\frac{1}{2}log_{16}\\Big(\\frac{1+x}{1-x}\\Big)$$",
  "$$\\frac{1}{2}log_{16}(2x-1)$$",
  "$$\\frac{1}{4}log_{16}\\Big(\\frac{2x}{2-x}\\Big)$$"
  ]
  },
  {
    numb: 37,
    question: "Q37: The probability distribution of a r.v. X is given below, then F(-1) = ",
    img : "<img src = 'Q_Pictures/m_37.jpg'>",
    answer: "2",
    options: [
  "0.5",
  "0.75",
  "0.9",
  "12"
  ]
  },
  {
    numb: 38,
    question: "Q38: If $$\\alpha= \\:^mC_2$$ , then $$^{\\alpha}C_2$$ is equal to",
    answer: "4",
    options: [
  "$$^{m+1}C_4$$",
  "$$^{m-1}C_4$$",
  "$$3.\\: ^{m+2}C_4$$",
  "$$3.\\: ^{m+1}C_4$$"
  ]
  },
  {
    numb: 39,
    question: "Q39: The mean and variance of a binomial distribution are 2 and 1 respectively, then the probability of getting exactly three successes in this distribution is",
    answer: "1",
    options: [
  "0.25",
  "0.75",
  "0.52",
  "0.57"
  ]
  },
  {
    numb: 40,
    question: "Q40: y = cos(2x) is a solution of the differential equation",
    answer: "3",
    options: [
  "$$\\frac{dy}{dx}+6y=0$$",
  "$$\\frac{dy}{dx}-6y=0$$",
  "$$\\frac{d^2y}{dx^2}+4y=0$$",
  "$$\\frac{d^2y}{dx^2}-4y=0$$"
  ]
  },
   {
    numb: 41,
    question: "Q41: The symbolic form of the statement 'It is not true that Mathematics is not difficult and interesting' is",
    answer: "1",
    options: [
  "$$\\sim(\\sim p \\: \\wedge \\:q )$$",
  "$$(\\sim p \\: \\vee\\:q )$$",
  "$$(\\sim p \\: \\vee \\: \\sim q )$$",
  "$$\\sim(\\sim p \\: \\vee \\:q )$$"
  ]
  },
   {
    numb: 42,
    question: "Q42: The family of curves $$y=e^{a\\:sinx}$$ , where a is an arbitraty constant, is represented by the differential equation",
    answer: "2",
    options: [
  "$$log\\:y= tan\\: x \\frac{dy}{dx}$$",
  "$$y\:log\\:y= tan\\: x \\frac{dy}{dx}$$",
  "$$y\:log\\:y= sin\\: x \\frac{dy}{dx}$$",
  "$$log\\:y= cos\\: x \\frac{dy}{dx}$$"
  ]
  },
   {
    numb: 43,
    question: "Q43: If $$y=sec\\:x+x^{log\\:x}$$ , then $$\\frac{dy}{dx}$$ is",
    answer: "1",
    options: [
  "$$sec\\:x \\: tan\\:x + \\frac{2}{x}log \\: x.(x^{log\\: x})$$",
  "$$sec^2 \\:x+ \\frac{x}{2} log\\:x$$",
  "$$sec^2 \\:x+ \\frac{2}{x} log\\:x$$",
  "$$sec \\: x \\: tan \\: x+ \\frac{1}{x}log\\:x$$"
  ]
  },
   {
    numb: 44,
    question: "Q44: If p: Reshama is hardworking, q: Reshama is successful, then the verbal form of $$\\sim p \\: \\wedge \\sim q$$ is",
    answer: "4",
    options: [
  "Reshama is not hardworking and she is successful.",
  "Reshama is not hardworking or she is not successful.",
  "Reshama is not hardworking or she is not successful.",
  "Reshama is not hardworking and she is not successful."
  ]
  },
   {
    numb: 45,
    question: "Q45: Ram is visiting a friend. Ram knows that his friend has 2 childern and 1 of them is a boy. Assuming that a child is equally likely to be a boy or a girl, then the probability that the other child is a girl, is",
    answer: "1",
    options: [
  "$$\\frac{1}{2}$$",
  "$$\\frac{1}{3}$$",
  "$$\\frac{2}{3}$$",
  "$$\\frac{7}{10}$$"
  ]
  },
   {
    numb: 46,
    question: "Q46: If $$f(x)=px^5+qx^4+5x^3-10$$ has local maximum and minimum at x = 1 and x = 3 respectively then (p, q) =",
    answer: "2",
    options: [
  "(0, 1)",
  "(1, -5)",
  "(1, 0)",
  "(3, -5)"
  ]
  },
   {
    numb: 47,
    question: "Q47: $$\\frac{d}{dx} \\: [\\: cos\\:(3x+2) \\:] = $$",
    answer: "4",
    options: [
  "$$sin\\:(2x+3)$$",
  "$$2sin\\:(3x+2)$$",
  "$$-sin\\:(2x+3)$$",
  "$$-3sin\\:(3x+2)$$"
  ]
  },
   {
    numb: 48,
    question: "Q48: A circular plate is contracting at the uniform rate of $$$$. The rate at which the perimeter is decreasing when the radius of the circle is 10 cm long is",
    answer: "1",
    options: [
  "$$\\frac{1}{2}$$ cm/sec",
  "$$\\frac{1}{3}$$ cm/sec",
  "$$\\frac{1}{4}$$ cm/sec",
  "none of these"
  ]
  },
   {
    numb: 49,
    question: "Q49: The means of two samples of sizes 60 and 120 respectively are 35.4 and 30.9 and the standard deviations are 4 and 5. Obtain the standard deiation of the sample of size 180 obtained by combining the two samples.",
    answer: "1",
    options: [
  "5.15",
  "26.5",
  "32.4",
  "51.5"
  ]
  },
   {
    numb: 50,
    question: "Q50: A man of height 1.9 m walks directly away from a lamp of height 4.75 m on a level road at 6 m/s. The rate at which the length of his shadow is increasing is",
    answer: "4",
    options: [
  "1 m/s",
  "2 m/s",
  "3 m/s",
  "4 m/s"
  ]
  }




  // {
  //   numb: xx,
  //   question: "Qxx: ",
  //   answer: "",
  //   options: [
  // "",
  // "",
  // "",
  // ""
  // ]
  // }


  ];