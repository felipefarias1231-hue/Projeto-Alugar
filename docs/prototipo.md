# Protótipo mobile — Alugar

> Protótipo conceitual. Não há back-end nem dados reais: as telas e ações são ilustrativas.

## Acesso

- **Protótipo publicado:** https://sporty-reserve-app-mobile.lovable.app/
- **Ferramenta utilizada:** Lovable

## Objetivo

Validar a interface e o fluxo de reserva de quadras em formato de aplicativo para celular, antes de implementar o sistema funcional.

## Fluxo principal

1. O usuário escolhe uma quadra.
2. Consulta os horários livres e ocupados.
3. Reserva um horário disponível.
4. Visualiza e, se necessário, cancela a própria reserva.

*(Ajuste esta lista para refletir exatamente as telas do protótipo.)*

## Telas

Salve as capturas de tela em `assets/imagens/` e referencie-as aqui. Exemplo:

```markdown
![Tela de horários disponíveis](../assets/imagens/tela-horarios.png)
*Figura 1 — Tela de consulta de horários.*
```

| Tela | Descrição | Requisitos relacionados |
|---|---|---|
| Lista de quadras | Quadras disponíveis do condomínio | RF03 |
| Horários | Horários livres e ocupados por data | RF03, RF06 |
| Confirmação de reserva | Confirma o horário escolhido | RF04 |
| Minhas reservas | Lista e cancelamento de reservas | RF05 |

*(Adapte a tabela às telas reais.)*

## Decisões de design

- Prioridade para o uso em celular, pois a reserva tende a ser feita de forma rápida, pelo telefone.
- Interface simples, com poucos passos até a confirmação.

## Limitações

- Dados fictícios e sem persistência.
- Sem autenticação ou integração com banco de dados.
- Sujeito a mudanças conforme os resultados da pesquisa e dos testes com usuários.
