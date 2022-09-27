# HRMAA-Week-4
This project allows use to store users data:
<li>First Name (fname)</li> 
<li>Last Name (lname)</li>
<li>Email (email)</li>
<li>Phone Number (phone)</li>
in <b>MongoDB</b> on your <u>local storage.</u><br><br>

#### NOTE
##### You will need Mongodb installed on your system
##### Database name: week4
##### Collection: addresses
<br><br>

## How to run the program?
- Open terminal and type
```
npm start
```
This will run the server on PORT: <b>`3000`</b><br><br><br>

## What can we do now?
`POST` users data to database<br>
Enter  <b>`http://localhost:3000/`</b>,  post request and add data (`JSON`):<br>
```
{
    "fname": "<First Name>",
    "lname": "<Last Name",
    "email": "<Email ID>",
    "phone": <Phone Number>
}
```
This will add the users data to mongodb<br><br>

`GET` user by _id<br>
Enter <b>`http://localhost:3000/:id`</b><br>

##### id: unique id that mongodb created for the given user<br><br>

`GET` all user<br>
Enter <b>`http://localhost:3000/getAll`</b><br><br>

`GET` user by First Name (fname)<br>
Enter <b>`http://localhost:3000?fname=<fname>`</b><br>