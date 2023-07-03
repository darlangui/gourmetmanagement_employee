# Define a imagem base
FROM node:14-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos para o diretório de trabalho
COPY . .

# Compila o projeto
RUN npm run build

# Define a porta em que a aplicação irá rodar
ENV PORT=3001
EXPOSE $PORT

# Comando para iniciar a aplicação
CMD ["npm", "start"]
