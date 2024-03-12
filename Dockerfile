# use node 16 alpine image
FROM node:21-alpine3.17

# create work directory in app folder
WORKDIR /frontend

# install required packages for node image
RUN apk --no-cache add openssh g++ make python3 git

# copy over package.json files
COPY package.json /frontend/
COPY yarn.lock /frontend/

# install all depencies
RUN yarn install && yarn cache clean --force

# copy over all files to the work directory
ADD . /frontend

# expose the host and port 3000 to the server
ENV HOST 0.0.0.0
EXPOSE 3000
