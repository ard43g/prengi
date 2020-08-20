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
					menuIcon.classList.add('menu-icon_active');
				} else {
					burger.classList.add('menu_active'),
					menu.classList.add('flags_active'),
					menuIcon.classList.remove('menu-icon_active');
				};
	
				
				
	
				
	
				
	
	
				
			});
	
	
			
		
	};
	
	menuMain();

	// slick 1
	$('.promo__carousel').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
      
		arrows:true,
		dots:true,
        speed: 300,
		slidesToShow: 1,
		appendDots: $('.promo__carousel'),

	});




	//   slick 2 ========================

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
	

 //===================================DYNAMIC ADAPT
 (function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());



 //===================================DYNAMIC ADAPT
	

}); ///============= DOM CONTENT
