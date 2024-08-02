import api from "./api";

export const authService = {
  login: async (usuario, senha) => {
    try {
      const response = await api.post("/auth/login", {
        Usuario: usuario,
        Senha: senha,
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  },
};
