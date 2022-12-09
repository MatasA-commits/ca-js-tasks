const students = [
  {
    name: "Panatėja",
    surname: "Sulindytė",
    faculty: "Informatikos fakultetas",
    course: 3,
    modules: [
      {
        title: "Operacinės sistemos",
        credits: 6,
        marks: [10, 7, 7, 6, 9],
      },
      {
        title: "Algoritmų analizė",
        credits: 9,
        marks: [8, 8, 6, 4, 6],
      },
      {
        title: "Tikimybės ir Statistika",
        credits: 6,
        marks: [9, 7, 8, 9, 6],
      },
      {
        title: "Inžinerinis projektas",
        credits: 3,
        marks: [10, 8, 9, 8],
      },
      {
        title: "Kompiuterių architektūra",
        credits: 6,
        marks: [6, 8, 7, 8, 8],
      },
    ],
  },
  {
    name: "Serbentautas",
    surname: "Bordiūras",
    faculty: "Informatikos fakultetas",
    course: 1,
    modules: [
      {
        title: "Matematika",
        credits: 6,
        marks: [7, 6, 9, 10, 8],
      },
      {
        title: "Duomenų struktūros",
        credits: 6,
        marks: [7, 8, 9, 4, 8],
      },
      {
        title: "Skaitmeninė logika",
        credits: 6,
        marks: [6, 8, 10, 9, 9],
      },
      {
        title: "Objektinis programavimas",
        credits: 6,
        marks: [10, 8, 9, 8, 8],
      },
      {
        title: "Fizika",
        credits: 6,
        marks: [6, 7, 8, 8, 8],
      },
    ],
  },
  {
    name: "Laptokas",
    surname: "Klavianskas",
    faculty: "Informatikos fakultetas",
    course: 1,
    modules: [
      {
        title: "Matematika",
        credits: 6,
        marks: [9, 8, 10, 9, 10],
      },
      {
        title: "Duomenų struktūros",
        credits: 6,
        marks: [9, 9, 10, 10, 8],
      },
      {
        title: "Skaitmeninė logika",
        credits: 6,
        marks: [10, 10, 10, 9, 10],
      },
      {
        title: "Objektinis programavimas",
        credits: 6,
        marks: [9, 8, 9, 10, 10],
      },
      {
        title: "Fizika",
        credits: 6,
        marks: [8, 9, 8, 10, 8],
      },
    ],
  },
  {
    name: "Skaistė",
    surname: "Kolbaitė",
    faculty: "Chemijos fakultetas",
    course: 2,
    modules: [
      {
        title: "Organinė chemija",
        credits: 6,
        marks: [9, 9, 10, 9, 8],
      },
      {
        title: "Inžinerinės medžiagos",
        credits: 3,
        marks: [10, 10, 10, 9, 9],
      },
      {
        title: "Entalpija ir Entropija",
        credits: 6,
        marks: [9, 9, 9, 9],
      },
      {
        title: "Polimerų atmainos ir produktai",
        credits: 9,
        marks: [10, 9, 8, 10, 7],
      },
      {
        title: "Pramoninė chemija",
        credits: 6,
        marks: [9, 10, 10, 10, 9],
      },
    ],
  },
  {
    name: "Cilindras",
    surname: "Katalizatorius",
    faculty: "Chemijos fakultetas",
    course: 2,
    modules: [
      {
        title: "Organinė chemija",
        credits: 6,
        marks: [6, 8, 9, 4, 8],
      },
      {
        title: "Inžinerinės medžiagos",
        credits: 3,
        marks: [9, 8, 7, 8, 10],
      },
      {
        title: "Entalpija ir Entropija",
        credits: 6,
        marks: [7, 8, 9, 10, 6],
      },
      {
        title: "Polimerų atmainos ir produktai",
        credits: 9,
        marks: [8, 9, 6, 4],
      },
      {
        title: "Pramoninė chemija",
        credits: 6,
        marks: [8, 7, 9, 5, 9],
      },
    ],
  },
  {
    name: "Grandinius",
    surname: "Varžauskas",
    faculty: "Elektros ir elektronikos fakultetas",
    course: 4,
    modules: [
      {
        title: "Matematika",
        credits: 6,
        marks: [8, 9, 9, 9, 9],
      },
      {
        title: "Elektos grandinės",
        credits: 6,
        marks: [8, 7, 9, 9, 10],
      },
      {
        title: "Elektros tinklai",
        credits: 6,
        marks: [9, 9, 8, 8, 10],
      },
      {
        title: "Braižyba",
        credits: 6,
        marks: [6, 8, 9, 8, 7],
      },
      {
        title: "Fizika",
        credits: 6,
        marks: [9, 9, 9, 10, 8],
      },
    ],
  },
];

console.groupEnd();

console.groupCollapsed(
  "1. Atspausdinti visus Informatikos fakulteto studentus"
);
{
  const informaticFacultyStudents = students.filter(
    (student) => student.faculty === "Informatikos fakultetas"
  );
  console.log(informaticFacultyStudents);
}
console.groupEnd();

console.groupCollapsed("2. Atspausdinti visus Chemijos fakulteto studentus");
{
  const chemicsFacultyStudents = students.filter(
    (student) => student.faculty === "Chemijos fakultetas"
  );
  console.log(chemicsFacultyStudents);
}
console.groupEnd();

console.groupCollapsed(
  "3. Atspausdinti visus Elektros ir elektronikos fakulteto studentus"
);
{
  const electronicsFacultyStudents = students.filter(
    (student) => student.faculty === "Elektros ir elektronikos fakultetas"
  );
  console.log(electronicsFacultyStudents);
}
console.groupEnd();

console.groupCollapsed("4. Atspausdinti tik pirmo kurso studentus");
{
  const firstCourseStudents = students.filter(
    (student) => student.course === 1
  );
  console.log(firstCourseStudents);
}
console.groupEnd();

console.groupCollapsed("5. Atspausdinti tik antro kurso studentus");
{
  students.forEach((student) => {
    if (student.course === 2) console.log(student);
  });
}
console.groupEnd();

console.groupCollapsed("6. Atspausdinti tik trečio kurso studentus");
{
  const filterThirdFacultyStudents = students.filter(
    (student) => student.course === 3
  );
  console.log(filterThirdFacultyStudents);
}
console.groupEnd();

console.groupCollapsed("7. Atspausdinti tik ketvirto kurso studentus");
{
  students.forEach((student) => {
    if (student.course === 4) console.log(student);
  });
}
console.groupEnd();

console.groupCollapsed(
  "8. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius"
);
{
  students.forEach((student) => {
    let creditSum = 0;
    const studentMarks = student.modules.reduce(
      (marksAvg, { credits, marks }) => {
        creditSum += credits;
        const markSum = marks.reduce((markSum, marks) => (markSum += marks), 0);
        const markAvg = markSum / marks.length;
        return (marksAvg += markAvg * credits);
      },
      0
    );
    const studentMarkAvg = studentMarks / creditSum;
    console.log(
      `${student.name} ${student.surname} vidurkis: ${studentMarkAvg.toFixed(
        2
      )}`
    );
  });

  /* for (let i = 0; i < students.length; i += 1) {
    const studentModule = students[i].modules;
    const creditSum = studentModule.reduce(
      (creditSum, { credits }) => (creditSum += credits),
      0
    );
    let moduleMarkCount = 0;
    let markAvg = 0;
    let markAvgTimesCredits = 0;
    for (let j = 0; j < studentModule.length; j += 1) {
      moduleMarkCount = studentModule[j].marks.length;
     const credits = studentModule[j].credits;
     const markSum = studentModule[j].marks.reduce(
        (markSum, mark) => (markSum += mark),
        0
      );
      markAvg = markSum / moduleMarkCount;
      markAvgTimesCredits += markAvg * credits;
    }
    const studentAverageScore = markAvgTimesCredits / creditSum;
    console.log(
      `${students[i].name} ${students[i].surname} ${studentAverageScore.toFixed(2)}`
    );
  } */
}
console.groupEnd();

console.groupCollapsed(
  "9. Atspausdinti visų Informatikos fakulteto studentų vidurkius"
);
{
  const informaticFacultyStudents = students.filter(
    (student) => student.faculty === "Informatikos fakultetas"
  );
  informaticFacultyStudents.forEach((student) => {
    let creditSum = 0;
    const studentMarks = student.modules.reduce(
      (marksAvg, { credits, marks }) => {
        creditSum += credits;
        const markSum = marks.reduce((markSum, marks) => (markSum += marks), 0);
        const markAvg = markSum / marks.length;
        return (marksAvg += markAvg * credits);
      },
      0
    );
    const studentMarkAvg = studentMarks / creditSum;
    console.log(
      `${student.name} ${student.surname} vidurkis: ${studentMarkAvg.toFixed(
        2
      )}`
    );
  });
}
console.groupEnd();

console.groupCollapsed(
  "10. Atspausdinti visų Chemijos fakulteto studentų vidurkius"
);
{
  const chemicsFacultyStudents = students.filter(
    (student) => student.faculty === "Chemijos fakultetas"
  );
  chemicsFacultyStudents.forEach((student) => {
    let creditSum = 0;
    const studentMarks = student.modules.reduce(
      (marksAvg, { credits, marks }) => {
        creditSum += credits;
        const markSum = marks.reduce((markSum, marks) => (markSum += marks), 0);
        const markAvg = markSum / marks.length;
        return (marksAvg += markAvg * credits);
      },
      0
    );
    const studentMarkAvg = studentMarks / creditSum;
    console.log(
      `${student.name} ${student.surname} vidurkis: ${studentMarkAvg.toFixed(
        2
      )}`
    );
  });
}
console.groupEnd();

console.groupCollapsed(
  "11. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius"
);
{
  const electronicsFacultyStudents = students.filter(
    (student) => student.faculty === "Elektros ir elektronikos fakultetas"
  );
  electronicsFacultyStudents.forEach((student) => {
    let creditSum = 0;
    const studentMarks = student.modules.reduce(
      (marksAvg, { credits, marks }) => {
        creditSum += credits;
        const markSum = marks.reduce((markSum, marks) => (markSum += marks), 0);
        const markAvg = markSum / marks.length;
        return (marksAvg += markAvg * credits);
      },
      0
    );
    const studentMarkAvg = studentMarks / creditSum;
    console.log(
      `${student.name} ${student.surname} vidurkis: ${studentMarkAvg.toFixed(
        2
      )}`
    );
  });
}
console.groupEnd();
