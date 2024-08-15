<h1 align="center">CarePulse</h1>

<div align="center">
A healthcare platform that streamlines patient registration, appointment scheduling, and medical records.
</div>


## Installation

**Open your terminal or command prompt and navigate to the directory where you want to clone the repository**

```bash
cd path/to/your/directory
```

Use the `git clone` command followed by the URL of the repository:

```bash
cd path/to/your/directory
```

**Install the dependencies**

```bash
npm install
# or
bun install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=111111
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
bun run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- Next.js
- Appwrite
- Typescript
- TailwindCSS
- Shadcn UI
- Twilio

## Deployment

This app is deployed on [Vercel Platform](https://vercel.com). It is the easiest way to deploy your Next.js app and it's from the creators of Next.js.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Author

[Samuel Pokam](https://github.com/RinKhimera)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⭐ Like what I'm doing? Give it a star
