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

Pesquisa com **17 estudantes do IFPR** (questionário de 15 perguntas, aplicado em 31/08/2026).

| Indicador | Resultado |
|---|---|
| Usam quadras ao menos "às vezes" | 12 de 17 (71%) |
| Têm dificuldade ao reservar ao menos "às vezes" | 11 de 17 (65%) |
| Consideram muito ou extremamente importante ver horários em um único sistema | 15 de 17 (88%) |
| Funcionalidade mais votada: ver horários disponíveis | 14 de 17 (82%) |
| Dos que fazem reservas, usam WhatsApp | 6 de 7 |
| Método de pagamento online preferido: PIX | 16 de 17 (94%) |

**Principais dificuldades citadas:** falta de organização (8), conflito de horários (5), dificuldade para realizar a reserva (5) e falta de informações sobre horários (3).

**Limitações:** amostra pequena e composta por estudantes do IFPR; 10 dos 17 não fazem reservas atualmente e 9 usam principalmente quadras públicas; a pesquisa não mediu disposição de pagar nem ouviu administradores de condomínios ou donos de quadras. Os resultados indicam uma tendência, não representam o mercado.

**Próximos passos:** entrevistar síndicos e administradores, ampliar a pesquisa para público fora do IFPR e testar o protótipo com usuários.
