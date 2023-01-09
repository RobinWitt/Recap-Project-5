# New Project

This project was created from the neue fische next template.

## Development

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run dev` to start the development server
- `npm run build` to create a production build
- `npm run start` to start the production build
- `npm run test` to run the tests in watch mode (if available)

> 💡 This project requires a bundler. You can use `npm run dev` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.

User Story 1: List of all Art Pieces
Value Proposition

As an art enthusiast

I want to see a list of all art pieces

so that I can get an overview of all art pieces.
Acceptance Criteria

- [x] All art pieces are displayed as a list 🖼️
- [x] Each art piece's image is displayed 🖼️
- [x] Each art piece's title is displayed 🖼️
- [x] Each art piece's artist is displayed 🖼️

Tasks

- [x] Install the package swr
- [x] Fetch all art pieces with useSWR in pages/index.js
- [x] Create the components folder
- [x] Create the component ArtPieces to render a list
- [?] ArtPieces props: pieces --> prop: children
- [x] Create the component ArtPiecePreview
- [x] ArtPiecePreview props: image, title, artist
- [] All acceptance criteria marked with 🖼️ are covered by component testing

User Story 2: Spotlight Piece
Value Proposition

As an art enthusiast

I want to see a spotlight piece

so that I can get inspirational highlights.
Acceptance Criteria

- [x] One art piece is picked at random to show as a spotlight piece
- [x] The art piece image is displayed 🖼️
- [x] The art piece artist is displayed 🖼️

Tasks

- [x] Write function to pick one art piece at random
- [x] Create the component Spotlight
- [?] Spotlight props: image, artist --> prop: data
- [ ] All acceptance criteria marked with 🖼️ are covered by component testing

User Story 3: Separate Pages and Navigation Bar
Value Proposition

As an art enthusiast

I want to be able to switch between the spotlight and list view

so that I can navigate the app easier.
Acceptance Criteria

    A navigation link labeled "Spotlight" is displayed 🖼️
    A navigation link labeled "Pieces" is displayed 🖼️
    Clicking "Spotlight" shows the SpotlightPage
    Clicking "Pieces" shows the ArtPiecesPage

Tasks

    Move the data fetching logic to pages/_app.js
    Find a solution for global state handling to have the art pieces available on all pages
    Adapt the page pages/index.js: rename the function to SpotlightPage and have it render only the Spotlight component
    Create the page pages/art-pieces/index.js that renders the ArtPieces component
    Create the component Navigation that renders all navigation links
    Create the component Layout that renders the Navigation component (see this as reference)
    Apply the Layout component in pages/_app.js
    All acceptance criteria marked with 🖼️ are covered by component testing

User Story 4: Art Piece Details Page
Value Proposition

As an art enthusiast

I want to be able to see the full art piece with detail information

so that I can learn everything about the piece.
Acceptance Criteria

    Clicking an art piece from the list shows the detail page
    The art piece image is displayed 🖼️
    The art piece title is displayed 🖼️
    The art piece artist is displayed 🖼️
    The art piece year is displayed 🖼️
    The art piece genre is displayed 🖼️
    A back-button is displayed 🖼️
    Clicking the back-button shows the list view

Tasks

    Create the component ArtPieceDetails
    ArtPieceDetails props: image, title, artist, year, genre
    Create the page pages/art-pieces/[slug]/index.js that renders ArtPieceDetails
    Read the query parameter slug from next/router
    Use the slug to find the art piece to display
    All acceptance criteria marked with 🖼️ are covered by component testing
