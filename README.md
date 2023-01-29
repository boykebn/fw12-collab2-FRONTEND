
# Our Coffee

![image](https://user-images.githubusercontent.com/86812576/210517482-e3b1b0c2-eab3-44b2-b9cf-26cccdef1e25.png)

Web application that can use to buy a coffee by Our Coffee

## Features


- Order coffee and food
- Live chat between buyer and seller
- Food delivery
- Various price and discount
- And more
## Authors

- [@PututN](https://www.github.com/PututN)
- [@boykebn](https://www.github.com/boykebn)
- [@mstkm](https://www.github.com/mstkm)
- [@mooncalyptus](https://www.github.com/mooncalyptus)
- [@Ramadhan777](https://www.github.com/Ramadhan7777)
- [@ArySuarsyah](https://www.github.com/ArySuarsyah)
- [@ilhamdanu13](https://www.github.com/ilhamdanu13)






## Built

- [Frontend](https://github.com/rioprayoga23/fw12-frontend-collab)
1. [Next js](https://nextjs.org/)
2. [Tailwind](https://tailwindcss.com/)


- [Backend](https://github.com/rioprayoga23/fw12-backend-collab)
1. [Node js](https://nodejs.org/en/)
2. [Express js](https://expressjs.com/en/starter/installing.html)
## Requirements

1. [Node js](https://nodejs.org/en/)
2. Backenda [API ](fw12-backend-collab.vercel.app)
3. NPM Module
## Documentation

[Documentation](https://linktodocumentation)


## Run Locally

Clone the project

```bash
  git clone https://github.com/boykebn/fw12-collab2-FRONTEND.git
```

Go to the project directory

```bash
  cd project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Acknowledgements

- [Redux](https://redux.js.org/)
- [Axios](https://axios-http.com/docs/intro)
- argon
- [jwt token](https://www.npmjs.com/package/jsonwebtoken)

## What's in Backend
### CRUD Database for:
- Status
- Size 
- Users
- Delivery Time
- Product Category
- Category
- Product Size
- History
- Products
- Payment Method
- Promo
- Order
- Chat

## Endpoint


|                              URL                         | Method | Description |
| -------------------------------------------------------- |:------:| --------------------------------------------:|
| /auth/login                                              | POST  |                                    LOGIN USER |
| /auth/register                                           | POST  |                                 REGISTER USER |
| /auth/forgotPassword                                     | POST  |                          FORGOT PASSWORD USER |
| /auth/resetPassword                                      | POST  |                           RESET PASSWORD USER |
| /profile                                                 | GET   |                                   GET PROFILE |
| /profile/:id                                             | PATCH |                                 UPDATE PROFIL |
| /promo/add                                               | POST  |                                     ADD PROMO |
| /promo/edit/:id                                          | PATCH |                                  UPDATE PROMO |
| /product/add                                             | POST  |                                   ADD PRODUCT |
| /product/edit/:id                                        | PACTH |                                UPDATE PRODUCT |
| /productSize/:id                                         | DELETE|                                DELETE PRODUCT |
| /product/:id                                               | DELETE|                                DELETE PRODUCT |
| /product                                                 | GET   |                               GET ALL PRODUCT |
| /product/category/:id                                   | GET   |                          GET PRODUCT CATEGORY |
| /product/:id                                             | GET   |                            GET PRODUCT DETAIL |
| /history/delete/:id                                      | DELETE|                           DELETE HISTORY USER |
| /transaction                                             | POST  |                            CREATE TRANSACTION |
| /transaction/process                                     |  GET  |                       GET TRANSACTION PROCESS |
| /transaction/pay/:id                                       | PATCH|                       EDIT PAYMENT TRANSACTION |
| /transaction/confirm/:id              | PATCH |                  UPDATE TRANSACTION (CONFIRM) |
| /transaction/confirm                                     | GET   |                       GET TRANSACTOPN CONFIRM |
| /history                                                 | GET  |                        GET HISTORY TRANSACTION |
