<!-- ![MeuBalanço](Logo.png) -->
<div style="display:flex; align-items:center; justify-content:center; text-align:center">
  <img src="/Logo(1).png" />
</div>

---
Bolsa 03 Processo Seletivo 011/2021 para Desenvolvedor Mobile - React Native
---

---
Descrição do App
---
O aplicativo contém as 5 telas que foram pedidas inicialmente (Login, Cadastro, Nova Entrada, Nova Saída e Tela Principal), além de uma tela de **Perfil**, que tomei liberdade para acrescentar. Além disso, tomei a liberdade para criar logo, paleta de cores e uma SplashScreen para o app.

### Funcionalidades:
- Login
- Cadastro
- Cadastro de Entrada
- Cadastro de Saída
- Atualização de Perfil
- Upload de Avatar

Os campos de todos os formulários contém **validação**, não é possível deixar o campo vazio e eles devem seguir o formato. No e-mail deve ser informado um endereço de e-mail válido, no cadastro de entrada/saída deve ser informado apenas números, etc. As validações foram aplicadas com a biblioteca [Yup](https://github.com/jquense/yup).

**DETALHE IMPORTANTE**: Evitar usar letras com **acento**. Notei esse pequeno erro no final do desenvolvimento do projeto.

---
Back-end do App
---
O aplicativo se comunica com um servidor **back-end** construído com o framework [AdonisJS](https://adonisjs.com/), que está conectado ao banco relacional PostgreSQL em uma instância [Docker](https://docker.com), permitindo assim que os dados sejam persistidos.

O repositório para o mesmo está nesse [link](github.com/italomarcos1/mybalance-api). O servidor roda em um cluster [EC2](https://aws.amazon.com/pt/ec2/) da AWS.
---
Execute a aplicação no seu dispositivo
---
Baixe o APK e execute no seu dispositivo **Android** (versão 8.1 ou superior).

Você pode criar uma conta ou fazer login com os dados abaixo:
**E-mail**: john@doe.com
**Senha**: 123456

Para cadastrar as entradas/saídas, lembre-se do detalhe dito acima: **EVITAR** letras com acento, etc.

---
Demonstração do formulário sendo preenchido
---

![demo](./take1.gif)

Para ver em uma resolução melhor, clique [aqui](https://youtu.be/3Eno1KbqFtc), onde mostro todas as funcionalidades da aplicação. (vídeo de 1min29seg)

---
Ferramentas Utilizadas
---

- [Context API](https://pt-br.reactjs.org/docs/context.html) - esta API do React permite compartilhar estado por toda a aplicação, permitindo assim o uso de um estado global no app. 
- [React Router Native](https://reactrouter.com/native/guides/quick-start) - a famosa lib de roteamento do React portada para React Native. 
- [Yup](https://github.com/jquense/yup) - biblioteca para validação de formulários utilizando métodos, RegEx, etc.
- [Styled Components](https://styled-components.com/) - esta lib permite criar componentes React com o CSS embutido, isolando o estilo do componente e mesclando as funcionalidades de JS com CSS, permitindo estilizar baseado em uma propriedade/valor do componente (como usar cor verde para sucesso ou vermelho para erro).
- [React Native Responsive Font Size](https://github.com/heyman333/react-native-responsive-fontSize) - smartphones diferentes têm diferentes densidades de **pixel (dpi)**, causando uma diferença visual nos elementos se usarmos Pixel (px) como unidade de medida. Esta lib converte os tamanhos em *pixel* para um tamanho adequado para cada celular.
- [React Native Tiny Toast](https://www.npmjs.com/package/react-native-tiny-toast) - os Toasts são mensagens que aparecem sobre a tela, indicando algum status para o usuário. São ótimas para melhorar a UX do app.
- [React Native SVG](https://github.com/react-native-svg/react-native-svg) - permite utilizar ícones SVG como componentes no aplicativo, também permite definir **altura/largura**, e estilizar o ícone.
---
