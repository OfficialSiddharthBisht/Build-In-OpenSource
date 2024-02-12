# API Endpoints

## 1. User

- **POST** /user/signup [Signup]
- **POST** /user/login [Login]
- **POST** /user/verify [OTP Verification]
- **POST,PUT,GET** /user/profile [User Profile]
- **POST,PUT,GET** /user/cart [User Cart]
- **POST,PUT,GET** /user/account [Add Payment]

## 2. Product Services

- **View Products** /product/:id [View Products]
- **POST,PUT,GET** /product/ [Create Product]
- **POST,PUT,GET** /product/:id [Update/Edit Delete Products]
- **POST,PUT,GET** /product/category/:id [Create Update Category]
- **POST,PUT,GET,DELETE** /product/advertise/:id [Product Advertise]
- **POST,PUT,GET** /product/deals/:id [Create Update Deals]

## 3. Transaction Services

- **POST,PUT,GET** /order/:id [Create Order/View Order]
- **PATCH** /order/cancel/:id [Cancel Order]
- **POST,PUT,GET** /order/return/:id [Return Order]
- **POST,PUT,GET** /order/track/:id [Track Order]
- **POST** /order/payment/:id [Make Payment]
- **POST,GET** /order/shipping/:id [Shipping Order]

4. Notification Services

- **POST,PUT,GET** /notification/:id [Create Update Notification]
- **POST,PUT,GET** /notification/:id [View Notification]

5. Chat Services

- **POST,PUT,GET** /chat/:id [Create Update Chat]
- **POST,PUT,GET** /chat/:id [View Chat]

etc...
