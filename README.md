# Cybernatus Backend

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cybernauts_backend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd cybernauts_backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and add your environment variables:
   ```bash
   cp .env.example .env
   ```
5. Build the project:
   ```bash
   npm run build
   ```
6. Start the development server:
   ```bash
   npm run dev
   ```

## Endpoints

- **POST /api/users**

  - Creates a new user.
  - Request body:
    ```json
    {
      "username": "string",
      "age": "number",
      "hobbies": "array"
    }
    ```

- **GET /api/users/:id**

  - Retrieves a user by ID.

- **PUT /api/users/:id**

  - Updates a user by ID.
  - Request body:
    ```json
    {
      "username": "string",
      "age": "number",
      "hobbies": "array"
    }
    ```

- **DELETE /api/users/:id**
  - Deletes a user by ID.