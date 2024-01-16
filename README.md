# Fetch Config - Full Stack Project

## Frontend (ReactJS)

### Overview

This ReactJS application interacts with a backend service to fetch and update configurations.

### Features

1. **Fetch Config**
   - Enter the Config ID (configid) in the input field.
   - Click the "Submit" button to fetch data from the backend API.

2. **Output**
   - The fetched data will be displayed in the div below.

3. **Update Remark (Task 2)**
   - TextBox, TextArea, and Submit button.
   - Enter the configld to update in the TextBox.
   - Enter the text for the remark in the TextArea.
   - Click the "Update Remark" button to submit the changes.
4. **Delete Remark (Extra By Me Task 3)**
  - Enter the Config ID (configid) in the input field.
   - Click the "Submit" button to delete data from the backend API in mongoDB.

## Project Live
Frontend: (https://coderower-frontend.vercel.app/)
Backend : https://vercel.com/mdashifreza/coderower-backend
### Usage

#### Fetch Config

1. Input the Config ID in the "Config To Load (configid)" field.
2. Click the "Submit" button.
3. The fetched data will be displayed in the output div.

#### Update Remark (Task 2)

1. Navigate to the designated page.
2. Enter the configld to update in the TextBox.
3. Enter the text for the remark in the TextArea.
4. Click the "Update Remark" button to submit the changes.

### API Endpoint

- The API endpoint for fetching configurations is: [http://localhost:8080/api/configurations/{id}](http://localhost:8080/api/configurations/{id})
- Replace `{id}` with the actual configid.

### Example

#### Fetch Config

Config To Load (configid): qwertyuiop

Submit

Result: [http://localhost:8080/api/configurations/qwertyuiop](http://localhost:8080/api/configurations/qwertyuiop)

#### Update Remark (Task 2)

- Enter Config ID: [Your Config ID]
- Enter Remark: [Your Remark]
- Click "Update Remark" to submit the changes.

---

## Backend Service

### Overview

This backend service provides APIs for the Fetch Config feature, supporting configuration retrieval and updating remarks.

### Features

1. **Fetch Configurations**
   - Endpoint: `GET /api/configurations/{id}`
   - Retrieves configuration data based on the provided ID.

2. **Update Remark (Task 2)**
   - Endpoint: `POST /api/configurations/update-remark`
   - Allows updating remarks for a specific configuration.
   - Requires config ID and new remark in the request body.

### Getting Started

1. Clone this repository.

```bash
git clone [backend-repo-url]
