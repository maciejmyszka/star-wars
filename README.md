Instructions
1. Create app using ReactJs

2. Based on this figma design (https://www.figma.com/file/nDeahqOhonvgFxe9jN7iea/Task-One?node-id=2%3A1551) and the API from here (https://swapi.dev/) create the Star Wars characters Table.

	a. The search filter should allow to filter the characters by name or any part of their name - WORKS

	b. The Species and Homeworld filters should be multiple select dropdowns - WORKS
	
	c. The Status filter should be a single select dropdown - WORKS
	
	d. The Deactivate characters button should gray out the selected characters- - WORKS, BUT ONLY AFTER REFRESHING COMPONENT (FOR EXAMPLE UNSELECT ELEMENT)
	
	e. The Remove characters button should remove the selected characters from the table - DOESNT WORK

	f. The Edit action should enable the edition of the characters name (changing only the local state) - WORKS
	
	g. The hamburger action (…icon) should have the following actions in a dropdown menu - WORKS
		i.	Deactivate/Activate character - WORKS
		ii.	Remove character - WORKS
		
	h. If more than two vehicles and starships exist for a given character, then show only 2 RANDOM ones - WORKS	

3. Share your project as a GitHub link with us
4. Good luck

Nie umiem pobrać wszystkich danych z API jedną metodą fetch, więc zrobiłem stan dla każdej ze stron. Niestety okazało się to problematyczne, ponieważ chciałem następnie zebrać te dane i umieścić w głównym state ze wszystkimi postaciami. Nie było to możliwe, więc zrobiłem zmienną characters, do której przypisałem wszystkie strony. To też niestety spowodowało późniejsze problemy z odświażaniem komponentów, więc zdecydowałem się pobrać tylko jedną stronę z postaciami. Dzięki takiemu rozwiązaniu mogę zrobić funkcjonalność aplikacji.
