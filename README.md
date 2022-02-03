## Setup

```sh
docker build -t zeta:zeta .
```
## Description
This function deals with :\
_Creating a virtual wallet\
_Pushing a connection on the devnet through the .env file\
_Getting the following data : \
_Expiration, Interest Rate, and in each market : [Index,Kind,Strike,Market price,Delta,IV,VEGA] for both live and coming markets\
_Saving this data in a separate JSON named Zeta + Timestamp for older savefiles\
The main function is called main();\
The active function in main is : setInterval(getData,TIME_VAR) in main
