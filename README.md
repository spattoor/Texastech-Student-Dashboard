# Texas Tech Student Dashboard

A React and TypeScript student-information interface with an ID-entry screen, class details, campus information, and navigation tools.

![Texas Tech Student Dashboard ID-entry screen, captured from the main-branch local build](docs/dashboard.jpg)

*Screenshot: the existing main-branch application running locally. No student record was opened for this capture.*

## Explore the code

- [Main interface](student-info-website/src/pages/Home.tsx)
- [Student details](student-info-website/src/pages/StudentDetails.tsx)
- [Reusable components](student-info-website/src/components)

This is an independent portfolio project, not an official Texas Tech University service. The current repository uses hard-coded demonstration records; it does not establish a live university-system integration. The chatbot component does not establish a working AI service.

## Run locally

```bash
git clone https://github.com/spattoor/Texastech-Student-Dashboard.git
cd Texastech-Student-Dashboard/student-info-website
npm ci --ignore-scripts
npm start
```

Open the local URL shown by the development server. To build the interface:

```bash
npm run build
```

The existing main branch compiled successfully for this screenshot. A public Dashboard deployment has not been verified; the image is a local preview. Do not enter real student credentials or identifiers into the demo.
