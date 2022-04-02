FROM node

WORKDIR /app

COPY package.json .

RUN npm install

# copie le reste du code sur le container
COPY . .

EXPOSE 5000

ENV MONGODB_USERNAME=mongoadmin
ENV MONGODB_PASSWORD=secret

CMD ["node", "app.js"]
# CMD ["npm", "start"] // pour utiliser nodemon

#  Nettoyer les images en cours:
# docker image prune -a
# docker build -t biblio-back-node .
# puis démarrer un container sur la base de cette image :
# docker run --name biblio-backend --rm biblio-back-node
# => Le container carsh car il ne peut pas se connecter à MongoDB
#  On doit changer l'url de connexion dans le backend