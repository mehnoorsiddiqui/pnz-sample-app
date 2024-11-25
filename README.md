﻿# pnz-sample-app
This guide will walk you through setting up a sample Next js application that fetches account statement transactions for an account 

---

### Prerequisites

1. **Node.js and npm installed**  
   Make sure you have [Node.js](https://nodejs.org/) installed, which comes with npm (Node Package Manager).
   
2. **Git installed**  
   Ensure you have [Git](https://git-scm.com/) installed to clone the repository.

3. **Account Credentials**  
   Obtain your credentials from the [Payments NZ API Centre Sandbox Developer Portal](https://developer.apicentre.middleware.co.nz/).

---

### 1. Clone the Repository

Run the following command to clone the repository from GitHub:

```bash
git clone https://github.com/mehnoorsiddiqui/pnz-sample-app
cd pnz-sample-app
```

---

### 2. Install Dependencies
Run the provided bash script to install all the necessary dependencies for the project:

```bash
bash install_dependencies.sh
```
Ensure that `install_dependencies.sh` is in the root of the cloned repository. This script will:

- Install dependencies for the **Account and Transaction API**: This step includes installing the SDK, which is also available for download from this developer portal.
- Install dependencies for **Account Information Authentication**
- Install dependencies for the **Server**
- Install dependencies for the **Client**

### 3. Update Environment Variables

Navigate to the `server` folder:

```bash
cd server
```

Create a `.env` file if it doesn't exist:

```bash
touch .env
```

Copy the following variables from `.env.local` and update them with your PNZ credentials:

```env
PNZ_CLIENT_ID=YOUR_PNZ_CLIENT_ID
PNZ_KID=YOUR_PNZ_KID
REDIRECT_URI=YOUR_REDIRECT_URI
HTTP_PORT=YOUR_HTTP_PORT
PNZ_PRIVATE_KEY=YOUR_PNZ_PRIVATE_KEY
```

Make sure to replace `YOUR_PNZ_CLIENT_ID`, `YOUR_PNZ_KID`, `YOUR_REDIRECT_URI`, `YOUR_HTTP_PORT`, and `YOUR_PNZ_PRIVATE_KEY` with the values provided by the Payments NZ portal.

---

### 4. Start the Server

Start the server:

```bash
npm start
```

---

### 5. Run the Client

Navigate to the `client` folder:

```bash
cd ../client
```

Start the client application:

```bash
npm run dev
```

---

### 6. Access the Application

Once both the server and client are running:

- Open your browser and navigate to the client application's URL (typically `http://localhost:3000` or the one specified in your setup).

---

### Troubleshooting

- If you encounter issues with missing dependencies or authentication errors, ensure that your environment variables are correctly set up and that you've installed all the required dependencies.

- If the application doesn't start, try checking the server and client logs for errors.
