const quizQuestions = [
    // Funksjoner og parametere
    {
        question: "Skriv en funksjon som returnerer produktet av to tall.",
        testCode: `multiply(3, 4)`,
        expectedResult: 12,
        requiredElements: {
            function: "multiply"
        },
        instructions: "Funksjonen må hete 'multiply', ta to parametere, og returnere produktet av disse tallene.",
        category: "Funksjoner",
        difficulty: 1
    },
    {
        question: "Skriv en funksjon som returnerer summen av en liste med tall. Bruk .reduce().",
        testCode: `sumArray([1, 2, 3, 4, 5])`,
        expectedResult: 15,
        requiredElements: {
            function: "sumArray",
            method: ".reduce("
        },
        instructions: "Funksjonen må hete 'sumArray', ta en liste av tall som parameter, og returnere summen av tallene.",
        category: "Funksjoner",
        difficulty: 2
    },
    {
        question: "Skriv en funksjon som tar en tekst og returnerer den samme teksten, men med stor bokstav først.",
        testCode: `capitalize("hello world")`,
        expectedResult: "Hello world",
        requiredElements: {
            function: "capitalize"
        },
        instructions: "Funksjonen må hete 'capitalize' og ta en tekst som parameter, returnere teksten med stor forbokstav.",
        category: "Funksjoner",
        difficulty: 1
    },
    {
        question: "Skriv en funksjon som tar tre tall og returnerer det største.",
        testCode: `findMax(10, 20, 30)`,
        expectedResult: 30,
        requiredElements: {
            function: "findMax"
        },
        instructions: "Funksjonen må hete 'findMax', ta tre tall som parametere, og returnere det største tallet.",
        category: "Funksjoner",
        difficulty: 2
    },
    {
        question: "Skriv en funksjon som tar en liste med tall og returnerer kvadratroten av hvert tall.",
        testCode: `squareRoots([4, 16, 25])`,
        expectedResult: [2, 4, 5],
        requiredElements: {
            function: "squareRoots"
        },
        instructions: "Funksjonen må hete 'squareRoots', ta en liste av tall som parameter, og returnere en ny liste med kvadratrøtter.",
        category: "Funksjoner",
        difficulty: 2
    },

    // Kontrollstrukturer
    {
        question: "Skriv en funksjon som sjekker om et tall er positivt, negativt eller null, og returnerer en passende tekst.",
        testCode: `checkNumber(0)`,
        expectedResult: "Null",
        requiredElements: {
            function: "checkNumber"
        },
        instructions: "Funksjonen må hete 'checkNumber', ta ett tall som parameter, og returnere 'Positivt', 'Negativt' eller 'Null'.",
        category: "Kontrollstrukturer",
        difficulty: 1
    },
    {
        question: "Skriv en funksjon som sjekker om et tall er partall ved hjelp av modulus operator (%).",
        testCode: `isEven(6)`,
        expectedResult: true,
        requiredElements: {
            function: "isEven",
            keyword: "%"
        },
        instructions: "Funksjonen må hete 'isEven', ta ett parameter, og returnere true hvis tallet er partall. Bruk modulus-operatoren (%).",
        category: "Kontrollstrukturer",
        difficulty: 1
    },
    {
        question: "Skriv en funksjon som returnerer 'hei' hvis en variabel er sann, og 'ha det' hvis den er falsk.",
        testCode: `greet(true)`,
        expectedResult: "hei",
        requiredElements: {
            function: "greet"
        },
        instructions: "Funksjonen må hete 'greet' og ta en logisk verdi som parameter.",
        category: "Kontrollstrukturer",
        difficulty: 1
    },
    {
        question: "Skriv en funksjon som sjekker om et tall er i et bestemt område.",
        testCode: `isInRange(5, 1, 10)`,
        expectedResult: true,
        requiredElements: {
            function: "isInRange"
        },
        instructions: "Funksjonen må hete 'isInRange', ta ett tall og to grenseverdier, og returnere true hvis tallet er i området.",
        category: "Kontrollstrukturer",
        difficulty: 2
    },

    // Løkker
    {
        question: "Skriv en funksjon som returnerer summen av tallene fra 1 til n. Bruk en for-løkke.",
        testCode: `sumTo(5)`,
        expectedResult: 15,
        requiredElements: {
            function: "sumTo",
            keyword: "for"
        },
        instructions: "Funksjonen må hete 'sumTo', ta ett tall som parameter, og returnere summen av tallene fra 1 til n. Bruk en for-løkke.",
        category: "Løkker",
        difficulty: 2
    },
    {
        question: "Skriv en funksjon som returnerer en liste med tallene fra 1 til n. Bruk en while-løkke.",
        testCode: `listTo(5)`,
        expectedResult: [1, 2, 3, 4, 5],
        requiredElements: {
            function: "listTo",
            keyword: "while"
        },
        instructions: "Funksjonen må hete 'listTo', ta ett tall som parameter, og returnere en liste med tall fra 1 til n. Bruk en while-løkke.",
        category: "Løkker",
        difficulty: 2
    },
    {
        question: "Skriv en funksjon som returnerer produktet av alle tallene i en array. Bruk .reduce().",
        testCode: `product([1, 2, 3, 4])`,
        expectedResult: 24,
        requiredElements: {
            function: "product",
            method: ".reduce("
        },
        instructions: "Funksjonen må hete 'product', ta en array med tall som parameter, og returnere produktet av tallene.",
        category: "Løkker",
        difficulty: 2
    },
    {
        question: "Skriv en funksjon som lager en tekst som består av et gitt ord gjentatt n ganger. Bruk en for-løkke.",
        testCode: `repeatWord("hei", 3)`,
        expectedResult: "hei hei hei",
        requiredElements: {
            function: "repeatWord",
            keyword: "for"
        },
        instructions: "Funksjonen må hete 'repeatWord', ta et ord og et tall som parametere, og returnere ordet gjentatt n ganger.",
        category: "Løkker",
        difficulty: 2
    },
    {
        question: "Skriv en funksjon som returnerer summen av alle tall i en liste som er større enn 10. Bruk en for-løkke.",
        testCode: `sumGreaterThanTen([1, 12, 15, 3, 7])`,
        expectedResult: 27,
        requiredElements: {
            function: "sumGreaterThanTen",
            keyword: "for"
        },
        instructions: "Funksjonen må hete 'sumGreaterThanTen', ta en liste med tall som parameter, og returnere summen av tallene som er større enn 10.",
        category: "Løkker",
        difficulty: 2
    },

    // Array-manipulasjon
    {
        question: "Skriv en funksjon som returnerer en ny liste der alle tallene i en array er multiplisert med 2. Bruk .map().",
        testCode: `doubleArray([1, 2, 3])`,
        expectedResult: [2, 4, 6],
        requiredElements: {
            function: "doubleArray",
            method: ".map("
        },
        instructions: "Funksjonen må hete 'doubleArray', ta en array med tall som parameter, og returnere en ny array der alle tallene er multiplisert med 2.",
        category: "Array-manipulasjon",
        difficulty: 2
    },
    {
        question: "Skriv en funksjon som returnerer summen av alle tallene i en array. Bruk .reduce().",
        testCode: `sumArray([10, 20, 30])`,
        expectedResult: 60,
        requiredElements: {
            function: "sumArray",
            method: ".reduce("
        },
        instructions: "Funksjonen må hete 'sumArray', ta en array med tall som parameter, og returnere summen av tallene.",
        category: "Array-manipulasjon",
        difficulty: 2
    },
    {
        question: "Skriv en funksjon som returnerer en ny liste med alle partall fra en gitt liste. Bruk .filter().",
        testCode: `filterEven([1, 2, 3, 4, 5])`,
        expectedResult: [2, 4],
        requiredElements: {
            function: "filterEven",
            method: ".filter("
        },
        instructions: "Funksjonen må hete 'filterEven', ta en liste med tall som parameter, og returnere en ny liste med partallene.",
        category: "Array-manipulasjon",
        difficulty: 2
    },
    {
        question: "Skriv en funksjon som sorterer en liste med tall i stigende rekkefølge. Bruk .sort().",
        testCode: `sortNumbers([5, 3, 8, 1])`,
        expectedResult: [1, 3, 5, 8],
        requiredElements: {
            function: "sortNumbers",
            method: ".sort("
        },
        instructions: "Funksjonen må hete 'sortNumbers', ta en liste med tall som parameter, og returnere listen sortert i stigende rekkefølge.",
        category: "Array-manipulasjon",
        difficulty: 2
    },
    {
        question: "Skriv en funksjon som returnerer det største tallet i en array. Bruk .reduce() og Math.max().",
        testCode: `findMax([5, 12, 9, 3])`,
        expectedResult: 12,
        requiredElements: {
            function: "findMax",
            method: ".reduce(",
            keyword: "Math.max"
        },
        instructions: "Funksjonen må hete 'findMax', ta en liste med tall som parameter, og returnere det største tallet.",
        category: "Array-manipulasjon",
        difficulty: 3
    },

    // String-manipulasjon
    {
        question: "Skriv en funksjon som returnerer om et ord finnes i en setning. Bruk .includes().",
        testCode: `containsWord("Hello world", "world")`,
        expectedResult: true,
        requiredElements: {
            function: "containsWord",
            method: ".includes("
        },
        instructions: "Funksjonen må hete 'containsWord', ta en setning og et ord som parametere, og returnere true hvis ordet finnes i setningen.",
        category: "String-manipulasjon",
        difficulty: 1
    },
    {
        question: "Skriv en funksjon som returnerer en tekst i store bokstaver. Bruk .toUpperCase().",
        testCode: `shout("hello")`,
        expectedResult: "HELLO",
        requiredElements: {
            function: "shout",
            method: ".toUpperCase("
        },
        instructions: "Funksjonen må hete 'shout', ta en tekst som parameter, og returnere teksten i store bokstaver.",
        category: "String-manipulasjon",
        difficulty: 1
    },
    {
        question: "Skriv en funksjon som returnerer antall vokaler i en tekst.",
        testCode: `countVowels("hello world")`,
        expectedResult: 3,
        requiredElements: {
            function: "countVowels"
        },
        instructions: "Funksjonen må hete 'countVowels', ta en tekst som parameter, og returnere antallet vokaler i teksten.",
        category: "String-manipulasjon",
        difficulty: 2
    },
    {
        question: "Skriv en funksjon som returnerer teksten snudd baklengs.",
        testCode: `reverseString("hello")`,
        expectedResult: "olleh",
        requiredElements: {
            function: "reverseString"
        },
        instructions: "Funksjonen må hete 'reverseString', ta en tekst som parameter, og returnere teksten snudd baklengs.",
        category: "String-manipulasjon",
        difficulty: 2
    },
    {
        question: "Skriv en funksjon som erstatter alle mellomrom i en tekst med bindestreker. Bruk .replaceAll().",
        testCode: `replaceSpaces("hello world")`,
        expectedResult: "hello-world",
        requiredElements: {
            function: "replaceSpaces",
            method: ".replaceAll("
        },
        instructions: "Funksjonen må hete 'replaceSpaces', ta en tekst som parameter, og returnere teksten med alle mellomrom erstattet med bindestreker.",
        category: "String-manipulasjon",
        difficulty: 2
    },

    // Objekter
    {
        question: "Skriv en funksjon som returnerer navnet på en person fra et objekt med egenskapene 'navn' og 'alder'.",
        testCode: `getPersonName({ navn: "Ola", alder: 30 })`,
        expectedResult: "Ola",
        requiredElements: {
            function: "getPersonName"
        },
        instructions: "Funksjonen må hete 'getPersonName', ta et objekt med egenskapene 'navn' og 'alder' som parameter, og returnere navnet.",
        category: "Objekter",
        difficulty: 1
    },
    {
        question: "Skriv en funksjon som sjekker om en person er myndig (over 18 år).",
        testCode: `isAdult({ navn: "Ola", alder: 20 })`,
        expectedResult: true,
        requiredElements: {
            function: "isAdult"
        },
        instructions: "Funksjonen må hete 'isAdult', ta et objekt med egenskapene 'navn' og 'alder', og returnere true hvis personen er over 18 år.",
        category: "Objekter",
        difficulty: 1
    },
    {
        question: "Skriv en funksjon som oppdaterer alderen på en person i et objekt.",
        testCode: `updateAge({ navn: "Ola", alder: 20 }, 25)`,
        expectedResult: { navn: "Ola", alder: 25 },
        requiredElements: {
            function: "updateAge"
        },
        instructions: "Funksjonen må hete 'updateAge', ta et objekt med en persons data og en ny alder som parameter, og returnere det oppdaterte objektet.",
        category: "Objekter"
    },
    {
        question: "Skriv en funksjon som returnerer alle verdiene i et objekt som en array.",
        testCode: `getObjectValues({ navn: "Ola", alder: 30 })`,
        expectedResult: ["Ola", 30],
        requiredElements: {
            function: "getObjectValues"
        },
        instructions: "Funksjonen må hete 'getObjectValues', ta et objekt som parameter, og returnere en array med verdiene i objektet.",
        category: "Objekter"
    },
    {
        question: "Skriv en funksjon som returnerer om et objekt har en spesifikk egenskap. Bruk hasOwnProperty().",
        testCode: `hasProperty({ navn: "Ola" }, "navn")`,
        expectedResult: true,
        requiredElements: {
            function: "hasProperty"
        },
        instructions: "Funksjonen må hete 'hasProperty', ta et objekt og en egenskap som parameter, og returnere true hvis objektet har den egenskapen.",
        category: "Objekter"
    },

    // Innebygde funksjoner
    {
        question: "Skriv en funksjon som returnerer første bokstav i en tekst. Bruk .charAt().",
        testCode: `firstLetter("Hello")`,
        expectedResult: "H",
        requiredElements: {
            function: "firstLetter",
            method: ".charAt("
        },
        instructions: "Funksjonen må hete 'firstLetter', ta en tekst som parameter, og returnere første bokstav.",
        category: "Innebygde funksjoner"
    },
    {
        question: "Skriv en funksjon som returnerer lengden på en tekst. Bruk .length.",
        testCode: `textLength("Hello world")`,
        expectedResult: 11,
        requiredElements: {
            function: "textLength",
            method: ".length"
        },
        instructions: "Funksjonen må hete 'textLength', ta en tekst som parameter, og returnere lengden på teksten.",
        category: "Innebygde funksjoner"
    },
    {
        question: "Skriv en funksjon som returnerer en liste som er en kopi av en annen liste. Bruk Array.from().",
        testCode: `copyArray([1, 2, 3])`,
        expectedResult: [1, 2, 3],
        requiredElements: {
            function: "copyArray",
            method: "Array.from("
        },
        instructions: "Funksjonen må hete 'copyArray', ta en liste som parameter, og returnere en kopi av listen.",
        category: "Innebygde funksjoner"
    },
    {
        question: "Skriv en funksjon som returnerer nåværende dato og tid. Bruk Date().",
        testCode: `getCurrentDate()`,
        expectedResult: new Date().toLocaleString(), // Her kan testmetoden tilpasses
        requiredElements: {
            function: "getCurrentDate"
        },
        instructions: "Funksjonen må returnere nåværende dato og tid som en string.",
        category: "Innebygde funksjoner"
    },
    {
        question: "Skriv en funksjon som returnerer et tilfeldig tall mellom 1 og 100. Bruk Math.random().",
        testCode: `getRandomNumber()`,
        expectedResult: "Et tall mellom 1 og 100", // Testtilpassing nødvendig
        requiredElements: {
            function: "getRandomNumber",
            method: "Math.random()"
        },
        instructions: "Funksjonen må hete 'getRandomNumber' og returnere et tilfeldig tall mellom 1 og 100.",
        category: "Innebygde funksjoner"
    }
];

