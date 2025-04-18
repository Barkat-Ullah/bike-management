# Bike Servicing Management API


### 🎯 **Objective**

Develop a backend API for a **Bike Servicing Management System** that allows a bike servicing center to manage `customers`, `bikes`, and `service` records. The API will support CRUD operations for bikes, customers, and services, and include special endpoints for assigning and completing servicing jobs.

* * *

### 🛠 **Technologies **

*   **Node.js**
*   **Express.js**
*   **TypeScript**
*   **Prisma ORM**
*   **PostgreSQL**

* * *

## ⚙️ Installation and Setup

Clone the project

```bash
  git clone :https://github.com/Barkat-Ullah/bike-management.git
```

Go to the project directory

```bash
  cd bike-management
```

Install dependencies

```bash
  yarn install
```
###### 🌍 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

- `DATABASE_URL: "Enter your database URL" `
- `PORT : 5000`
- `JWT_ACCESS_SECRET: "Enter your jwt-secrect URL" `


Start the server

```bash
 yarn dev
```

---


### 🧱 **Database Schema**

Use Prisma with UUIDs for all primary keys.

#### 1\. **Customer Table**

| Field | Type | Description |
| ---| ---| --- |
| `customerId` | UUID | Unique identifier for the customer |
| `name` | String | Full name of the customer |
| `email` | String | Unique email |
| `phone` | String | Contact number |
| `createdAt` | DateTime | Auto timestamp when created |

* * *

#### 2\. **Bike Table**

| Field | Type | Description |
| ---| ---| --- |
| `bikeId` | UUID | Unique identifier for each bike |
| `brand` | String | Brand of the bike (e.g., Honda, Yamaha) |
| `model` | String | Model name |
| `year` | Int | Manufacturing year |
| `customerId` | UUID | Foreign key referencing Customer |

* * *

#### 3\. **ServiceRecord Table**

| Field | Type | Description |
| ---| ---| --- |
| `serviceId` | UUID | Unique identifier for the service record |
| `bikeId` | UUID | FK to Bike |
| `serviceDate` | DateTime | Date the service started |
| `completionDate` | DateTime | Nullable. Date the service completed |
| `description` | String | Details of service (e.g., oil change) |
| `status` | String | Status: “pending”, “in-progress”, “done” |


### 📦 **API Features & Endpoints**

* * *

#### 1\. **Customer Management**

* * *

### ✅ **1\.** **`POST /api/customers`** **- Create a new customer**

#### 📥 Request Body

```perl
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "123-456-7890"
}
```

#### 📤 Response Example (201 Created)

```json
{
  "success": true,
  "message": "Customer created successfully",
  "data": {
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "123-456-7890",
    "createdAt": "2025-04-11T12:34:56.789Z"
  }
}
```

* * *

### ✅ **2\.** **`GET /api/customers`** **- Get all customers**

#### 📤 Response Example (200 Ok)

```perl
{
  "success": true,
  "message": "Customers fetched successfully",
  "data": [
    {
      "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "123-456-7890",
      "createdAt": "2025-04-11T12:34:56.789Z"
    },
  ]
}
```

* * *

### ✅ **3\.** **`GET /api/customers/87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194`** **- Get a specific customer by ID**

#### 📤 Response Example (200 Ok)

```json
{
  "success": true,
  "message": "Customer fetched successfully",
  "data": {
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "123-456-7890",
    "createdAt": "2025-04-11T12:34:56.789Z"
  }
}
```

* * *

### ✅ **4\.** **`PUT /api/customers/87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194`** **- Update customer details**

#### 📥 Request Body (any of the fields can be updated)

```json
{
  "name": "Johnathan Doe",
  "phone": "555-123-9999"
}
```

#### 📤 Response Example (200 Ok)

```json
{
  "success": true,
  "message": "Customer updated successfully",
  "data": {
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
    "name": "Johnathan Doe",
    "email": "john.doe@example.com",
    "phone": "555-123-9999",
    "createdAt": "2025-04-11T12:34:56.789Z"
  }
}
```

####   

* * *

### ✅ **5\.** **`DELETE /api/customers/87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194`** **- Delete a customer**

#### 📤 Response Example (200 Ok)

```json
{
  "success": true,
  "message": "Customer deleted successfully"
}
```


#### 2\. **Bike Management**

* * *

### ✅ **1\.** **`POST /api/bikes`** **- Add a new bike**

#### 📥 Request Body (201 Created)

```json
{
  "brand": "Yamaha",
  "model": "R15",
  "year": 2022,
  "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
}
```

#### 📤 Response Example (200 Ok)

```json
{
  "success": true,
  "message": "Bike added successfully",
  "data": {
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "brand": "Yamaha",
    "model": "R15",
    "year": 2022,
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
  }
}
```

* * *

### ✅ **2\.** **`GET /api/bikes`** **- Get all bikes**

#### 📤 Response Example (200 Ok)

```json
{
  "success": true,
  "message": "Bikes fetched successfully",
  "data": [
    {
      "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
      "brand": "Yamaha",
      "model": "R15",
      "year": 2022,
      "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
    }
  ]
}
```

* * *

### ✅ **3\.** **`GET /api/bikes/f3f1b192-3e62-402e-9bd3-d351a5a10e92`** **- Get a specific bike by ID**

#### 📤 Response Example (200 Ok)

```json
{
  "success": true,
  "message": "Bike fetched successfully",
  "data": {
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "brand": "Yamaha",
    "model": "R15",
    "year": 2022,
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
  }
}
```


#### 3\. **Service Management**

* * *

### ✅ **1\.** **`POST /api/services`** **– Create a service record**

#### 📥 Request Body

```json
{
  "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
  "serviceDate": "2025-04-11T10:00:00.000Z",
  "description": "Oil change",
  "status": "pending"
}
```

#### 📤 Response Example (201 Created)

```json
{
  "success": true,
  "message": "Service record created successfully",
  "data": {
    "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "serviceDate": "2025-04-11T10:00:00.000Z",
    "completionDate": null,
    "description": "Oil change",
    "status": "pending"
  }
}
```

* * *

### ✅ **2\.** **`GET /api/services`** **– Get all service records**

#### 📤 Response Example (200 Ok)

```json
{
  "success": true,
  "message": "Service records fetched successfully",
  "data": [
    {
      "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
      "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
      "serviceDate": "2025-04-11T10:00:00.000Z",
      "completionDate": null,
      "description": "Oil change",
      "status": "pending"
    },
    {...}
  ]
}
```

* * *

### ✅ **3\.** **`GET /api/services/a1e4a182-c80d-4ff7-9a3d-873929f9d0e6`** **– Get a specific service record**

#### 📤 Response Example (200 Ok)

```json
{
  "success": true,
  "message": "Service record fetched successfully",
  "data": {
    "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "serviceDate": "2025-04-11T10:00:00.000Z",
    "completionDate": null,
    "description": "Oil change",
    "status": "pending"
  }
}
```

* * *

### ✅ **4\.** **`PUT /api/services/a1e4a182-c80d-4ff7-9a3d-873929f9d0e6/complete`** **– Mark a service as completed**

```json
{
  "completionDate": "2025-04-11T15:30:00.000Z"
}
```

#### 📤 Response Example (200 Ok)

```json
{
  "success": true,
  "message": "Service marked as completed",
  "data": {
    "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "serviceDate": "2025-04-11T10:00:00.000Z",
    "completionDate": "2025-04-11T15:30:00.000Z",
    "description": "Oil change",
    "status": "done"
  }
}
```


#### ⏳ **Pending or Overdue Services**

### ✅ **GET** **`/api/services/status`** **– Pending or Overdue Services (older than 7 days)**

This route returns all services that:

### 📤 Response Example (200 Ok)

```json
{
  "success": true,
  "message": "Overdue or pending services fetched successfully",
  "data": [
    {
      "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
      "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
      "serviceDate": "2025-04-01T10:00:00.000Z",
      "completionDate": null,
      "description": "Oil change",
      "status": "pending"
    },
    {
      "serviceId": "c9bce2ff-44a2-4b3f-bef7-04f5e35d21d2",
      "bikeId": "a3d2d3cb-f72f-4b63-a7d6-20e57bc30ef1",
      "serviceDate": "2025-04-02T12:00:00.000Z",
      "completionDate": null,
      "description": "Engine tuning",
      "status": "in-progress"
    }
  ]
}
```
## 🌟 Contact  

**Author**: Barkat Ullah Rakib  
- **GitHub**: [@Barkat-ullah](https://github.com/Barkat-Ullah)  
- **Email**: [barkatullah585464@gmail.com](barkatullah585464@gmail.com)  


 
