let isOrderAccepted = false;
let isValetFound=false;
let hasRestaurantSeenYourOrder=false;
let restaurantimer=null;





window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('acceptOrder').addEventListener('click', function () {
        askRestaurantToAcceptOrReject()
        
        checkIfOrderAcceptedFromRestaurant()
            .then(isOrderAccepted=>{
                console.log('updated from restaurant -',isOrderAccepted);
                //step 3-start preparing
                if(isOrderAccepted) alert('Your order has been accepted');
                //step 4-order rejected
            else alert('Sorry restaurant couldnt accept your order! returning your payment to your wallet');
            
            })
        .catch(err=>{
            console.error(err);
            alert('Something went wrong ! Please try again');
        });
});
});
// step 1-check whether restaurant accepted order or not
function askRestaurantToAcceptOrReject() {
   
        setTimeout(() => {
             isOrderAccepted = confirm('Should restaurant accept order?');
            hasRestaurantSeenYourOrder=true;
            
        
        }, 1000);
   
}


//step 2-check if restaurant has accepted order;
function checkIfOrderAcceptedFromRestaurant(){
    //promise-resolve or reject
    return new Promise((resolve,reject) =>{
       restaurantimer= setInterval(()=>{
            console.log('checking if order accepted or not');
            if(!hasRestaurantSeenYourOrder) return;
            resolve(isOrderAccepted);

            // if(isOrderAccepted)resolve(true);
            // else resolve(false);
            clearInterval(restaurantimer);
                },2000);
    });
    
}