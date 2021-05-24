FROM node:14-alpine
ARG JENKINS_BUILD_NUMBER=

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i

COPY . .
RUN if [ ${JENKINS_BUILD_NUMBER} ]; then echo ${JENKINS_BUILD_NUMBER} > ./jenkins.txt; fi

ENV PORT=8080
EXPOSE 8080

CMD [ "node", "src/index.js" ]