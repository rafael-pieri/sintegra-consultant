FROM node:12-slim

RUN mkdir /sintegra-search-engine \
    && mkdir -p /sintegra/receipts

COPY . /sintegra-search-engine

WORKDIR /sintegra-search-engine

RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

RUN npm install --only=prod

RUN chown -R node:node /sintegra-search-engine \
    && chown -R node:node /sintegra/receipts

USER node

EXPOSE 3000

ENTRYPOINT [ "./entrypoint.sh" ]