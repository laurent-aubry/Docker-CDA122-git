FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install

# Copy the remaining code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# Puis lancer les commandes : 
# docker build -t bibliotheque-front .
# docker run --name bibFront -d --rm -p 3000:3000 bibliotheque-front