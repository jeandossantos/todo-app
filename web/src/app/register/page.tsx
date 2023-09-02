export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form className="flex flex-col items-center gap-3 w-96 my-14 pb-8 rounded bg-[#FCFCFC] shadow-md">
        <h1 className="my-6 text-4xl font-bold text-center text-zinc-500">
          Crie sua conta
        </h1>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="name">
            Nome:
          </label>
          <input
            className="h-12 p-2 rounded w-80 bg-zinc-100"
            type="text"
            id="name"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="email">
            E-mail:
          </label>
          <input
            className="h-12 p-2 rounded w-80 bg-zinc-100"
            type="email"
            id="email"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="password">
            Senha:
          </label>
          <input
            className="h-12 p-2 rounded w-80 bg-zinc-100"
            type="password"
            id="password"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="confirm_password">
            Confirmação de Senha:
          </label>
          <input
            className="h-12 p-2 rounded w-80 bg-zinc-100"
            type="password"
            id="confirm_password"
          />
        </div>
        <button
          className="h-12 font-semibold transition-colors bg-orange-200 rounded hover:bg-orange-300 w-80"
          type="submit"
        >
          Criar
        </button>

        <p className="font-semibold text-zinc-900">Ou</p>

        <button className="h-12 font-semibold transition-colors bg-red-400 rounded text-zinc-100 hover:bg-red-500 w-80">
          Registre-se com google
        </button>

        <button className="h-12 font-semibold transition-colors bg-blue-400 rounded hover:bg-blue-500 w-80 text-zinc-100">
          Registre-se com facebook
        </button>
      </form>
    </div>
  );
}
