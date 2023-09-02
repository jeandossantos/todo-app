import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-full">
      <div className="w-96 pb-8 rounded bg-[#FCFCFC] shadow-md">
        <h1 className="my-6 text-4xl font-bold text-center text-zinc-500">
          Faça seu login
        </h1>

        <form className="flex flex-col items-center gap-3">
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
          <button
            className="h-12 font-semibold transition-colors bg-orange-200 rounded hover:bg-orange-300 w-80"
            type="submit"
          >
            Entrar
          </button>

          <p className="font-semibold text-zinc-900">Ou</p>

          <button className="h-12 font-semibold transition-colors bg-red-400 rounded text-zinc-100 hover:bg-red-500 w-80">
            Faça login com google
          </button>

          <button className="h-12 font-semibold transition-colors bg-blue-400 rounded hover:bg-blue-500 w-80 text-zinc-100">
            Faça login com facebook
          </button>
        </form>
        <p className="mt-3 text-sm text-center text-zinc-900">
          Não tem uma conta?{' '}
          <Link className="text-blue-500" href="/register">
            {' '}
            Crie aqui.
          </Link>
        </p>
      </div>
    </div>
  );
}
