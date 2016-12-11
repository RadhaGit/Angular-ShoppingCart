// Code goes here

var app=angular.module('shopCart',[]);
//var app=angular.module('Cart',[]);
app.controller('TestController',function($scope,$rootScope){
  $rootScope.name="Hi";
  //$scope.cart=false;
  $scope.n_books;
  $scope.ins_item={};
  //id, name, category, description, price, quantity
  $rootScope.finalcart;
  $rootScope.items=[{id:1,name:'Programming with Java',categeory:'Book1',desc:'Desc1',price:50,qua:10},
  {id:2,name:'Programming with PL/SQL',categeory:'Book2',desc:'Desc2',price:55,qua:12},
  {id:3,name:'Programming with PL/SQL',categeory:'Book2',desc:'Desc2',price:55,qua:12}];
$rootScope.cart=[];
$scope.exist=0;
$scope.id=0;
$scope.addToCart=function(item,n_books){
  if(item.qua-n_books>=0){
    ins_item=angular.copy(item);
    ins_item.qua=n_books;
    for(var i=0;i<$rootScope.cart.length;i++){
        if($rootScope.cart[i].id==ins_item.id){
          // $scope.cart[i].qua=$scope.cart[i].qua+n_books;
          // item.qua=item.qua-n_books;
          $scope.exist=1;
          $scope.id=i;
        }
    }
    if($rootScope.cart.length===0||$scope.exist===0){
      $rootScope.cart.push(ins_item);
      item.qua=item.qua-n_books;
    }
    else{
        $rootScope.cart[$scope.id].qua=$rootScope.cart[$scope.id].qua+n_books;
        item.qua=item.qua-n_books;
          // $scope.cart.push(ins_item);
          // item.qua=item.qua-n_books;
      }
    // for(var i=0;i<cart.length;i++){
    //   if(cart[i].id==ins_item.id){
    //     cart[i].qua=cart[i].qua+n_books;
    //   }
    // }
    // for(var i=0;i<items.length;i++){
    //   if(items[i].id==ins_item.id){
    //     items[i].qua=items[i].qua-n_books;
    //   }
    // }
    item={};$scope.n_books=null;$scope.exist=0;
  }else{
    alert("In sufficient quantity"+item.id);
  }
}
// $scope.showCart=function(){
//   $scope.cart=true;
// }
$scope.checkOut=function(){
  $rootScope.finalcart=$rootScope.cart;
  //myService.set($scope.cart);
  // for(var i=0;i<$scope.cart.length;i++){
    
  //   for(var j=i;j<$scope.cart.length;j++){
  //       if($scope.cart[i].id==$scope.cart[j].id){
  //       $scope.cart[i].qua=cart[j].qua+cart[j].qua;
  //       $scope.cart[j]=[];
  //       }
  //     }
  //   }
  //$scope.cart=[];
}
});
app.factory('myService', function() {
var savedData = [];
function set(data) {
  savedData = data;
}
function get() {
  return savedData;
}

return {
  set: set,
  get: get
}

});

app.controller('CartController',function($scope,$rootScope){
  //$scope.name="Hi";
  // $rootScope.cart=false;
  // $scope.n_books;
  
//$rootScope.cart = myService.get();
});
