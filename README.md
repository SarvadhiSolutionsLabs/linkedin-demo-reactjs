# LinkedIn Demo

### Next js use in this APP.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

### Step 1:

Create google account in google console here:

> https://console.cloud.google.com
> get usercontent client id and client secret.

### Step 2:

> create mongodb atlas account and set up your database and get database link:
> https://account.mongodb.com/

### Step 3:

> Create New Api Account for news and get api key for news:
> https://newsapi.org/

### Step 4:

> Create .env file in root directory:
> set key and value.

```bash
GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
JWT_SECRET=123321456654789987asddfjhjfg
MONGODB_URI=YOUR_MONGODB_URI
MONGODB_DB=linkedIn-clone
NEXTAUTH_URL=http://localhost:3000
NEWS_API_KEY=YOUR_NEWS_API_KEY
```

### Install node_modules

```bash
npm install
# or
yarn install
```

### Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
