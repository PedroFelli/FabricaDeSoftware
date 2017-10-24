app.controller("loginController", function($scope, $location,  $window) {


// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyCnb1-6ifibViQZp_K0y3qhrdDrIZvGTKE",
//   authDomain: "gladiatorapp-627ea.firebaseapp.com",
//   databaseURL: "https://gladiatorapp-627ea.firebaseio.com",
//   projectId: "gladiatorapp-627ea",
//   storageBucket: "gladiatorapp-627ea.appspot.com",
//   messagingSenderId: "901467024091"
// };
// firebase.initializeApp(config);
//
//
// //get elements
// const txtEmail = document.getElementById('txtEmail');
// const txtPassword = document.getElementById('txtPassword');
// const btnLogin = document.getElementById('btnLogin');
// const btnSignUp = document.getElementById('btnSignUp');
// const btnLogout = document.getElementById('btnLogout');
// const navbar = document.getElementById('navbar')
//
// // add login event
//
//btnLogin.addEventListener('click', e => {
// //get email and pass
// const email = txtEmail.value;
// const pass  = txtPassword.value;
// const auth = firebase.auth();
// //sing in
// const promise = auth.signInWithEmailAndPassword(email, pass);
// promise.catch (e => window.alert(e.message));
// 
//});
//
// // add signup event
// btnSignUp.addEventListener('click', e => {
// //get email and pass
// const email = txtEmail.value;
// const pass  = txtPassword.value;
// const auth = firebase.auth();
// //sing in
// const promise = auth.createUserWithEmailAndPassword(email, pass);
// promise.catch (e => window.alert(e.message));
// });
//
// btnLogout.addEventListener('click', e => {
//   firebase.auth().signOut();
// });
//
// firebase.auth().onAuthStateChanged(firebaseUser => {
//   if(firebaseUser){
//   
////     console.log(firebaseUser);
//	  Encripta(JSON.stringify(firebaseUser));
//     $window.ScopeToShare = firebaseUser;
//     $window.location.href = '#/admin';
//// 	$location.path("#/admin")
//     
//    
//     btnLogout.classList.remove('hide');
//
//   } else {
//     console.log('not logged in');
//     btnLogout.classList.add('hide');
//   }
// });
//
// 
//	function Encripta(dados){
//		var mensx="";
//		var l;
//		var i;
//		var j=0;
//		var ch;
//		ch = "assbdFbdpdPdpfPdAAdpeoseslsQQEcDDldiVVkadiedkdkLLnm";	
//		for (i=0;i<dados.length; i++){
//			j++;
//			l=(Asc(dados.substr(i,1))+(Asc(ch.substr(j,1))));
//			if (j==50){
//				j=1;
//			}
//			if (l>255){
//				l-=256;
//			}
//			mensx+=(Chr(l));
//		}
//		localStorage.setItem('user', mensx);
//	}
//
//	function Asc(String){
//		return String.charCodeAt(0);
//	}
//	 
//	function Chr(AsciiNum){
//		return String.fromCharCode(AsciiNum)
//	}


});