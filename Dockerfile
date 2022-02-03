from node:16-slim
# version arg contains current git tag
ARG VERSION_ARG
# install git
RUN apt-get update && apt-get install -y git

# install node package
RUN npm install

# Builds the package
RUN tsc
# run getData
RUN node dist/getData.js