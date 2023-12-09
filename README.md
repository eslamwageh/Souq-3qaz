# SOUQ 3QAZ (API DOC)

## All Apis starts with http://127.0.0.1:3000
# =======================================

## Get All Products
### Api Route 
`
Endpoint : 'GET /api/v1/product'
`
`
Authorization: No Auth Needed
`
### Request Example:
```json
No Body Needed
```
### Response Example:
```json
{
    "status": "success",
    "count": 1,
    "products": [
        {
            "id": 7,
            "image": "https://firebasestorage.googleapis.com/v0/b/testing-a311d.appspot.com/o/ff7smemnwvy51-removebg-preview%20(1).png?alt=media&token=46f9df3c-6efd-46dc-9317-6ccabb29d425",
            "name": "iphone",
            "prerelease": false,
            "price": 1500,
            "description": "this is nice phone",
            "quantity": 3,
            "sellerid": 63,
            "putdate": "2023-12-07T20:05:35.000Z",
            "category": "Electronic",
            "storedin": 1
        }
    ]
}
```


## Get Product By Id
### Api Route 
`
Endpoint : 'GET /api/v1/product/{id}'
Authorization: No Auth Needed
`
`
Authorization: No Auth Needed
`
### Request Example:
``
Endpoint Ex: 'GET /api/v1/product/7'
``
```json
No Body Needed
```
### Response Example:
```json
{
    "status": "success",
    "products": [
        {
            "id": 7,
            "image": "https://firebasestorage.googleapis.com/v0/b/testing-a311d.appspot.com/o/ff7smemnwvy51-removebg-preview%20(1).png?alt=media&token=46f9df3c-6efd-46dc-9317-6ccabb29d425",
            "name": "iphone",
            "prerelease": false,
            "price": 1500,
            "description": "this is nice phone",
            "quantity": 3,
            "sellerid": 63,
            "putdate": "2023-12-07T20:05:35.000Z",
            "category": "Electronic",
            "storedin": 1
        }
    ]
}
```
### OR
```json
{
    "status": "fail",
    "message": "no product found by this id"
}
```
