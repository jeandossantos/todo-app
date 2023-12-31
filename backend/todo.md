## TODO APP API

1. **Autenticação e Registro:**

   - [x] Deve ser possível registrar uma conta com username, avatar_uurl, email, password e confirm_password.
   - [x] Não deve ser possível registrar user com e-mail e username existente.
   - [x] Deve enviar um email de boas-vindas ao usuário recém-registrado.
   - [x] Deve criar uma tarefa junto com a criação da conta.
   - [x] Deve ser possível autenticar o usuário com username e senha.
   - [x] Deve ser possível que o usuário troque sua senha.

2. **Perfil do Usuário:**

   - [x] Deve ser possível que o usuário atualize suas informações.
   - [x] Deve ser possível ao usuário trocar sua foto.
   - [x] Deve ser possível que o usuário exclua sua conta.

3. **Gerenciamento de Tarefas:**
   - [x] Deve ser possível que o usuário crie tarefas com os seguintes campos: {
         id, title, description, priority, deadline, done, created_at, updated_at e user_id
         }
   - [x] Deve ser possível que o usuário veja somente suas tarefas.
   - [x] Deve ser possível que o usuário exclua suas tarefas.
   - [x] Deve ser possível que o usuário edite suas tarefas.
   - [x] Deve ser possível que o usuário filtre suas tarefas pelo título.
   - [x] Deve ser possível que o usuário filtre por página.
   - [x] Deve ser possível que o usuário marque suas tarefas como feitas ou não feitas.

Essa organização separa os requisitos em três seções distintas, facilitando a compreensão e a implementação do sistema. Além disso, os requisitos foram reordenados para criar uma sequência mais lógica e clara. Lembre-se de que, ao desenvolver o sistema, você pode adicionar mais detalhes e especificações técnicas, mas esses requisitos gerais servirão como uma base sólida para o seu todo list.
