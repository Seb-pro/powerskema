const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/events", (req, res, next) => {
  const events = [
    {
      eventid: 1,
      title: "Hotel DB assignment",
      allDay: false,
      startTime: "2023-10-08T23:23:00Z",
      endTime: "2023-10-08T23:23:00Z",
      category: "Aflevering",
      subject: "Databaser",
      description:
        "I skal udarbejde en database løsning for en nyopstartede hotelkæde. På moodle kan i finde opgavebeskrivelsen og data filer som skal importeres i jeres database",
    },
    {
      eventid: 2,
      title: "Læs kapitel 5 i Ionic 5",
      allDay: true,
      startTime: "2023-10-23T09:10:00Z",
      endTime: "2023-10-23T09:10:00Z",
      category: "Lektier",
      subject: "Frontend/Backend",
      description:
        "I dette kapitel kommer vi indover Services & Storage. Kig også på Services & Storage, del 1 - flipped på moodle",
    },
    {
      eventid: 3,
      title: "Læs artikel C.Floyd: Prototyping",
      allDay: true,
      startTime: "2023-10-25T09:10:00Z",
      endTime: "2023-10-25T09:10:00Z",
      category: "Lektier",
      subject: "UX",
      description:
        "En gennemgang af C.Floyd teori omkring prototyping, og hvordan man opnår de bedste resultater ved tests",
    },
    {
      eventid: 4,
      title: "Fredagsbar i Bygning D",
      allDay: false,
      startTime: "2023-10-27T14:00:00Z",
      endTime: "2023-10-27T17:00:00Z",
      category: "Events",
      subject: "Fest",
      description: "Fredagsbar med Hawaii tema. Happy hour imellem kl. 15-16",
    },
    {
      eventid: 5,
      title: "Therma Group",
      allDay: false,
      startTime: "2023-10-30T16:00:00Z",
      endTime: "2023-10-30T18:00:00Z",
      category: "Events",
      subject: "Girls in IT",
      description:
        "Jeg ved ikke helt hvad det her drejer sig om, men det lyder som noget med et foredrag eller sådan noget. Jeg fylder bare lidt extra tekst på her, så vi kan teste hvorda en længere beskrivelse kommer til at se ud når vi tilføjer den i vores kode",
    },
    {
      eventid: 6,
      title: "AWS Workshop 1: DataLake",
      allDay: false,
      startTime: "2023-10-31T16:00:00Z",
      endTime: "2023-10-31T18:00:00Z",
      category: "Events",
      subject: "Workshop",
      description: "Workshop i Amazons AWS. Gratis frokost",
    },
    {
      eventid: 7,
      title: "Fredagsbar i Bygning D",
      allDay: false,
      startTime: "2023-11-03T16:00:00Z",
      endTime: "2023-11-03T18:00:00Z",
      category: "Events",
      subject: "Fest",
      description:
        "Fredagsbar med Halloween tema. Happy hour imellem kl. 15-16",
    },
    {
      eventid: 8,
      title: "AWS Workshop 2: Generative AI",
      allDay: false,
      startTime: "2023-11-07T16:00:00Z",
      endTime: "2023-11-07T18:00:00Z",
      category: "Events",
      subject: "Workshop",
      description: "Workshop i Amazons AWS. Gratis frokost",
    },
    {
      eventid: 9,
      title: "GUI & konstruktion",
      allDay: false,
      startTime: "2023-11-05T16:00:00Z",
      endTime: "2023-11-05T18:00:00Z",
      category: "Aflevering",
      subject: "UX og F/B",
      description: "Lav et projekt over noget, som mangler.",
    },
    {
      eventid: 10,
      title: "Parprogrammering; API",
      allDay: false,
      startTime: "2023-11-06T16:00:00Z",
      endTime: "2023-11-06T18:00:00Z",
      category: "Aflevering",
      subject: "Frontend/Backend",
      description: "Lav en film-streaming tjeneste",
    },
    {
      eventid: 11,
      title: "API & konstruktion",
      allDay: false,
      startTime: "2023-11-19T16:00:00Z",
      endTime: "2023-11-19T18:00:00Z",
      category: "Aflevering",
      subject: "DB og F/B",
      description: "Arbejd videre på tidligere projekt, men tilføj en API",
    },
    {
      eventid: 12,
      title: "Database Eksamensaflevering",
      allDay: false,
      startTime: "2023-12-15T16:00:00Z",
      endTime: "2023-12-15T18:00:00Z",
      category: "Aflevering",
      subject: "Database",
      description: "Aflever evaluering af faget Database",
    },
    {
      eventid: 13,
      title: "Læs kapitel 2.8 i Ionic 5",
      allDay: false,
      startTime: "2023-10-30T16:00:00Z",
      endTime: "2023-10-30T18:00:00Z",
      category: "Lektier",
      subject: "Frontend/Backend",
      description:
        "Læs kapitel i bogen, og gennemgå tilhørende slides fra Moodle",
    },
    {
      eventid: 14,
      title: "Se videoer om MapReduce",
      allDay: false,
      startTime: "2023-10-31T16:00:00Z",
      endTime: "2023-10-31T18:00:00Z",
      category: "Lektier",
      subject: "Database",
      description: "Se de tre Hadoop-videoer om MapReduce",
    },
    {
      eventid: 15,
      title: "Læs kapitel 4-5 i Designing for...",
      allDay: false,
      startTime: "2023-11-01T16:00:00Z",
      endTime: "2023-11-01T18:00:00Z",
      category: "Lektier",
      subject: "UX",
      description: "Læs de to kapitler, og tag noter til",
    },
  ];
  res.status(200).json({
    message: "Events fetched succesfully",
    events: events,
  });
  console.log(events);
});

module.exports = app;
