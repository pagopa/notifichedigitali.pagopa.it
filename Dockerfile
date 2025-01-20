FROM node:16@sha256:f77a1aef2da8d83e45ec990f45df50f1a286c5fe8bbfb8c6e4246c6389705c0b

# Our working directory

WORKDIR /app

# Set node env
#ENV NODE_ENV=production

# Copy the required files
COPY src/app .

# Install dependencies and run build
RUN yarn --frozen-lockfile
EXPOSE 8000

CMD ["yarn", "develop"]
