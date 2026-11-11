# Requisitos — Alugar

> Versão preliminar. Será atualizada após a pesquisa com usuários.

## 1. Visão geral e escopo

O **Alugar** é um sistema de aluguel de quadras esportivas, voltado inicialmente a condomínios. Ele centraliza informações de quadras e horários e permite que os usuários consultem a disponibilidade e façam reservas.

**Dentro do escopo (versão inicial)**
- Cadastro de quadras e horários.
- Consulta de disponibilidade.
- Criação e cancelamento de reservas.

**Fora do escopo (por enquanto)**
- Pagamentos online.
- Integração com sistemas externos de condomínios.
- Uso em espaços esportivos públicos ou comerciais (possível evolução futura).

## 2. Perfis de usuário

| Perfil | Descrição |
|---|---|
| Administrador | Representante do condomínio que gerencia quadras, horários e reservas. |
| Morador / usuário autorizado | Consulta horários e gerencia as próprias reservas. |

## 3. Requisitos funcionais

| Código | Requisito | Prioridade | Status |
|---|---|---|---|
| RF01 | O administrador deve cadastrar, editar e remover quadras. | Alta | Planejada |
| RF02 | O administrador deve definir os horários de funcionamento de cada quadra. | Alta | Planejada |
| RF03 | O usuário deve consultar a disponibilidade de horários por quadra e data. | Alta | Planejada |
| RF04 | O usuário deve reservar um horário livre. | Alta | Planejada |
| RF05 | O usuário deve visualizar e cancelar as próprias reservas. | Média | Planejada |
| RF06 | O sistema deve impedir duas reservas para a mesma quadra e horário. | Alta | Planejada |
| RF07 | O administrador deve visualizar todas as reservas. | Média | Planejada |
| RF08 | O sistema deve autenticar usuários (login). | Média | Planejada |

## 4. Requisitos não funcionais

| Código | Requisito |
|---|---|
| RNF01 | A interface deve ser simples e utilizável em celulares e computadores. |
| RNF02 | Dados pessoais devem ser protegidos e coletados apenas se necessários. |
| RNF03 | A consulta de horários deve responder em poucos segundos. |
| RNF04 | O sistema deve ter contraste e legibilidade adequados. |

## 5. Histórias de usuário

- Como **morador**, quero ver quais horários estão livres para escolher quando jogar sem precisar perguntar em grupos de conversa.
- Como **morador**, quero cancelar uma reserva para liberar o horário quando eu não puder ir.
- Como **administrador**, quero cadastrar as quadras e seus horários para organizar o uso dos espaços.
- Como **administrador**, quero ver todas as reservas para evitar conflitos.

## 6. Critérios de aceitação (exemplos)

- **RF06:** ao tentar reservar um horário já ocupado, o sistema recusa a reserva e informa que o horário não está disponível.
- **RF05:** ao cancelar uma reserva, o horário volta a aparecer como livre.

## 7. Evidências do problema

Resultados da pesquisa com usuários (formulário sobre reservas, disponibilidade e recursos importantes) serão registrados aqui, sem identificar participantes.

*Ainda não coletados.*
