# 🌦️ Community Weather Project
Bem-vindo ao Community Weather Project! Este é um projeto de ciência cidadã onde a comunidade colabora para coletar e visualizar dados meteorológicos locais. Nosso objetivo é criar um recurso valioso para entender melhor os padrões climáticos em nossa região e promover o engajamento comunitário com a ciência.

## 🌟 Sobre o Projeto
### Este projeto visa:

* Coletar dados meteorológicos: Através da participação de voluntários que contribuem com observações e/ou leituras de sensores.

* Visualizar informações: Apresentar os dados de forma clara e interativa em uma interface web.

* Promover a educação: Aumentar a conscientização sobre o clima e a importância da observação meteorológica.

* Fomentar a colaboração: Construir uma rede de entusiastas do clima e da tecnologia.

## 🚀 Começando
Estas instruções vão te ajudar a ter uma cópia do projeto rodando em sua máquina local para desenvolvimento e testes.

### Pré-requisitos

* Certifique-se de ter o seguinte instalado em sua máquina:

* Um navegador web moderno (Chrome, Firefox, Edge, Safari, etc.)

* Um editor de código (VS Code, Sublime Text, Atom, etc.)

* Opcional: Git (para controle de versão)

### Instalação

#### 1 - Clone o repositório (se estiver usando Git):

```
git clone https://github.com/LeandroDevLab/community_weather_project.git

cd community-weather-project
```

Ou baixe o ZIP do repositório e descompacte-o.
#### 2 - Configurações
| Comando                                   | Quando usar                         | O que faz                                                         |
| ----------------------------------------- | ----------------------------------- | ----------------------------------------------------------------- |
| `git config --global core.autocrlf true`  | 👉 **No Windows**                   | 🔄 Converte `LF` → `CRLF` no checkout, e `CRLF` → `LF` no commit. |
| `git config --global core.autocrlf input` | 👉 **No Linux/macOS** (Recomendado) | 🔄 Só converte `CRLF` → `LF` no commit. Não altera no checkout.   |
| `git config --global core.autocrlf false` | 👉 **Quando quer controle manual**  | 🚫 Não faz conversões automáticas de quebra de linha.             |

#### 3- Abra o projeto:

Simplesmente abra o arquivo index.html no seu navegador. Você pode fazer isso arrastando o arquivo para a janela do navegador ou clicando duas vezes nele.

## 📂 Estrutura do Projeto
A organização dos arquivos segue um padrão comum para projetos web, facilitando a navegação e o desenvolvimento:

```
community-weather-project/
├── index.html                  # Página principal
└── assets/
    ├── css/
    │   └── style.css           # Estilos globais do projeto
    ├── js/
    │   └── script.js           # Lógica JavaScript principal
    └── img/
        └── logo.png            # Imagens e ícones do projeto
        └── ...
```

## 🤝 Como Contribuir
Adoraríamos sua ajuda! Se você tiver ideias, encontrar bugs ou quiser melhorar o código, por favor:

#### 1- Faça um Fork deste repositório.

#### 2- Crie uma Branch(Ramificação do projeto) para sua feature 
```
git switch -c tipo/seunome-funcionalidade
```
<b>OU</b> (faz a mesma coisa, mas o de cima é mais moderno)
```
git checkout -b tipo/seunome-funcionalidade
```

<details style="border:1px solid #ff0000">
<summary>📚 <span style="color:red">[IMPORTANTE]</span> Padrão de Nomeação de Branches para o Projeto</summary>

## ✅ Padrão profissional para nomear branches em equipes:
### Onde:
- **`tipo`** = O tipo da branch (qual a função dela)
- **`nome-pessoa`** = Quem está trabalhando nela (opcional, mas muito útil em times)
- **`descrição`** = Descreve o que essa branch faz

---

## 🔥 Tipos mais comuns de branch:

| 🔧 **Tipo** | 📝 **Uso**                                |
|--------------|-------------------------------------------|
| **feature/** | Nova funcionalidade                      |
| **fix/**     | Correção de bug                          |
| **hotfix/**  | Correção urgente (em produção)           |
| **chore/**   | Tarefa de manutenção (ex.: dependências) |
| **refactor/**| Melhorias no código (sem mudar função)   |
| **docs/**    | Documentação (README, Wiki, etc.)        |
| **test/**    | Testes                                   |

---

## 🎯 Exemplos aplicados:

### 🔥 Para funcionalidades:
```
git switch -c feature/leandro-readme
```
ou
```
git checkout -b feature/pedro-login-page
git checkout -b feature/maria-cadastro-usuario
git checkout -b feature/joao-dashboard
```

shell
Copy
Edit

### 🐛 Para bugs:
git checkout -b fix/pedro-botao-nao-funciona

shell
Copy
Edit

### 🚑 Hotfix urgente:
git checkout -b hotfix/pedro-corrige-erro-login

shell
Copy
Edit

### 📜 Documentação:
git checkout -b docs/maria-atualiza-readme

yaml
Copy
Edit

---

## 🏗️ Fluxo básico recomendado:

1. Cria a branch:
git checkout -b feature/seu-nome-descricao

markdown
Copy
Edit

2. Faz o desenvolvimento.

3. Dá push:
git push origin feature/seu-nome-descricao

markdown
Copy
Edit

4. Abre um **Pull Request (PR)** para a `main`.

5. O PR é revisado e aprovado.

6. Faz merge na `main`.

</details>

#### 3- Faça suas alterações.

#### 4- Commit suas alterações 
```
git commit -m 'feat: adicionei nova funcionalidade X'
```

#### 5- Envie para a Branch 
```
git push origin feature/minha-nova-funcionalidade
```

#### 6- Abra um Pull Request.

Por favor, certifique-se de seguir as diretrizes de código e estilo (se houver) e adicionar comentários onde for necessário.

## 🔎Dicas e comandos Git GitHub
<details style="border:1px solid #ff0000">
<summary>Comandos Git GitHub</summary>
## 🚀 Principais Comandos Git e GitHub

### 🔧 Git - Linha de Comando

| Comando                                          | Descrição                                              |
|--------------------------------------------------|--------------------------------------------------------|
| `git init`                                       | Inicializa um novo repositório Git local               |
| `git clone URL`                                  | Clona um repositório remoto para sua máquina           |
| `git status`                                     | Mostra o status dos arquivos (modificados, staged)     |
| `git add nome-do-arquivo`                        | Adiciona arquivo específico para staging (preparo)     |
| `git add .`                                      | Adiciona **todos os arquivos modificados**            |
| `git commit -m "mensagem"`                       | Cria um commit com uma mensagem descritiva            |
| `git push origin nome-da-branch`                 | Envia (push) os commits locais para o GitHub           |
| `git pull origin nome-da-branch`                 | Atualiza seu repositório local com o remoto (fetch + merge) |
| `git branch`                                     | Lista todas as branches locais                        |
| `git branch nome-da-branch`                      | Cria uma nova branch                                  |
| `git checkout nome-da-branch`                    | Troca para uma branch existente                       |
| `git checkout -b nome-da-branch`                 | Cria e troca para uma nova branch                     |
| `git switch nome-da-branch`                      | ✅ (Moderno) Troca para uma branch existente           |
| `git switch -c nome-da-branch`                   | ✅ (Moderno) Cria e troca para uma nova branch         |
| `git merge nome-da-branch`                       | Faz merge da branch informada na branch atual         |
| `git log`                                        | Exibe o histórico dos commits                         |
| `git remote -v`                                  | Mostra os repositórios remotos conectados             |
| `git fetch`                                      | Busca atualizações do remoto, mas **não faz merge**   |
| `git reset --hard HEAD`                          | ⚠️ Descarta todas as alterações não commitadas        |
| `git stash`                                      | Salva alterações temporariamente (sem commitar)       |
| `git stash pop`                                  | Recupera alterações salvas no stash                   |
| `git pull --rebase`                              | Atualiza seu branch local sem criar commit de merge extra |
| `git push --set-upstream origin nome-da-branch`  | Faz push de uma branch nova e a conecta ao remoto     |

---

### 🌐 GitHub - Interface Web

| Ação no GitHub             | Descrição                                              |
|----------------------------|--------------------------------------------------------|
| **Fork**                   | Cria uma cópia do repositório na sua conta GitHub     |
| **Pull Request (PR)**      | Solicita que suas alterações sejam revisadas e mescladas |
| **Merge Pull Request**     | Aprova e integra as alterações da branch no repositório |
| **Review Changes**         | Avalia um PR: aprova, comenta ou solicita mudanças    |
| **Settings > Branches**    | Configura regras de proteção das branches             |
| **Invite Collaborator**    | Adiciona colaboradores no repositório                 |
| **Compare & Pull Request** | Cria um PR a partir de uma branch para outra          |

---

✅ **Dica:** Use sempre `git status` e `git log` para acompanhar o que está acontecendo no seu repositório!
</details>

## 📝 Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## 📧 Contato
Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato:

LeandroDevLab / Gran Computer Science: [leandrodevlab@gmail.com]

Repositório: [https://github.com/seu-usuario/community-weather-project](https://github.com/LeandroDevLab/community_weather_project.git) 