## Project Configuration

### Environment Variables

The following environment variables are required for the project to run correctly:

```env
PORT=5050
DATABASE_URL=
JWT_SECRET=""
JWT_COOKIE_EXPIRES_IN="3d"
DEV_MODE=DEV
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
BACKENDURL=http://localhost:5050
EMAIL=
PASSWORD=
```

### Setup Instructions
1. Copy the above environment variables into a `.env` file.
2. Fill in the required values for `DATABASE_URL`, `JWT_SECRET`, `CLOUDINARY_*`, `EMAIL`, and `PASSWORD`.
3. Ensure that the backend server is running on the specified `PORT`.
4. Run the application in development mode with `DEV_MODE=DEV`.
5. Install dependencies using pnpm:
   ```sh
   pnpm install
   ```
6. To run the code
   ```sh
   pnpm run dev
   
   ```

### Setting Up Prisma
1. Install Prisma and the required database client:
   ```sh
   pnpm install @prisma/client
   pnpm install --save-dev prisma
   ```
2. Initialize Prisma in your project:
   ```sh
   npx prisma init
   ```
   This will create a `prisma` folder with a `schema.prisma` file.
3. Configure `DATABASE_URL` in your `.env` file.
4. Define your database schema in `prisma/schema.prisma`.
5. Apply migrations:
   ```sh
   npx prisma migrate dev --name init
   ```
6. Generate Prisma Client:
   ```sh
   npx prisma generate
   ```
