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
