# ReactJS

# Iniciando projeto

Para começar iremos usar Vite, comando para iniciar um projeto React com Vite:

```bash
npm create vite@latest react-app --template react
```

Para baixar as dependencias do projeto:

```bash
npm install
```

Para rodar ele em mode desenvolvimento:

```bash
npm run dev
```


## Estruturação de Projeto

react-app
|
|__ node_modules (armazena todas as denpendencias que o projeto precisa, os node modules)
|
|
|__ src (todos os arquivos para criar o app)
		|___ pages (paginas)
		|___ components (componentes)
		|___ hooks (os hooks personalizados)
|		
|__ public (arquivos estaticos)
|
|__ * (todos os outros arquivos são mais de configuração do projeto)


## Renderização

Ele manipula os elementos da DOM atraves do seu ferramental.

Atraves da class ReactDOM pode-se renderizar e manipular o DOM:

```jsx
ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
) 
``` 


**! não precisa colocar extençãode arquivos js, jsx, tsx, ts. React já cuida disso !**


## JSX

Forma que o React tem de criar os conteúdos de forma declarativa. 

Sendo que existe uma função que retornam conteúdo HTML. Essa função **deve ter um retorno**.

```jsx
function App() {

	// Uma das boas praticas é sempre usar '()' e ';' para definir o bloco de conteudo retornado
	return ( 
		<h1>Hello World!!</h1>
	);

}
```

### Retorno

A regra do JSX é de que deve se retornar apenas um elemento, ou seja não se pode ter isso aqui:

```jsx
function App() {

	// retornando dois elementos
	return ( 
		<h1>Hello World!!</h1>
		<h1>Hello World!!</h1>
	);

}
```

Devendo apenas retornar um unico elemento:

```jsx
function App() {

	// retornando um elemento
	return ( 
		<h1>Hello World!!</h1>
	);

}
```

Outras formas:

1. Encapsulando em outro Elemento

```jsx
function App() {

	// retornando um elemento
	return ( 
		<div>
			<h1>Hello World!!</h1>
		</div>
	);

}
```

2. React Fragment - serve para encapsular elementos, mas não sendo nenhuma elemento. Funcionando só para indicar que existe um 'element wrraped'. Assim retornando apenas um elemento.

```jsx
function App() {

	
	return ( 
		<>
			<h1>Hello World!!</h1>
		</>
	);

}
```

## Inserindo CSS

Para colocar CSS nas paginas use:

**! sempre deve ter as extenções dearquivos CSS !**

```js
import './styles/global.css';
```	

### Organização 

Organização dos arquivos CSS no projeto:

src
 |
 |__ styles
 |	   |
 |	   |__ global.css
 |
 |__ pages
			|
			|__ Home
						|__ index.jsx (todo conteudo da pagina)
						|
						|__ style.css (estilos da pagina)

**!**
*no React não precisa definir que o `import` de Home será:*


```js
import Home from './pages/Home/index.jsx';
```

Já que por padrão ele buscara o `index` daquela pasta, ou seja, ficando assim:

```js
import Home from './pages/Home';
```
**!**


## Componentes

São pedacinhos da interface que juntos montam a interface, são como os Power Ranges que juntos formam o Megazord

( Butão ) -> esse 'butão' poderia ser um componente, já que ele seria independende da interface e pode ser reutilizavel e junto com o resto dos componentes se torna um Megazord
  
### Organização 

Organização dos componentes:

src
 |
 |
 |__ components
			|
			|__ MyComponent
						|__ index.jsx (todo conteudo do componente)
						|
						|__ style.css (estilos somnente do comoponente)


## Propriedades

As propriedades são valores que podem ser acessados e passados para qualquer componente. 

São as informações ou dados necessarios para que aquele componente funcione.

### Usos

Deve se fazer duas coisas para que se possa usar props (propriedades):

- **Definir as props na criação do componente**
```jsx
<Dog name="Caramelo" age="12" />
```
~ Nesse exemplo, no componente `Dog`, foram passadas 2 props:

	+ `name`
	+ `age`

Sendo que as propssão passadas como atributos, assim como no HTML. 

Porém, como estamos usando JSX, pode-se usar também dessa forma:

```jsx
<Dog name={name} age={age} />
```

~ Onde as `{}` irão dizer que dentro delas será colocado JavaScript, ou seja, usando as chaves posso colocar JS na escrita do componente


- **Definir as props no componente**

Para se usar de fato as props deve se declarar em forma de parametros as propriedades que se vai usar:

```jsx
function Dog(props) {
	return <h1>I am {props.name}, {props.age} years old<h1>;
}
```

~ No exemplo, o parametro props da função, é um objeto que vai servir para guardar as propriedades recebidas na instanciação do componente.

Quando acessamos `props.name`, quer dizer que:

	+ Acesse o objeto `props` e retorne o valor do atributo (ou, pode-se dizer, prop) `name`

**Pode se fazer isso também com destructing ou spread operator**

+ **Spread Operator**
```jsx
dog = { name: "Doug", age: 16 };

return <Dog {...dog} />;
```

`dog` é um objeto, e o spread operador vai "espalhar" o conteudo dele, sendo que ficaria assim:

```jsx
// os atriutos e valores usam o mesmo nome
// assim sendo mais rapido o uso
return <Dog name={name} age={age} />; 
```


+ **Destructing**
```jsx
function Dog({ name, age }) {
	return <h1>I am {name}, {age} years old<h1>;
}
```

Nesse exemplo, já não se instancia o objeto props, e sim o nome das variaveis `name` e `age`, o obj `props` foi 'desestruturado' ou 'destruido'. 

Aonde pegou os atributos de mesmo nome e criou duas variaveis vindas de `props`, de escopo local, sendo equivalente a isso:

```jsx
function Dog(props) {
	const name = props.name;
	const age = props.age;

	return <h1>I am {name}, {age} years old<h1>;
}
```

~ Com isso deixa mais performatico e verboso.


## Estados (States)

São variaveis com poder de mudarem o estado da interface, ou seja, seu valor é refletido na aplicação.

O Hook `useState` permite ter variáveis em componentes funcionais. Você passa o estado inicial para esta função e ele retorna uma variável com o valor atual do estado (não necessariamente o estado inicial).


1. Para isso importe o Hook:

```js
import { useState } from "react";
```

2. Use-o:

```js
const [studentName, setStudentName] = useState("");
```

~ `useState("")` -> vai definir o estado inicial, retornando dois elementos:

+	o estado e a função que irá alterar o estado:
	- studentName -> estado
	- setStudentName -> alterador do estado

! Sempre será nessa ordem !

~ `[studentName, setStudentName]` -> é a destructing do useState(), criando duas consts, pegando valores vindos do Hook.

~ O React renderiza a tela conforme cada estado muda, porém, para ser mais performatico ele renderiza apenas o objeto do DOM que foi mudado. 

~ De forma inteligente e independendeb buscando ser o mais performatico possível, atraves de seu algoritmo chamado de: Algoritmo de Reconciliação.


## Imutabilidade

Esse princípio é regido por:

		"O contéudo deve ser substituido e não modificado".

Como modificar um conteúdo se torna menos e bem menos performatico. A opção mais viavel, quando olhamos para a performance é substituir **todo** o conteúdo por um novo.

