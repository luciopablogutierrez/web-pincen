"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  nombre: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  mensaje: z.string().min(5, "El mensaje es requerido"),
});

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => {
    alert("Formulario enviado: " + JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded">
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" {...register("nombre")} className="border p-2 w-full" />
        {errors.nombre && <span className="text-red-500">{errors.nombre.message}</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} className="border p-2 w-full" />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" {...register("mensaje")} className="border p-2 w-full" />
        {errors.mensaje && <span className="text-red-500">{errors.mensaje.message}</span>}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Enviar</button>
    </form>
  );
}
