
# Space Cromai Front End

Front End para a calculadora de teorema de pitagoras desenvolvido para o desafio do Space Cromai proposto pela Cromai.

Desenvolvido utilizando React, TypeScript e Vite.


## Instalação

Clone o repositorio (estarei usando clone por HTTPS) e instale as dependencias utilizando o npm.

```bash
  git clone https://github.com/rzschrb/cromai-frontend.git
  cd .\cromai-backend\
  npm install
```

Após as dependencias serem instaladas apenas utilize o comando a seguir para abrir um localhost com a aplicação em modo desenvolvedor.

```bash
  npm run dev
```

Ele irá abrir abrir um `localhost` na porta `5173` permitindo você acessar pelo seu navegador na seguinte url: `http://localhost:5173/`
    
## Deploy

Para fazer o deploy desse projeto você pode utilizar o Vercel ou outro provedor.

```bash
  npm run build 
```

Ou como está sendo utilizado o vite, você pode usar:

```bash
  vite build
```

Como padrão a Vercel já configura automaticamente um projeto Vite e você pode facilmente fazer o deploy.

## Uso/Exemplos

#### Como utilizar

Para conectar o front-end com o back-end você pode utilizar o endpoint 
que subi na `repl.it` que já está no projeto (pode estar offline) ou caso ele não esteja mais ativado, você pode utilizar na sua propria máquina rodando o servidor da forma que foi ensinada no repositorio `cromai-backend` em meu GitHub e trocando a URL do endpoint no arquivo `Form.tsx`.

#### Como trocar a URL

Ao clonar o repositorio, no arquivo `Form.tsx` tera um metodo `handleSubmit` que tem a função de fazer o `fetch` ou sejá a requisição do calculo. Ele estará da seguinte forma:

```ts
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(`https://flask-server-cromai.rzschrb.repl.co/calculate/${side_a != '' ? side_a : 0 }/${side_b != '' ? side_b : 0 }/${hipo_c != '' ? hipo_c : 0 }/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setResult(data);
            console.log(result);
        });
    }
```

Para utilizar seu endpoint local, troque `fetch` para seu endpoint local ou apenas copie o código a seguir:

```ts
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(`https://localhost:5000/calculate/${side_a != '' ? side_a : 0 }/${side_b != '' ? side_b : 0 }/${hipo_c != '' ? hipo_c : 0 }/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setResult(data);
            console.log(result);
        });
    }
```
