# Stage 1: Build the Next.js application
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
# This ensures 'npm install' is only re-run when dependencies change
COPY package*.json ./

# Install dependencies securely and reliably
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the Next.js production app
RUN npm run build


# Stage 2: Create the final, smaller production image
FROM node:18-alpine AS runner

# Set the working directory
WORKDIR /app

# Create a non-root user for security best practices
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy only the necessary built files from the 'builder' stage
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Switch to the non-root user
USER nextjs

# Expose the port the Next.js app will run on
EXPOSE 3000

# The command to start the Next.js production server
CMD ["npm", "start"]
