/* 
$(document).ready(function(){
    
    
}); */

window.addEventListener('DOMContentLoaded', () => {


	function menuMain(){
		let burger = document.querySelector('.menu__subheader'),
			menu = document.querySelector('.subheader__items'),
			menuIcon = document.querySelector('.menu-icon');
			
			
			
	
			burger.classList.remove('menu_active');
			menuIcon.classList.add('menu-icon_active');
		
			burger.addEventListener('click', (e)=> {
				let target = e.target;
				if (target.classList.contains('menu_active')	) {
					burger.classList.remove('menu_active'),
					menu.classList.remove('flags_active'),
					document.body.style.overflow = '',
					menuIcon.classList.add('menu-icon_active');
				} else {
					burger.classList.add('menu_active'),
					menu.classList.add('flags_active'),
					document.body.style.overflow = 'hidden'
					menuIcon.classList.remove('menu-icon_active');
				};
	
				
				
	
				
	
				
	
	
				
			});
	
	
			
		
	};
	
	menuMain();

	$('.decision__presentation-items').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/decision/decision_arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/decision/decision_arrow_right.svg"></button>',
      
        speed: 1300,

        dots: false,
        speed: 300,
        slidesToShow: 1,

	});
	


	function openContacts (){
		
		let contactsHeader = document.querySelector('.subheader__items'),
			contactsItem = document.querySelectorAll('.subheader__item'),
			contactsBtn = document.querySelectorAll('.subheader__text-name'),
			contactsFlag = document.querySelectorAll('.subheader__item-flag_img'),
			contactsMenu = document.querySelectorAll('.country_contacts');

		contactsHeader.addEventListener('click', (event) =>{
			let target = event.target,
				currentIndex = 1;

			if (   (target.classList.contains('subheader__text-name')) || (target.classList.contains('country_contacts')) || (target.parentNode.classList.contains('subheader__item-flag'))    ) {
				contactsItem.forEach(item => {
					item.classList.remove('country-active');
				
				});
				contactsMenu.forEach(item =>{ 
					item.classList.remove('contacts-active')
				});



				for (i = 0; i < contactsItem.length; i++) {
					if ( (target == contactsBtn[i]) || (target == contactsFlag[i]) || (target == contactsMenu[i])  ){
					/* 	console.log(target.parentNode); */
						contactsItem[i].classList.add('country-active');
						
						contactsMenu[i].classList.add('contacts-active')
						if(       (target == contactsMenu[i]) && contactsItem[i].classList.contains('country-active')  ) {
							contactsItem[i].classList.remove('country-active');
							contactsMenu[i].classList.remove('contacts-active')
							
						}

						/* if(       ((target == contactsBtn[i]) || (target == contactsFlag[i])) && contactsItem[i].classList.contains('country-active')  ) {
						contactsItem[i].classList.remove('country-active');
						
						} */
					}
					/* else if(       ((target == contactsBtn[i]) || (target == contactsFlag[i])) && contactsItem[i].classList.contains('country-active')  ) {
						contactsItem[i].classList.remove('country-active');
						console.log(contactsItem[i]);
					} */
					/* else {
						contactsItem[i].classList.remove('country-active');
					} */
					
				}
			} 

			


		/* 	if (      ((target.classList.contains('subheader__text-name')) || (target.classList.contains('country_contacts')) || (target.parentNode.classList.contains('subheader__item-flag')))          ){
				
				contactsItem.forEach(item => {
					if (item.classList.contains('country-active')){
						item.classList.remove('country-active')
					}
				});
				
			
				
			}; */

		});
		/* closeContacts = function (e) {
			contactsMenu.addEventListener('click', (e) => {
				contactsMenu.forEach(item=> {
					if (item.)
				})
			});
		}; */


	};
	openContacts();

	function closeContacts(){
		let contactsMenu = document.querySelectorAll('.country_contacts'),
			contactsItem = document.querySelectorAll('.subheader__item');
		contactsMenu.forEach(item=> {
			item.addEventListener('click', (e)=> {
				let target = event.target;
				if (target || contactsItem.classList.contains('country-active')){
					target.classList.remove('country-active')
				}
			})
		})

	};
	


	

}); ///============= DOM CONTENT
