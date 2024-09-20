import { createContext, useState } from "react";

export const AppStorageContext = createContext([]);

const AppStorageContextProvider = ({ children }) => {
  const nationalUniversity = {
    English: [
      {
        year: "First Year",
        subjects: [
          "English Reading Skills",
          "English Writing Skills",
          "Introduction to Poetry",
          "Introduction to Prose: Fiction and Non- Fiction",
          "Introducing Sociology or Introduction to Social Work or Introduction to Political Theory : Fiction and Non- Fiction",
          "History of the Emergence of Independent Bangladesh",
        ],
        "English Reading Skills": "4",
        "English Writing Skills": "4",
        "Introduction to Poetry": "4",
        "Introduction to Prose: Fiction and Non- Fiction": "4",
        "Introducing Sociology or Introduction to Social Work or Introduction to Political Theory : Fiction and Non- Fiction":
          "4",
        "History of the Emergence of Independent Bangladesh": "4",
      },
      {
        year: "Second Year",
        subjects: [
          "Introduction to Drama",
          "Romantic Poetry",
          "Advanced Reading and Writing",
          "Sociology of Bangladesh  Or  Bangladesh Society and Culture",
          "Political Organisation and The Political System of UK and USA",
          "Viva-Voce",
        ],
        "Introduction to Drama": "4",
        "Romantic Poetry": "4",
        "Advanced Reading and Writing": "4",
        "Sociology of Bangladesh  Or  Bangladesh Society and Culture": "4",
        "Political Organisation and The Political System of UK and USA": "4",
        "Viva-Voce": "2",
      },
      {
        year: "Third Year",
        subjects: [
          "Elizabethan and Jacobean Drama",
          "16th & 17th Century Poetry",
          "17th and 18th Century Non-Fictional Prose",
          "Restoration and Eighteenth Century Fiction",
          "Restoration and Eighteenth Century Poetry and Drama",
          "Victorian Poetry",
          "Introduction to Literary Criticism (Up to Romantic Period)",
          "Introduction to Linguistics",
        ],
        "Elizabethan and Jacobean Drama": "4",
        "16th & 17th Century Poetry": "4",
        "17th and 18th Century Non-Fictional Prose": "4",
        "Restoration and Eighteenth Century Fiction": "4",
        "Restoration and Eighteenth Century Poetry and Drama": "4",
        "Victorian Poetry": "4",
        "Introduction to Literary Criticism (Up to Romantic Period)": "4",
        "Introduction to Linguistics": "4",
      },
      {
        year: "Fourth Year",
        subjects: [
          "Nineteenth Century Novel",
          "Twentieth Century Poetry",
          "Modern Drama",
          "Twentieth Century Novel",
          "American Poetry",
          "American Literature: Fiction and Drama",
          "Classics in Translation",
          "Literary Criticism (From Victorian to Modern Age)",
          "Continental Literature Or Approaches and Methods of Language Teaching",
          "Viva-voce",
        ],
        "Nineteenth Century Novel": "4",
        "Twentieth Century Poetry": "4",
        "Modern Drama": "4",
        "Twentieth Century Novel": "4",
        "American Poetry": "4",
        "American Literature: Fiction and Drama": "4",
        "Classics in Translation": "4",
        "Literary Criticism (From Victorian to Modern Age)": "4",
        "Continental Literature Or Approaches and Methods of Language Teaching":
          "4",
        "Viva-voce": "4",
      },
    ],
    Bangla: [
      {
        year: "First Year",
        subjects: [
          "History and Culture of Bangladesh and Bengalees (From Ancients to 2000 AD)",
          "History of Bangla Language and Functional Bangla",
          "Bangla Poetry-1",
          "Bangla Novel-1",
          "Introducing Sociology or Introduction to Social Work or Introduction to Political Theory : Fiction and Non- Fiction",
          "History of the Emergence of Independent Bangladesh",
        ],
        "History and Culture of Bangladesh and Bengalees (From Ancients to 2000 AD)":
          "4",
        "History of Bangla Language and Functional Bangla": "4",
        "Bangla Poetry-1": "4",
        "Bangla Novel-1": "4",
        "Introducing Sociology or Introduction to Social Work or Introduction to Political Theory : Fiction and Non- Fiction":
          "4",
        "History of the Emergence of Independent Bangladesh": "4",
      },
      {
        year: "Second Year",
        subjects: [
          "History of Bengali Literature -1 (Ancients and Medieval)",
          "Poetry of Medieval Age",
          "Bengali Poetry -2",
          "Bengali Drama -1",
          "Sociology of Bangladesh  Or  Bangladesh Society and Culture",
          "History of the Emergence of Independent Bangladesh",
          "English (Compulsory)",
        ],
        "History of Bengali Literature -1 (Ancients and Medieval)": "4",
        "Poetry of Medieval Age": "4",
        "Bengali Poetry -2": "4",
        "Bengali Drama -1": "4",
        "Sociology of Bangladesh  Or  Bangladesh Society and Culture": "4",
        "History of the Emergence of Independent Bangladesh": "4",
        "English (Compulsory)": "Non-credit",
      },
      {
        year: "Third Year",
        subjects: [
          "History of Bangla Literature-II, First part of Modern Age (1801-1947)",
          "Poetry of Ancient and Medieval Age",
          "Bangla Short Story-I",
          "Theory of Folklor and Bangla Folk Literature",
          "Literary forms, Literary principles (Theory Rasa), Ornamentation, Rhythm",
          "Bangla Prose-I",
          "Bangla Comedy and Literature of Traveling",
          "Bangla Novel-2",
        ],
        "History of Bangla Literature-II, First part of Modern Age (1801-1947)":
          "4",
        "Poetry of Ancient and Medieval Age": "4",
        "Bangla Short Story-I": "4",
        "Theory of Folklor and Bangla Folk Literature": "4",
        "Literary forms, Literary principles (Theory Rasa), Ornamentation, Rhythm":
          "4",
        "Bangla Prose-I": "4",
        "Bangla Comedy and Literature of Traveling": "4",
        "Bangla Novel-2": "4",
      },
      {
        year: "Fourth Year",
        subjects: [
          "History of Bangla Literature-3 (Development of Bangladeshi Literature Since 1947 to 2000)",
          "Bangla Novel-3",
          "Western Literary Theores and Methods of Literary Criticism",
          "Bangla Drama-2",
          "Classical Literature (Translated)",
          "Bangla Short-Stories-2",
          "Bangla Poetry-3",
          "Phonetics and  Linguistics",
          "Literature on Bangladesh Liberation War",
          "Viva-voce",
        ],
        "History of Bangla Literature-3 (Development of Bangladeshi Literature Since 1947 to 2000)":
          "4",
        "Bangla Novel-3": "4",
        "Western Literary Theores and Methods of Literary Criticism": "4",
        "Bangla Drama-2": "4",
        "Classical Literature (Translated)": "4",
        "Bangla Short-Stories-2": "4",
        "Bangla Poetry-3": "4",
        "Phonetics and  Linguistics": "4",
        "Literature on Bangladesh Liberation War": "4",
        "Viva-voce": "4",
      },
    ],
    Accounting: [
      {
        year: "First Year",
        subjects: [
          "Principles of Accounting",
          "Principles of Finance",
          "Principles of Marketing",
          "Principles of Management",
          "Micro Economics",
          "History of the Emergence of Independent Bangladesh",
        ],
        "Principles of Accounting": "4",
        "Principles of Finance": "4",
        "Principles of Marketing": "4",
        "Principles of Management": "4",
        "Micro Economics": "4",
        "History of the Emergence of Independent Bangladesh": "4",
      },
      {
        year: "Second Year",
        subjects: [
          "Comuter and Information Technology (Accountinpg)",
          "Taxation in Bangladesh",
          "Intermediate Accounting",
          "Business Mathematics",
          "Business Statistics (In English)",
          "Macro Economics",
          "Business Communication and Report Writing (In English)",
        ],
        "Comuter and Information Technology (Accountinpg)": "4",
        "Taxation in Bangladesh": "4",
        "Intermediate Accounting": "4",
        "Business Mathematics": "4",
        "Business Statistics (In English)": "4",
        "Macro Economics": "4",
        "Business Communication and Report Writing (In English)": "4",
      },
      {
        year: "Third Year",
        subjects: [
          "Audit and Assurance",
          "Advanced Accounting-I",
          "Cost Accounting",
          "Management Accounting (In English)",
          "Business and Commercial Laws",
          "Entrepreneurship",
          "Financial Management",
          "Banking and Insurance Theories, Laws and Accounts",
        ],
        "Audit and Assurance": "4",
        "Advanced Accounting-I": "4",
        "Cost Accounting": "4",
        "Management Accounting (In English)": "4",
        "Business and Commercial Laws": "4",
        Entrepreneurship: "4",
        "Financial Management": "4",
        "Banking and Insurance Theories, Laws and Accounts": "4",
      },
      {
        year: "Fourth Year",
        subjects: [
          "Accounting Theory",
          "Advanced Auditing & Professional Ethics",
          "Accounting Information Systems",
          "Organizational Behavior",
          "Corporate Law and Practices",
          "Working Capital Management And Financial Statement Analysis",
          "Advanced Accounting-II",
          "Investment Analysis and Portfolio Management",
          "Research Methodology (In English)",
          "Viva-voce",
        ],
        "Accounting Theory": "4",
        "Advanced Auditing & Professional Ethics": "4",
        "Accounting Information Systems": "4",
        "Organizational Behavior": "4",
        "Corporate Law and Practices": "4",
        "Working Capital Management And Financial Statement Analysis": "4",
        "Advanced Accounting-II": "4",
        "Investment Analysis and Portfolio Management": "4",
        "Research Methodology (In English)": "4",
        "Viva-voce": "4",
      },
    ],
  };

  const grades = [
    "A+ 4.00",
    "A 3.75",
    "A- 3.50",
    "B+ 3.25",
    "B 3.00",
    "B- 2.75",
    "C+ 2.50",
    "C 2.25",
    "D 2.00",
    "F 0.00",
  ];
  const [isHamClicked, setHamClick] = useState(false);
  const [whichCardClicked, setCardClick] = useState("");
  const [subYearSubmit, setSubYearSubmit] = useState("");
  const [sgpa, setSgpa] = useState([]);
  const [subjectNameOnSelectChange, setSubjectNameOnSelectChange] = useState();
  const [sgpaValue, setSgpaValue] = useState({});
  const [gradeInputArr, setGradeInputArr] = useState([]);
  const [yearCgpa, setYear] = useState([]);
  const [btnAllYearClick, setBtnAllYearClick] = useState(false);
  const [allYearCgpaArr, setAllYearCgpaArr] = useState([]);

  let coursesFilteredYear;
  let creditArr = [];
  let totalCredit;

  if (subYearSubmit !== "") {
    coursesFilteredYear = coursesFilteredYear = nationalUniversity[
      subYearSubmit.subject
    ].filter((courseFilteredYear) => {
      return courseFilteredYear.year === subYearSubmit.year;
    });

    coursesFilteredYear[0].subjects.map((subject) => {
      let credits = parseInt(coursesFilteredYear[0][subject]);
      creditArr.push(credits);
    });
  }

  if (creditArr.length !== 0) {
    totalCredit = creditArr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
  }

  function handleHamClick(checkHamClick) {
    if (checkHamClick) {
      setHamClick(false);
    } else {
      setHamClick(true);
    }
  }
  function handleCardClick(text) {
    setCardClick(text);
  }

  function handleSubYearSubmit(subject, year) {
    setSubYearSubmit({ subject: subject, year: year });
  }

  function handleGradeInput(grade, credit, courseName) {
    let subCredit = parseFloat(credit);

    let gradeInputArr = [];
    gradeInputArr.push(grade);

    if (gradeInputArr.length !== 0) {
      gradeInputArr.map((gradesWithGpa) => {
        let gpaStr = gradesWithGpa.split(" ").pop();
        let gpaNum = parseFloat(gpaStr);

        let calculateSgpa = subCredit * gpaNum;

        let sgpaObj = {
          [`${courseName}`]: calculateSgpa,
          [`${courseName} credit`]: parseFloat(credit),
        };
        setSgpaValue(sgpaObj);

        setSgpa((prev) => [...prev, sgpaObj]);

        setSubjectNameOnSelectChange(courseName);
      });
    }
  }

  // if makes two object(sgpaObj, creditValue) from values from AppStorage
  let creditValue = {};
  let sgpaObj = {};
  let addSgpaValue = 0;
  let addCreditValue = 0;
  if (sgpa.length !== 0) {
    sgpa.map((value) => {
      creditValue[`${Object.keys(value)[1]}`] = value[Object.keys(value)[1]];
      sgpaObj[`${Object.keys(value)[0]}`] = value[Object.keys(value)[0]];
    });
  }

  // it makes a value arrey
  let sgpaValueArr = Object.values(sgpaObj);

  // add the value array and stores it into addSgpaValue
  if (sgpaValueArr.length !== 0) {
    addSgpaValue = sgpaValueArr.reduce((accumulator, current) => {
      return accumulator + current;
    });
  }
  // it makes a value arrey
  let creditValueArr = Object.values(creditValue);
  // add the value array and stores it into creditValueArr
  if (creditValueArr.length !== 0) {
    addCreditValue = creditValueArr.reduce((accumulator, current) => {
      return accumulator + current;
    });
  }

  //it calculates gpa
  let gpa = addSgpaValue / addCreditValue;

  // it calculates percentage
  let percentage = (100 / 4) * gpa;

  function handleYear(year) {
    setYear((prev) => [...prev, year]);
  }
  function handleYear(year) {
    setYear((prev) => [...prev, year]);
  }
  function handleBtnClickAllYear() {
    if (btnAllYearClick) {
      setBtnAllYearClick(false);
    } else {
      setBtnAllYearClick(true);
    }
  }
  function handleAllYearCgpaInput(year, value) {
    let allYearCgpaObj = { [`${year}`]: parseFloat(value.split(" ").pop()) };
    setAllYearCgpaArr((prev) => [...prev, allYearCgpaObj]);
  }

  let allYearCgpaObjValue = {};
  let addallYearCgpa;
  if (allYearCgpaArr.length !== 0) {
    allYearCgpaArr.map((value) => {
      allYearCgpaObjValue[`${Object.keys(value)[0]}`] =
        value[`${Object.keys(value)[0]}`];
    });
  }
  const allYearCgpaValuesArr = Object.values(allYearCgpaObjValue);
  if (allYearCgpaValuesArr.length !== 0) {
    addallYearCgpa = allYearCgpaValuesArr.reduce((accumulator, current) => {
      return accumulator + current;
    });
  }

  return (
    <AppStorageContext.Provider
      value={{
        isHamClicked: isHamClicked,
        whichCardClicked: whichCardClicked,
        subYearSubmit: subYearSubmit,
        nationalUniversity: nationalUniversity,
        grades: grades,
        coursesFilteredYear: coursesFilteredYear,
        totalCredit: totalCredit,
        sgpa: sgpa,
        subjectNameOnSelectChange: subjectNameOnSelectChange,
        sgpaValue: sgpaValue,
        gradeInputArr: gradeInputArr,
        yearCgpa: yearCgpa,
        gpa: gpa,
        percentage: percentage,
        btnAllYearClick: btnAllYearClick,
        addallYearCgpa: addallYearCgpa,
        allYearCgpaArr: allYearCgpaArr,
        allYearCgpaObjValue: allYearCgpaObjValue,
        handleHamClick: handleHamClick,
        handleCardClick: handleCardClick,
        handleSubYearSubmit: handleSubYearSubmit,
        handleGradeInput: handleGradeInput,
        handleYear: handleYear,
        handleBtnClickAllYear: handleBtnClickAllYear,
        handleAllYearCgpaInput: handleAllYearCgpaInput,
      }}
    >
      {children}
    </AppStorageContext.Provider>
  );
};

export default AppStorageContextProvider;
