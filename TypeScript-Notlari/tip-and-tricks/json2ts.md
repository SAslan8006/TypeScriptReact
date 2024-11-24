# json2ts

Herhangi bir API istek attık bize json bir veri döndü, elimizde json bir veri var ve bu veri tipinin tip tanımlamasını yapmamız gerekiyor. Örneğin [https://swapi.dev/api/people/1](https://swapi.dev/api/people/1) adresine istek attık ve bize aşağıdaki cevabı döndü. 

```javascript
{
	"name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "https://swapi.dev/api/planets/1/",
	"films": [
		"https://swapi.dev/api/films/1/",
		"https://swapi.dev/api/films/2/",
		"https://swapi.dev/api/films/3/",
		"https://swapi.dev/api/films/6/"
	],
	"species": [],
	"vehicles": [
		"https://swapi.dev/api/vehicles/14/",
		"https://swapi.dev/api/vehicles/30/"
	],
	"starships": [
		"https://swapi.dev/api/starships/12/",
		"https://swapi.dev/api/starships/22/"
	],
	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "https://swapi.dev/api/people/1/"
}
```

Tek tek tip tanımlamamız bizim için oldukça zahmetli olucaktır. İşte burada [json2ts](http://json2ts.com/) gibi araçlar yardımımıza koşuyor. Verdiğimiz json verinin tip tanımlamalarını bize saniyeler içerisinde oluşturuyor.

