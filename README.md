# ParkFlex


- This project aims to develop a comprehensive online marketplace for parking spots, addressing the common urban challenge of finding convenient and affordable parking. It seeks to bridge the gap between parking spot owners who have underutilized space and drivers facing difficulties in locating parking, especially in densely populated areas. By leveraging technology, the platform aspires to optimize parking space usage, reduce urban congestion, and offer a convenient solution for both spot owners and seekers.

# Deployed Link: https://park-flex.netlify.app

- Features:

    1.	Authentication
        * Sign Up
        * Log In
        * Forget Password
        * Logout
        * Profile Management
    2.	Explore Listings 
        * ⁠List all parking spots available
        * ⁠Filter parking spots based on parking type, user location and radius
        * View individual parking spot in details 
        * Get estimate about user expected parking spot booking
        * Availability check to reduce conflicting booking
    3.	Manage Listing 
        * Create Listing
        * Edit Listing
        * View Listing
        * Delete Listing
    4.	Rating and Reviews
        * View all reviews and ratings of a listing.
        * Add a new review and rating of a listing.
    5.	Wallet Management
        * Add Money to Wallet.
        * Withdraw Money from Wallet.  
        * Add Transaction Entries for Adding Money, Withdraw Money, Booking, and Earnings.
        * Filtering Transaction Based on its types.
    6.	Booking Management
        * Make a Parking Spot Reservation
        * View an Existing Booking
        * Modify an Existing Booking
        * Cancel a Booking

### **How to run application:**

The first step is to clone the Group project repo in your machine using the below command. Run the below command at the destination in cmd where you want to clone the repository.
```
git clone https://github.com/Ketul3012/ParkFlex.git
```

Next, Change the directory to the client side of the project using:

```
cd .\ParkFlex\frontend
```

Next step is, run the below command to instal all the packages and dependencies that is required to run the Assignment.

```
npm install
```

You are all set and now just run the client side using following command.

```
npm start
```

Now, To run the server side of the Assignment, open the cmd with the path of the project's repo.

Next, Change the directory to the server side of the project using:

```
cd .\ParkFlex\api
```

Next step is, run the below command to instal all the packages and dependencies that is required to run the Assignment.

```
npm install
```

You are all set and now just run the server side using following command.

```
npm start
```

### **Environment Variables:**

This project requires the following environment variables to be set:

```
- JWT_SECRET = <PASTE JWT SECRET>
- GMAIL_EMAIL = <PASTE EMAIL ADDRESS>
- GMAIL_PASSWORD = <PASTE GMAIL PASSWORD>
- STRIPE_SECRET_KEY = <PASTE STRIPE SECRET KEY>
- MONGODB_USERNAME = <MONGO ATLAS USERNAME>
- MONGODB_PASSWORD = <MONGO ATLAS PASSWORD>
- MONGODB_HOSTNAME = <MONGO HOST NAME>
- MONGODB_DBNAME = <MONGO DATABASE NAME>

```
