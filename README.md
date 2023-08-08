# BroomstickGetaways

The motivation for this project came from the Website making challenge by [Programming club](https://github.com/Programming-Club-Ahmedabad-University). It is highly inspired by the Harry Potter game, [Hogwarts legacy](https://www.hogwartslegacy.com/en-us).

## How to Run

You will have to run the backend first and then add the link to it in the frontend env.

### Backend

1. Navigate to the backend directory: `cd ./backend`.
2. Install all the dependencies: `npm i`.
3. Create an `.env` file and add the respective data:
   ```
   MONGO_URL=
   ACCESS_TOKEN_SECRET=
   ADMIN_ACCESS_TOKEN_SECRET=
   ```
4. Run the backend using the command: `npx nodemon server.js`.

### Frontend

1. Navigate to the frontend directory: `cd frontend`.
2. Install all the dependencies: `npm i --legacy-peer-deps`.
3. Create the `.env` file in the frontend and add the backend's running URL into it:
   ```
   REACT_APP_DOMAIN=http://localhost:3000/
   ```
4. Run the frontend using the command: `npm start`.

## Live Website

The website is live on [Vercel](https://vercel.com). You can visit it at [https://broomstick-getaways.vercel.app/](https://broomstick-getaways.vercel.app/).
