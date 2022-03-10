# Let's Connect

Major aspects of this app is nothing much, this app is just letting the user save their data to their choice, either in database or in the local file called db.json present in "./server/db.json" in proper JSON raw form. You can parse it either, its no big deal.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `node server.js` from the directory server

Launches the server in the interactive window and initaiates connection with my MongoDB cluster.

Open [http://localhost:3001](http://localhost:3001) to view it in your browser. It wont show you anything but to let you know this server runs on port 3001

# Implementation

### Run `npm install` from this directory and from ./server directory.

Let them install the packages properly on the both front-end and back-end side. Once it is done, means it is ready to run. Now we we can proceed to next command which would be `npm run dev` from the base directory.

### `npm run dev`

Run two scripts at a time, launch the client and server both at a time.
This script will open a tab in your browser at http://localhost:3000 and simultaneously it will open a web server at http://localhost:3001 which eill respond to requests coming from the client side.


### Data in JSON file will look like this 

`{
    "data": [
        {
            "name": "Jainish Bharti",
            "email": "jainishbharti@gmail.com",
            "phone": 9102512425,
            "address": "Sant Kabir Nagar, Purnea- 854303(Bihar), India",
            "account_details": {
                "holder_name": "Jainish Bharti",
                "bank_type": "SBI",
                "account_number": 35542256582,
                "IFSC": "SBIN052828",
                "account_type": "savings"
            },
            "_id": "6229c63a16221667c9a5ae3d"
        }
    ]
}`

Every time you save something to local storage, it will reflect here immediately.

###Thank You
