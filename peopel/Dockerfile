FROM node:14
# FROM ubuntu
LABEL Name=refael Version=0.0.1
WORKDIR /home/mattan/Desktop/refael/peopel/
COPY ["package.json", "package-lock.json", "./"]
# COPY package*.json ./
RUN npm install
COPY . .
# RUN chmod +x /index.ts
# RUN cd /home/refael/peopel
# RUN cd /dist
# WORKDIR /home/mattan/Desktop/refael/peopel/
# COPY /home/refael/peopel
# RUN chmod +x ./index.ts
# RUN npm start
# # RUN apt-get -y update && apt-get install -y fortunes
EXPOSE 3000:3000
# CMD [ "node","/dist/index.js" ]
ENTRYPOINT npm start
