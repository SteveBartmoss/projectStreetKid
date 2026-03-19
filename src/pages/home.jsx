

export function Home(){

    return(
        
        <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Hola, soy Marco 👋
        </h2>
        <p className="text-gray-400 max-w-xl text-lg mb-8">
          Desarrollador enfocado en crear herramientas como clientes REST,
          editores y librerías desde cero.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-xl font-semibold">
            Ver proyectos
          </button>
          <button className="border border-gray-600 px-6 py-2 rounded-xl">
            GitHub
          </button>
        </div>
      </section>
    )

}