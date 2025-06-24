# Plataforma Solidária

A Plataforma Solidária é um sistema web simples e direto criado para ajudar ONGs a divulgarem suas necessidades e se conectarem com voluntários e doadores. A ideia é permitir que instituições informem suas demandas de forma organizada e acessível, incentivando a solidariedade através da tecnologia.

---

## Sobre o Projeto

A plataforma foi desenvolvida com o objetivo de aproximar o terceiro setor da comunidade. É uma ferramenta digital onde qualquer ONG pode:

- Se cadastrar gratuitamente
- Informar que tipo de ajuda está precisando
- Divulgar detalhes da necessidade
- Inserir endereço e meios de contato

Tudo isso é feito de forma simples, com campos bem definidos e uma navegação fácil.

---

## Funcionalidades

### Página de Cadastro (`cadastro.html`)
- Formulário com os seguintes campos:
  - Nome da ONG
  - Tipo de Ajuda (Educação, Saúde, Meio Ambiente, etc.)
  - Título da necessidade
  - Descrição detalhada
  - CEP com preenchimento automático (API ViaCEP)
  - Rua, número, bairro, cidade, estado, complemento
  - Telefone e e-mail
- Armazenamento no `sessionStorage`
- Confirmação visual via modal

### Página de Visualização (`visualizacao.html`)
- Lista dinâmica de todas as ONGs cadastradas
- Campo de pesquisa por nome, cidade, estado, título ou descrição
- Filtro por tipo de ajuda
- Modal com exibição completa das informações da ONG

---

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (puro)
- API ViaCEP


