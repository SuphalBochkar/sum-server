# Use Node.js as the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the ports (configured via ENV)
EXPOSE ${PORT_APP1} ${PORT_APP2}

# Define environment variables (you can set these in your Docker run command)
ENV PORT_APP1=3001
ENV PORT_APP2=3002

# Start both services in the same container
CMD ["sh", "-c", "node service-1.js & node service-2.js"]
