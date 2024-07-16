// Para indicar que cada funcion va a correr en el servidor, sin importar que el componente sea de tipo cliente
"use server";

export const handleCreateUser = (formData: FormData) => {
  console.log("handleCreateUser", formData);
};
