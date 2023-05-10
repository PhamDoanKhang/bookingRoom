# FROM node:18-alpine as build

# WORKDIR /usr/src/app 

# COPY ["package.json", "yarn.lock", "/usr/src/app/"]

# RUN yarn install --peer

# COPY . .
# RUN cd client && yarn install --peer
# RUN cd proxy && yarn install --peer

# RUN cd client && yarn build

# CMD [ "yarn","start" ];


