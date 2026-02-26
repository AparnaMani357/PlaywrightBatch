//grouping

let status_code=500;

switch(status_code){

    case 200:
    case 201:
    case 202:console.log("Success") ;
                break;
    case 400:
    case 404:
    case 401:
    case 403:console.log("Bad request");
                break;

    case 500:
    case 501:
    case 505:console.log("Server side error");
                break;

}