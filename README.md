# BroomstickGetaways
- The motivation for this project came from the Website making challenge by [Programming club](https://github.com/Programming-Club-Ahmedabad-University).
- It is highly inspired from the harry potter game namely [Hogwarts legacy](https://www.hogwartslegacy.com/en-us).
## how to run
- You will have to run the backend first and then add the link to it in the frontend env.
- `cd ./backend` then run `npm i` to install all the dependencies.
- create an `.env` file and add the respective data
```
MONGO_URL=
ACCESS_TOKEN_SECRET=
ADMIN_ACCESS_TOKEN_SECRET=
```
- similarly get into frontend `cd frontend` then run `npm i --legacy-peer-deps`.
- create the `.env` file in the frontend and add the backend's running url into it.
```
REACT_APP_DOMAIN=http://localhost:3000/
```
## The website is live on [vercel](https://vercel.com)
site link: https://broomstick-getaways.vercel.app/
