## Setup

```sh
docker build -t zeta:zeta .
```
## Description
This function deals with :
    #### Creating a virtual wallet
    ####Pushing a connection on the devnet through the .env file
    ####Getting the following data : 
    #####Expiration, Interest Rate, and in each market : [Index,Kind,Strike,Market price,Delta,IV,VEGA] for both live and coming markets
    ####Saving this data in a separate JSON named Zeta + Timestamp for older savefiles
The main function is called main();
The active function in main is : setInterval(getData,TIME_VAR) in main
