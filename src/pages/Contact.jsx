export default function Contact() {
  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      {/* Title */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Contate-nos
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Quer fazer um orçamento? Entre em contato conosco!
        </p>
      </div>

      {/* Form */}
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Nome */}
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold text-gray-900"
            >
              Nome
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                type="text"
                name="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-900"
              />
            </div>
          </div>

          {/* Sobrenome */}
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold text-gray-900"
            >
              Sobrenome
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                type="text"
                name="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-900"
              />
            </div>
          </div>

          {/* Company */}
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-gray-900"
            >
              Empresa
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                type="text"
                name="company"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-900"
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-900"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="sm:col-span-2">
            <label
              htmlFor="celular"
              className="block text-sm font-semibold text-gray-900"
            >
              Celular
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-yellow-900">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-900 sm:text-sm"
                  >
                    <option>BR</option>
                  </select>
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  >
                    <path
                      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="celular"
                  type="text"
                  name="celular"
                  placeholder="(99)99999-9999"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900"
            >
              Mensagem
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-900"
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px outline-offset-2 outline-yellow-900 transition-colors duration-200 ease-in-out has-checked:bg-yellow-900">
                <span className="size-4 rounded-full bg-white shadow ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5"></span>
                <input
                  id="agree-to-policies"
                  type="checkbox"
                  name="agree-to-policies"
                  aria-label="Agree to policies"
                  className="absolute inset-0 appearance-none focus:outline-none"
                />
              </div>
            </div>
            <label
              htmlFor="agree-to-policies"
              className="text-sm text-gray-600"
            >
              Clicando aqui, você aceita os nossos{" "}
              <a href="#" className="font-semibold whitespace-nowrap text-yellow-900">
                termos de privacidade
              </a>.
            </label>
          </div>
        </div>

        {/* Submit button */}
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-yellow-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow hover:bg-yellow-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-900"
          >
            Vamos conversar
          </button>
        </div>
      </form>
    </div>
  );
}
